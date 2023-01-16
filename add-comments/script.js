let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

const button = document.querySelector("button");
const comments = document.querySelector("#comments");
const textarea = document.querySelector("textarea");
const userName = document.querySelector("#formName");
const userImage = document.querySelector("#formImage");

userName.value = localStorage.getItem("username");
button.addEventListener("click", addComment);

class Comment {
  constructor(text, username) {
    this.username = username;
    this.avatar =
      "https://images.wallpaperscraft.ru/image/single/kot_morda_seryy_polosatyy_56515_2048x1152.jpg";
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

    // пустой контейнер:
    let node = document.createElement("div");
    node.classList.add("comment");

    let textNode = document.createElement("div");
    textNode.classList.add("comment__text");
    textNode.textContent = filteredText;

    let usenameNode = document.createElement("div");
    usenameNode.classList.add("comment__name");
    usenameNode.textContent = this.username;

    let avatarNode = document.createElement("img");
    avatarNode.src = this.avatar;
    avatarNode.classList.add("comment__image");
    avatarNode.width = 200;

    node.append(avatarNode);
    node.append(usenameNode);
    node.append(textNode);
    parentNode.append(node);
  }
}

let arrComments = [];
let arrLocalComments = JSON.parse(localStorage.getItem("comments")) || []; // дадим массиву новое название после извлечения из хранилища

// поскольку после возврата из хранилища массив потерял все функции,
// надо их ему вернуть:
for (let i = 0; i < arrLocalComments.length; i++) {
  const localComment = arrLocalComments[i];
  const comment = new Comment(localComment.text, localComment.username);
  arrComments.push(comment);
}
render(comments, arrComments);

function addComment() {
  let text = textarea.value;
  textarea.value = "";
  let username = userName.value;

  localStorage.setItem("username", username);

  // будем пушить не текст, а весь объект комментария:
  //arrComments.push(text);
  let comment = new Comment(text, username);
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
