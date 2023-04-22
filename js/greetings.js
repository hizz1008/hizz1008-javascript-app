const loginForm = document.querySelector("#login-form");
const logoutForm = document.querySelector("#logout-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#loginout-btn");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}
function onLogoutSubmit(e) {
  e.preventDefault();
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
}
function paintGreetings(username) {
  const date = new Date();
  const houre = date.getHours();
  if (houre >= 6 && houre < 11) {
    greeting.innerText = `Good morning ${username}`;
  } else if (houre >= 12 && houre < 16) {
    greeting.innerText = `Good afternoon ${username}`;
  } else {
    greeting.innerText = `Good evening ${username}`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
logoutForm.addEventListener("click", onLogoutSubmit);
