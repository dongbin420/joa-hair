const axios = require('axios');
const { onSchedule } = require('firebase-functions/v2/scheduler');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { onRequest } = require('firebase-functions/v2/https');
// const logger = require('firebase-functions/logger');

initializeApp();
const db = getFirestore();
const batch = db.batch();
const MAIN_API_URL = `${process.env.INSTAGRAM_API_BASE_URL}/v20.0/${process.env.INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,permalink,timestamp,thumbnail_url,username,caption,is_shared_to_feed,children{id,media_type,media_url,thumbnail_url}&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}&pretty=1&limit=10000`;

// 인스타그램 api이용해서 모든 post 가져와 firestore에 저장하는 함수(매일 1번)
exports.scheduledFetchInstaPosts = onSchedule(
  {
    schedule: '0 0 * * *',
    timeZone: 'UTC',
    region: 'australia-southeast1',
  },
  async () => {
    try {
      const instagramData = await axios.get(MAIN_API_URL);
      const instagramPosts = instagramData.data.data;

      for (const post of instagramPosts) {
        const postRef = db.collection('instagram_all_posts').doc(post.id);
        const currentPostDoc = await postRef.get();

        // 새로운 게시물이나, 변경된 게시물만 업데이트
        if (
          !currentPostDoc.exists ||
          JSON.stringify(currentPostDoc.data()) !== JSON.stringify(post)
        ) {
          batch.set(postRef, post);
        }
      }

      await batch.commit();

      console.log('Instagram posts updated successfully');
    } catch (error) {
      console.error('Error fetching Instagram data:', error);
    }
  },
);

// 인스타그램 api이용해서 모든 post 가져와 firestore에 저장하는 함수(요청시)
exports.manualFetchInstaPosts = onRequest({ region: 'australia-southeast1' }, async (req, res) => {
  try {
    const instagramData = await axios.get(MAIN_API_URL);
    const instagramPosts = instagramData.data.data;

    for (const post of instagramPosts) {
      const postRef = db.collection('instagram_all_posts').doc(post.id);
      const currentPostDoc = await postRef.get();

      // 새로운 게시물이나, 변경된 게시물만 업데이트
      if (
        !currentPostDoc.exists ||
        JSON.stringify(currentPostDoc.data()) !== JSON.stringify(post)
      ) {
        batch.set(postRef, post);
      }
    }

    await batch.commit();

    console.log('Instagram posts updated successfully');
    res.send('Manual trigger executed successfully!');
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
  }
});

// document들 내림차순으로 정렬 후 전달.(클라이언트에서 fetch할 때 마다.)(모든 docs)
// exports.getSortedInstagramData = onRequest(
//   { region: 'australia-southeast1' },
//   { cors: [/joahair\.com$/] },
//   async (req, res) => {
//     try {
//       const instagramDataRef = db.collection('instagram_all_posts');
//       const querySnapshot = await instagramDataRef.orderBy('timestamp', 'desc').get();

//       const data = [];
//       querySnapshot.forEach((doc) => {
//         data.push(doc.data());
//       });

//       res.status(200).json(data);
//     } catch (error) {
//       console.error('Error fetching sorted data:', error);
//     }
//   },
// );

// document들 내림차순으로 정렬 후 개수 맞춰서 전달. (클라이언트 http 요청에 따라 8개 16개)
exports.getSortedInstagramPosts = onRequest(
  { region: 'australia-southeast1' },
  { cors: [/joahair\.com$/] },
  async (req, res) => {
    try {
      const postSize = Number(req.query.postSize) || 16;
      const lastVisiblePost = req.query.lastVisiblePost || null;
      console.log('postSize:', postSize);
      console.log('lastVisiblePost:', lastVisiblePost);
      let query = db.collection('instagram_all_posts').orderBy('timestamp', 'desc').limit(postSize);

      if (lastVisiblePost) {
        const lastDoc = await db.collection('instagram_all_posts').doc(lastVisiblePost).get();
        if (lastDoc.exists) {
          query = query.startAfter(lastDoc);
        } else {
          console.error('Last visible post does not exist:', lastVisiblePost);
          res.status(404).json({ error: 'Last visible post not found' });
          return;
        }
      }

      const querySnapshot = await query.get();
      const data = [];

      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching sorted posts:', error);
    }
  },
);

// instagram_all_posts 컬렉션에서 특정 post만 선택해서 selected_instagram_posts컬렉션에 추가하는 함수(수동 호출)
exports.copySelectedInstagramPosts = onRequest(
  { region: 'australia-southeast1' },
  async (req, res) => {
    const postIds = [
      '18027365918493604',
      '17991085172648305',
      '18017946779338179',
      '18010264298227357',
      '18435528307019745',
      '17969291120610239',
      '18051885811630862',
      '18057197821592914',
    ];

    const allPostsRef = db.collection('instagram_all_posts');
    const selectedPostRef = db.collection('selected_instagram_posts');
    const batch = db.batch();

    for (const postId of postIds) {
      const docRef = allPostsRef.doc(postId);
      const doc = await docRef.get();

      if (doc.exists) {
        const newDocRef = selectedPostRef.doc(doc.id);
        batch.set(newDocRef, doc.data());
      } else {
        console.log(`Document with ID ${postId} does not exist.`);
      }
    }

    await batch.commit();

    console.log('Selected posts copied successfully.');
    res.status(200).json({ message: 'Selected posts copied successfully.' });
  },
);
