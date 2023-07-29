import {getRandomInteger, getRandomArrayElement, createUniqueNumber} from './util.js';
const PHOTO_COUNT = 25;
const USER_NAMES = [
  'Миша',
  'Ваня',
  'Настя',
  'Егор',
  'Петя',
  'Яна',
];
const PHOTO_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Отличное фото!',
  'Ты молодец! Жду других постов',
];
const PHOTO_DESCRIPTIONS = [
  'Отдыхаю:)',
  'Я и мой кот',
  'Говорят у вас там понедельник',
  'Моя семья',
  'Всем привет!',
  'Ставьте лайки',
];
/**Создание объекта комментарий пользователя */
const generateCommentId = createUniqueNumber(1, 50);
const generateAvatar = () => getRandomInteger(1, 5);

const generateCommentInfo = () => {
  const avatar = generateAvatar();
  return {
    id: generateCommentId(),
    message: getRandomArrayElement(PHOTO_COMMENTS),
    avatar: `img/avatar-${avatar}.svg`,
    name: getRandomArrayElement(USER_NAMES),
  };
};
/**Генерация массива с фотографиями */

const generateAvatarUrl = createUniqueNumber(1, 25);
const generatePhotoId = createUniqueNumber(1, 50);
const generatePhotoLikes = () => getRandomInteger(15, 200);
const generateComment = () => Array.from({ length: getRandomInteger(0, 30) }, generateCommentInfo);

const generatePhotoInfo = () => {
  const photoLink = generateAvatarUrl();
  return {
    id: generatePhotoId(),
    url: `photos/${photoLink}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: generatePhotoLikes(),
    comments: generateComment(),
  };
};
function getPhotoWithComments () {
  Array.from({ length: PHOTO_COUNT }, generatePhotoInfo);
}
export {getPhotoWithComments};

