// ВАЛИДАЦИЯ ФОРМЫ:

//--  второй вариант:

// let error = document.querySelector("#errorInfo");
// let fun = document.querySelector("#funInfo");
// let nameInfo = document.querySelector("#nameInfo");
// let finalError;
// let hello = document.querySelector("#formName");

// let summaryError;

// //   нам надо подписаться на событие на том элементе, на котором оно происходит - в данном случае это событие "submit" на элементе "form":

// let form = document.querySelector("form");

//  дальше надо подписаться на событие submit (и вызвать функцию, которая при этом сработает):

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   error.textContent = "";
//   summaryError = "";
//   fun.innerHTML = "";
//   nameInfo.innerHTML = "";

//   checkIput('input[name = "name"]', "имя пользователя");
//   checkIput('input[name = "email"]', "ваш email");
//   checkIput('input[name = "password"]', "пароль");
//   checkIput('input[name = "phone"]', "номер телефона");

//   let checkbox = document.querySelector('input[name = "agreement"]');
//   if (!checkbox.checked) {
//     summaryError += `Пожалуйста, подтвердите согласие!<br>`;
//   }

//   let n = document.querySelector('input[name = "name"]');
//   let inputName = n.value;
//   if (isFinite(inputName) && inputName.length > 0) {
//     nameInfo.innerHTML += `Пожалуйста, не используйте цифры!`;
//   }

//   let select = document.querySelector('select[name = "gender"]');
//   if (select.value == "male") {
//   } else if (select.value == "female") {
//   } else if (select.value == "unknown") {
//     summaryError += `Пожалуйста, выберите пол!<br>`;
//   }

//   let hand = document.querySelector("#formLeftHanded");
//   if (hand.checked) {
//     fun.innerHTML += `Вы не пожалеете!<br>`;
//   }

//   let hello = document.querySelector("#formName").value;

//   if (
//     document.querySelector('input[name = "name"]').value.length > 0 &&
//     document.querySelector('input[name = "email"]').value.length > 0 &&
//     document.querySelector('input[name = "password"]').value.length > 0 &&
//     document.querySelector('input[name = "phone"]').value.length > 0 &&
//     checkbox.checked
//   ) {
//     document.querySelector(".hello-name").innerHTML = `Привет, ${hello}!<br>`;
//   }

//   error.innerHTML = summaryError;
// });

// function checkIput(selector, inputName) {
//   let input = document.querySelector(selector);

//   if (input.value.length > 0) {
//   } else {
//     summaryError += `Пожалуйста, напишите ${inputName}!<br>`;
//   }
// }

//    первый вариант:

// let nameUser = document.querySelector('input[name = "name"]');
// let email = document.querySelector('input[name = "email"]');
// let password = document.querySelector('input[name = "password"]');
// let phone = document.querySelector('input[name = "phone"]');

// function check() {
//   error.textContent = "";

//   if (nameUser.value == "") {
//     error.innerHTML += `Пожалуйста введите ваше имя!<br>`;
//   }

//   if (email.value == "") {
//     error.innerHTML += `Пожалуйста введите ваш email!<br>`;
//   }
//   if (password.value == "") {
//     error.innerHTML += `Пожалуйста введите password!<br>`;
//   }
//   if (phone.value == "") {
//     error.innerHTML += `Пожалуйста введите номер телефона!<br>`;
//   }

//   if (password.value.length <= 5 && password.value.length >= 1) {
//     error.innerHTML += `Ваш пароль слишком короткий!<br>`;
//   }
// }

//----события-меняем цвет фона------

let formColored = document.querySelector("#maincolor");
let shadeOption = document.querySelector("#shadeOption");
shadeOption.value = "";

function select() {
  formColored.classList.remove("colored1");
  formColored.classList.remove("colored2");
  formColored.classList.remove("colored3");
  switch (shadeOption.value) {
    case "green":
      formColored.classList.add("colored1");
      break;
    case "orange":
      formColored.classList.add("colored2");
      break;
    case "red":
      formColored.classList.add("colored3");
      break;
  }
}

//--- поменять фон инпута при наведении: (наверно, это можно было как-то упорядочить, но так и не смогла)

function colorMeP() {
  document.querySelector("#formPassword").style.background = "#9dae94";
}
function colorMeBackP() {
  document.querySelector("#formPassword").style.background = "white";
}

function colorMeN() {
  document.querySelector("#formName").style.background = "#9dae94";
}
function colorMeBackN() {
  document.querySelector("#formName").style.background = "white";
}

function colorMeE() {
  document.querySelector("#formEmail").style.background = "#9dae94";
}
function colorMeBackE() {
  document.querySelector("#formEmail").style.background = "white";
}

//-- выбор картинки кота---------------------

function show() {
  switch (document.querySelector("#breed").value) {
    case "oriental":
      document.querySelector("#catImage").src = "./images/cats/oriental1.jpg";
      break;
    case "maine coon":
      document.querySelector("#catImage").src = "./images/cats/maine coon.jpg";
      break;
    case "bengal":
      document.querySelector("#catImage").src = "./images/cats/bengal.jpeg";
      break;
    case "siamese":
      document.querySelector("#catImage").src = "./images/cats/siamese.jpg";
      break;
    case "british shorthair":
      document.querySelector("#catImage").src =
        "./images/cats/british shorthair.jpg";
      break;
    case "scottish":
      document.querySelector("#catImage").src = "./images/cats/scottish.png";
      break;
    case "russian blue":
      document.querySelector("#catImage").src =
        "./images/cats/russian blue.jpeg";
      break;
    case "persian":
      document.querySelector("#catImage").src = "./images/cats/persian.jpg";
      break;
    case "nobreed":
      document.querySelector("#catImage").src = "./images/cats/nobreed.jpg";
      break;
  }
}

//-----------поменять картинку по клику-верхняя-------------------------------------------------
let control = 0;
let mittImage = document.getElementById("mitt_image1");
function changeMe() {
  if (control == 0) {
    // let mittImage = document.getElementById("mitt_image1");
    mittImage.src = "./images/cats/main-photo.jpg";
    control = 1;
  } else {
    mittImage.src = "./images/cats/main-photo_2.jpg";
    control = 0;
  }
}
