const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(evnet){
    evnet.preventDefault();        // preventDefault() : 페이지의 submit이 생기면 자동 새로고침이 되는 것을 막는 함수
    localStorage.setItem(USERNAME_KEY,loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintingGreeting();                 
}

// loginForm.addEventListener("submit",onLoginSubmit);

function paintingGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;        // "Hello "+userName;  `Hello ${username}`; 이 2개는 같은 방법이다 
                                                     //  `Hello ${username}`; 쓸려면 작은 따옴표인 ''이 아니라 `` 백틱을 사용해야한다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName == null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    // show the greeting
    loginForm.classList.add("hidden");
    paintingGreeting();
}