const axios = require('axios');
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');
const { onDocumentCreated } = require('firebase-functions/v2/firestore');

const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp();
const db = getFirestore();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.fetchInstaPosts = onRequest(async (request, response) => {
  logger.info('Hello logs!', { structuredData: true });

  try {
    const instaResponse = await axios.get();
  } catch (error) {
    logger.error('Error fetching Instagram posts:', error);
  }
});
