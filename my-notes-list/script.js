let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

const button = document.querySelector("button");
const comments = document.querySelector("#comments");
const textarea = document.querySelector("textarea");

button.addEventListener("click", addComment);

class Comment {
  constructor(text, date) {
    this.date = date;

    this.text = text;
  }

  // добавим в класс метод, который
  // будет рисовать один комментарий:

  render(parentNode) {
    const filterWords = ["viagra", "xxx"];
    let filteredText = this.text;
    for (let word of filterWords) {
      let reg = new RegExp(word, "ig");
      filteredText = filteredText.replace(reg, "***");
    }
    let date = this.date;
    // пустой контейнер:
    let node = document.createElement("div");
    node.classList.add("comment");

    let textNode = document.createElement("div");
    textNode.classList.add("comment__text");
    textNode.textContent = filteredText;

    let dateNode = document.createElement("div");
    dateNode.classList.add("comment__name");
    dateNode.textContent = date;

    node.append(dateNode);

    node.append(textNode);
    parentNode.append(node);
  }
}

let arrComments = [];
let arrLocalComments = JSON.parse(localStorage.getItem("comments")) || []; // дадим массиву новое название после извлечения из хранилища

for (let i = 0; i < arrLocalComments.length; i++) {
  const localComment = arrLocalComments[i];
  const comment = new Comment(localComment.text, localComment.date);
  arrComments.push(comment);
}
render(comments, arrComments);

function addComment() {
  let text = textarea.value;
  textarea.value = "";
  let num = new Date();
  let date;
  if (num.getMonth() + 1 < 10) {
    date = `${num.getDate()}.0${num.getMonth() + 1}.${num.getFullYear()}`;
  } else {
    date = `${num.getDate()}.${num.getMonth() + 1}.${num.getFullYear()}`;
  }

  let comment = new Comment(text, date);
  arrComments.push(comment);

  // преобразуем массив комментариев в строку и отправим в хранилище:
  localStorage.setItem("comments", JSON.stringify(arrComments));

  comments.innerHTML = "";
  //  вызываем render и рисуем весь список комментариев:
  render(comments, arrComments);
}

// эта функция будет рисовать весь
// список комментариев:
function render(parentNode, data) {
  for (let i = 0; i < data.length; i++) {
    let item = data[i]; // элемент массива - это экземпляр класса, а значит у него есть метод render:
    item.render(parentNode);
  }
}
