//Функция для проверки длины строки
const checkStringLength = (stringLength, maxLength) =>
  stringLength.length <= maxLength;

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);

//Функция для определения палиндрома
function checkPalindrome(string) {
  const normalizedString = string.toLowerCase.replace.All(' ', '');
  const reverseString = normalizedString.split('').reverse('').join('');
  return (string === reverseString);
}
checkPalindrome('тор');


