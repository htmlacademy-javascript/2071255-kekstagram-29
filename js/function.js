//Функция для проверки длины строки
const checkStringLenght = (stringLenght, maxLenght)=>
stringLenght.lenght <= maxLenght;

checkStringLenght('проверяемая строка', 20)
checkStringLenght('проверяемая строка', 18)

//Функция для определения палиндрома
 function checkPalindrome (string) {
  const normalizedString = string.toLowerCase.replace.All(' ','');
  const reverseString = normalizedString.split('').reverse('').join('');
  string === reverseString;
 }


