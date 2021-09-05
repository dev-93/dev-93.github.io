const loginForm = document.querySelector("#login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASNAME = "hidden";

const onLogin = (e) => {
    e.preventDefault();
    const usernameValue = username.value;
    
    loginForm.classList.add(HIDDEN_CLASNAME);

    localStorage.setItem('username', usernameValue);
    paintGreetings();
};

const checkUserName = localStorage.getItem('username');

const paintGreetings = () => {
    const userNameValue = localStorage.getItem('username');
    greeting.innerText = `hello ${userNameValue}`;
    greeting.classList.remove(HIDDEN_CLASNAME);
}

if (!checkUserName) {
    loginForm.classList.remove(HIDDEN_CLASNAME);
    loginForm.addEventListener("submit", onLogin);
} else {
    loginForm.classList.add(HIDDEN_CLASNAME);
    paintGreetings();
}