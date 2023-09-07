const btn = document.getElementById("site-btn");
const form = document.querySelector("form");
const ul = document.querySelector("#site-list");
const submit = document.querySelector("#submit-btn");
const body = document.querySelector("body");
const restart = document.querySelector("#restart");

btn.addEventListener("click", () => {
  form.classList.remove("hiddin");
  btn.classList.add("hiddin");
  body.classList.add("body-background");
});

submit.addEventListener("click", () => {
  form.classList.add("hiddin");
  ul.classList.remove("hiddin");
  restart.classList.remove("hiddin");
  body.classList.remove("body-background");
});
const users = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const imgVal = form.img.value;
  const nameVal = form.name.value;
  const ageVal = form.age.value;
  const emailVal = form.email.value;
  const telVal = form.tel.value;
  const genderVal = form.gender.value;
  users.push({
    img: imgVal,
    name: nameVal,
    age: ageVal,
    email: emailVal,
    tel: telVal,
    gender: genderVal,
  });
  updateUI(users);
});

submit.addEventListener("click", () => {
  form.classList.add("hiddin");
  ul.classList.remove("hiddin");
  restart.classList.remove("hiddin");
  body.classList.remove("body-background");
});

function updateUI(users) {
  const template = document.createDocumentFragment();
  ul.innerHTML = "";
  users.forEach((user) => {
    const li = elementCreator("li", "site-item");
    const userImg = elementCreator("img", "item-img");
    const userName = elementCreator("h2", "item-name");
    const userNumber = elementCreator("h2", "item-number");
    const userEmail = elementCreator("h2", "item-email");
    const userAge = elementCreator("h2", "item-age");
    const userGender = elementCreator("h2", "item-gender");

    userImg.setAttribute("src", user.img);
    userImg.setAttribute("alt", "Rasm Urlda Xatolik bor");
    userName.textContent = user.name;
    userNumber.textContent = "Tel: " + user.tel;
    userEmail.textContent = "Email: " + user.email;
    userAge.textContent = "Age: " + user.age;
    userGender.textContent = "Gender: " + user.gender;
    li.appendChild(userImg);
    li.appendChild(userName);
    li.appendChild(userNumber);
    li.appendChild(userEmail);
    li.appendChild(userAge);
    li.appendChild(userGender);
    template.appendChild(li);
  });
  ul.appendChild(template);
}

restart.addEventListener("click", () => {
  ul.classList.add("hiddin");
  form.classList.remove("hiddin");
  restart.classList.add("hiddin");
});

function elementCreator(elementName, elementClass) {
  const element = document.createElement(elementName);
  element.classList.add(elementClass);
  return element;
}
