import { styled } from 'styled-components';
import type { CSSProp } from 'styled-components';

export const thumbnailImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center; // 필요한지 여부 확인
  position: relative;
  transition: transform 0.5s ease;
`;

export const InstagramIcon = styled.img`
  opacity: 0;
  position: absolute;
  z-index: 1;
  width: 25px;
  height: 25px;
  bottom: 10px;
  right: 10px;
  transition: opacity 0.5s ease;
`;

export const SlideIcon = styled.img`
  position: absolute;
  z-index: 1;
  width: 25px;
  height: 20px;
  top: 10px;
  right: 10px;
`;

export const PlayIcon = styled.img`
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const VideoIcon = styled.img`
  position: absolute;
  z-index: 1;
  height: 20px;
  top: 10px;
  right: 10px;
`;

export const ClockWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  display: flex;
  align-items: center;
  color: white;
  gap: ${({ theme }) => theme.spacing.spacing2};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap: 0;
  }
`;

export const ClockIcon = styled.img`
  opacity: 0;
  width: 15px;
  height: 15px;
  transition: opacity 0.5s ease;
  margin-top: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: none;
  }
`;

export const ClockText = styled.span`
  opacity: 0;
  transition: opacity 0.5s ease;
  font-size: ${({ theme }) => theme.text.xs.fontSize};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 10px;
  }
`;

export const InstagramUsername = styled.span`
  opacity: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
  color: white;
  z-index: 1;
  transition: opacity 0.5s ease;
  font-size: ${({ theme }) => theme.text.xs.fontSize};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 10px;
  }
`;

export const PostWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'customCss' && prop !== 'loaded',
})<{ customCss: CSSProp; loaded: boolean }>`
  display: ${({ loaded }) => (loaded ? 'block' : 'none')};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  aspect-ratio: 2 / 3;

  ${({ customCss }) => customCss && customCss};

  /* aspect-ratio대신 쓸 수도 있음 */
  /* max-height: 400px; */

  &:hover
    ${InstagramIcon},
    &:hover
    ${ClockIcon},
    &:hover
    ${ClockText},
    &:hover
    ${InstagramUsername} {
    opacity: 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 0.5;
  }

  &:hover ${thumbnailImg} {
    transform: scale(1.06);
  }
`;
