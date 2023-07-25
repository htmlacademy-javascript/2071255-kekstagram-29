/*
ФУНКЦИЯ для создания МАССИВА из 25 сгенерированных ОБЪЕКТОВ

Каждый объект - описание фотографии

СТРУКТУРА ОБЪЕКТА:
id от 1 до 25
url вида photos/1-25.jpg !!Адреса картинок не должны повторяться
description - описание
likes - случайное число лайков от 15 до 200
comments - МАССИВ ОБЪЕКТОВ {
  {
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}
}
*/
const PHOTO_COUNT = 25;
const COMMENTS_COUNT = 2;
const USER_NAME = [
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
const PHOTO_DESCRIPTION = [
  'Отдыхаю:)',
  'Я и мой кот',
  'Говорят у вас там понедельник',
  'Моя семья',
  'Всем привет!',
  'Ставьте лайки',
];
/*Функция для генерации случайного числа из диапазона*/
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
/*Генерация случайного элемента для массива */
const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];
/*Проверка на уникальность при генерации*/
const createUniqueNumber = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger (min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
      while (previousValues.includes(currentValue)) {
        currentValue = getRandomInteger (min, max);
    };
    previousValues.push(currentValue);
    return currentValue;
  }

};
/**Создание объекта комментарий пользователя */
const generateCommentId = createUniqueNumber(1, 50);
const generateAvatar = () => getRandomInteger(1, 5);

const generateCommentInfo = () => {
  const avatar = generateAvatar();
  return{
  id: generateCommentId(),
  message: getRandomArrayElement(PHOTO_COMMENTS),
  avatar: `img/avatar-${avatar}.svg`,
  name: getRandomArrayElement(USER_NAME),
  }
};
console.log(Array.from({length: 4}, generateCommentInfo));
/**Генерация массива с фотографиями */

const generateAvatarUrl = createUniqueNumber(1, 25);
const generatePhotoId = createUniqueNumber(1, 50);
const generatePhotoLikes = () => getRandomInteger(15, 200);
const generateComment = () => Array.from({length: getRandomInteger(0, 30)}, generateCommentInfo);

const generatePhotoInfo = () => {
  const photoLink = generateAvatarUrl();
  return {
    id: generatePhotoId(),
    url: `photos/${photoLink}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: generatePhotoLikes(),
    comments: generateComment(),
  }
};
console.log(Array.from({length: 4}, generatePhotoInfo));
