const loginForm = document.querySelector("#login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    const user = new User(userName);

    const name = user.setItem();
    user.printUserName(name);

}
loginForm.addEventListener("submit", onLoginSubmit);

if(localStorage.getItem("userName") === null){
    loginForm.classList.remove("hidden");
    greeting.classList.add("hidden");
}
else{
    greeting.classList.remove("hidden");
    loginForm.classList.add("hidden");
    greeting.textContent = `Hello ${localStorage.getItem("userName")}`;
}

class User{
    constructor(userName){
        this.userName = userName;
    }
    setItem = function() {
        localStorage.setItem("userName", this.userName)
    }
    printUserName = function(name){
        greeting.textContent = `Hello ${name}`;
        loginForm.classList.add("hidden");
        greeting.classList.remove("hidden");
    }
}