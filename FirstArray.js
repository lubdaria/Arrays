// 1. Почитати про бренч(гілка) в гітє. !!!!
// 2. Перебрати масив із чисел по порядку. Не важливо які числа, головне щоб по порядку переберались.
// 3. Вивести числа із масива чисел в порядку зростання. Наприкл., якщо 1 4 8 7 3 8 9 - то 1 3 4....
// 4. Вивести числа із масиву масивів чисел по порядку. 
// 5. Вивести числа із масиву масивів чисел в порядку спадання. Наприкл., як матриця виглядає
// 6. Вивести із масиву строк, спочатку символи, які йдуть у малому реєстрі, а потім, щоб йшли символи зі строки у великому реєстрі. Приклад у скайпі.
// 7. Вивечти символ із масиву строк за тим номером, скільки символів великого реєстру у строці. Тобто якщо 4 сиволи великого реєстру, то виводимо 4 символ строки. Приклад в скайпі.
// + вивести третій символ строки в одному рядку із пункту 7. Якщо не має символів великих реєстрів або третього символу в строкє, то нікого не виводимо. Лише виводимо парно.
// 8. Подумати як Владік прочитав слово "парно". 

// Стилістика схожа як по оформленню функцій
// Щоб не вибивала помилка, якщо Владік буде вводити в масиві строк число, а щоб був будь-який надпис. Якщо пустий масив, то теж надпис, але інша, якщо NaNn то ще інший надпис


let array = [ 'VaSYlYnA iS do', 'tAnk Bober', 'ShEEse my'];
showArray(array);

function showArray(text) {
  showFirstTask(array);
  showSecondTask(array);
  showThirdTask(array);
  showSixthTaskOne(array);
  showSixthTaskTwo(array);
  showLastTask(array);
}

function showFirstTask(text) {
  for(let i of text){
    console.log(i);
  }
}

function showSecondTask(text){
  for(let i = 0; i <text.length; i++){
  text.sort(compareNumber);
  console.log(text[i]);
  }
}

function compareNumber(x, y){
  if (x > y) return 1;
  if (x === y) return 0;
  if (x < y) return -1;
}

function showThirdTask(text){
 for (let i of text){
   showNumber(i);
 }
}

function showNumber(text){
  for (let a of text){
   if (a = a)
     console.log(a);
  
  }
}

function showSixthTaskOne(text){
  let result = '';
  let letter = '';

  for (let i = 0; i < text.length; i++){
    for (let j = 0; j < text[i].length; j++){
      if (text[i][j] >= 'a' && text[i][j] <= 'z') {
        result = result + text[i][j];}
      if (text[i][j] >= 'A' && text[i][j] <= 'Z'){
        letter = result + letter + text[i][j];}
    }
  }
  console.log(letter);
}

function showSixthTaskTwo(text){
    showSmallLetter(text);
    showUperLetter(text);
}

function showSmallLetter(text){
  for (let i = 0; i < text.length; i++){
    showStringSymbolOne(text[i]);
  }
}

function showStringSymbolOne(text) {
  for (let j = 0; j < text.length; j++){
    if (text[j] >= 'a' && text[j] <= 'z')
      console.log(text[j]);
    }
}

function showUperLetter(text){
  for (let i = 0; i < text.length; i++){
    showStringSymbolTwo(text[i]);
  }
}

function showStringSymbolTwo(text){
  for (let j = 0; j < text.length; j++){
    if (text[j] >= 'A' && text[j] <= 'Z')
    console.log(text[j]);
  }
}

function showLastTask(text){
  for (let i = 0; i < text.length; i++){
    switch (text[i]){
      case "Nan":
        console.log("No, who are you?");
        break;
      case " ":
        console.log("Do you want orphan?");
        break;
      case +text[i]:
        console.log("You are bomba");
        break;
      default:
        console.log(text[i]);
        break;
    }
  }
}

// 7. Вивечти символ із масиву строк за тим номером, скільки символів великого реєстру у строці. Тобто якщо 4 сиволи великого реєстру, то виводимо 4 символ строки. Приклад в скайпі.
// + вивести третій символ строки в одному рядку із пункту 7. Якщо не має символів великих реєстрів або третього символу в строкє, то нікого не виводимо. Лише виводимо парно.

let aray = ['VaSYlYnA iS do', 'TAnk Bober', 'ShEEse my'];
showLetter(aray);


function showLetter(text){
  for(let i = 0; i < text.length; i++){
    showThirdLetter(text[i])
  }
}

function showThirdLetter(text){
  ;
  for (let j = 0; j < text.length; j++ ){
    if ( text[j] >= 'A' && text[j] <= 'Z'){
      console.log(text[j].length);
      
    }
    
  }
  // console.log(result);
}
// почитати за return 
// потрібно знайти довжину символів великих зі строки і потім вивести той символ скільки великих літер, 
// вказати що і == 2 і вивести переменну яка буде дорівнювати що переменна із великими строками + ця переменна.
// створити гілки із зайвими кодами