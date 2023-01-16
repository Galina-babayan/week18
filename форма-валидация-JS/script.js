// ВАЛИДАЦИЯ ФОРМЫ:

// ВАЛИДАЦИЯ ФОРМЫ JS

// первый вариант: ---------------------------------------------

// let errors = [];
// console.log(errors);

// function checkValidity(input) {
//   let validity = input.validity;
//   if (validity.valueMissing) {
//     errors.push("Поле " + input.placeholder + " не заполнено");
//     console.log(errors);
//   }
//   if (validity.typeMismatch) {
//     errors.push("значение " + input.placeholder + " не соответствует типу");
//   }
//   if (validity.patternMismatch) {
//     errors.push("Неверный формат заполнения");
//     console.log(errors);
//   }
//   if (validity.rangeOverflow) {
//     let max = getAttributeValue(input, "max");
//     errors.push("Максимальное значение не может быть больше, чем" + max);
//     console.log(errors);
//   }
//   if (validity.rangeUnderflow) {
//     let min = getAttributeValue(input, "min");
//     errors.push("Минимальное значение не может быть меньше, чем" + min);
//   }
// }

// errors = [];
// function checkAll() {
//   errors = [];
//   let inputs = document.querySelectorAll("input");

//   for (let input of inputs) {
//     checkValidity(input);
//   }
//   console.log(errors);
//   document.querySelector("#errorInfo").innerHTML = errors.join(". <br>");
// }

// Второй вариант, регулярные выражения:

// let error = document.querySelector("#errorInfo");
// let fun = document.querySelector("#funInfo");
// let nameInfo = document.querySelector("#nameInfo");
// let finalError;
// let hello = document.querySelector("#formName");

// let summaryError;

const username = document.querySelector("input[name = 'name']");
const email = document.querySelector("input[name = 'email']");
const login = document.querySelector("input[name = 'login']");
const password = document.querySelector("input[name = 'password']");
const passwordTwo = document.querySelector("input[name = 'passwordTwo']");
const phone = document.querySelector("input[name = 'phone']");

let errors = [];
console.log(errors);

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  errors = [];

  //   error.textContent = "";
  //   summaryError = "";
  //   fun.innerHTML = "";
  //   nameInfo.innerHTML = "";
  ValidateName();
  ValidateEmail();
  ValidateLogin();
  ValidatePassword();
  ValidatePasswordTwo();
  ValidatePhone();
  ValidateСheckbox();
  ValidateSelect();
  ValidateRadio();

  console.log(errors);
  if (errors.length == 0) {
    document.querySelector(
      "#errorInfo"
    ).innerHTML = `${username.value}, добро пожаловать на сайт!`;
  }
});

function ValidateСheckbox() {
  let checkbox = document.querySelector('input[name = "agreement"]');
  if (!checkbox.checked) {
    errors.push("Пожалуйста, подтвердите согласие!");
    document.querySelector("#errorInfo").innerHTML = errors.join(". <br>");
  }
}

function ValidateSelect() {
  let select = document.querySelector('select[name = "gender"]');
  if (select.value == "male") {
  } else if (select.value == "female") {
  } else if (select.value == "unknown") {
    errors.push("Пожалуйста, выберите пол!");
    document.querySelector("#errorInfo").innerHTML = errors.join(". <br>");
  }
}

function ValidateRadio() {
  let hand = document.querySelector("#formLeftHanded");
  if (hand.checked) {
    fun.innerHTML += `Вы не пожалеете!<br>`;
  }
}

function ValidateName() {
  let pattern = /^[А-ЯЁ|A-Z][а-яё|a-z]*$/;
  if (username.value.match(pattern)) {
  } else {
    errors.push("Имя должно начинаться с большой буквы!");
    document.querySelector("#errorInfo").innerHTML = errors.join(". <br>");
  }
}

function ValidateEmail() {
  let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  if (email.value.match(pattern)) {
  } else {
    console.log("Ваш адрес электронной почты введен неверно!");
    errors.push("Ваш адрес электронной почты введен неверно!");
    document.querySelector("#errorInfo").innerHTML = errors.join(". <br>");
  }
}

function ValidateLogin() {
  let pattern = /^[a-z0-9_-]{3,16}$/i;
  if (login.value.match(pattern)) {
  } else {
    errors.push("Логин может содержать только буквы и цифры!");
    document.querySelector("#errorInfo").innerHTML = errors.join(". <br>");
  }
}

function ValidatePassword() {
  let pattern =
    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/i;
  if (password.value.match(pattern)) {
  } else {
    errors.push(
      "Пароль должен содержать не менее 8 символов, включая латинские буквы разных регитсров, символы и цифры!"
    );
    document.querySelector("#errorInfo").innerHTML = errors.join(". <br>");
  }
}

function ValidatePasswordTwo() {
  if (password.value == passwordTwo.value) {
  } else {
    errors.push("Пароли должны совпадать!");
    document.querySelector("#errorInfo").innerHTML = errors.join(". <br>");
  }
}

function ValidatePhone() {
  let pattern = /^8[0-9]{10}$/;
  if (phone.value.match(pattern)) {
  } else {
    errors.push("Номер телефона должен содержать 11 цифр, первая цифра 8!");
    document.querySelector("#errorInfo").innerHTML = errors.join(". <br>");
  }
}

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
