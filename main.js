import model from "./model.js";
import view from './view.js';

const modalSignIn = document.getElementById("signInModal");
const modalSignInExitmark = document.getElementById("signInModalExitMark");
const modalSignInInputUserName = document.getElementById("signInInputUserName");
const modalSignInInputPassword = document.getElementById("signInInputPassword");
const modalSignInInputEmail = document.getElementById("signInInputEmail");
const modalSignInButtonSubmit = document.getElementById("signInButtonSumbit");
const buttonSignIn = document.getElementById("buttonSignIn");

const modalSignUp = document.getElementById("signUpModal");
const modalSignUpExitmark = document.getElementById("signUpModalExitMark");
const modalSignUpInputPassword = document.getElementById("signUpInputPassword");
const modalSignUpInputEmail = document.getElementById("signUpInputEmail");
const modalSignUpButtonSubmit = document.getElementById("signUpButtonSumbit");
const buttonSignUp = document.getElementById("buttonSignUp");


initModalSignIn();
initModalSignUp();

function initModalSignIn(){
  buttonSignIn.addEventListener("click", (event) => {
    modalSignIn.style.display = "block";
  });
  modalSignIn.addEventListener("click", (event) => {
    if (event.target.id === modalSignIn.id) {
      modalSignIn.style.display = "none";
    }
  });
  modalSignInExitmark.addEventListener("click", (event) => {
    modalSignIn.style.display = "none";
  });
  window.addEventListener('keydown',event=>{
    if(event.key ==='Escape'){
      modalSignIn.style.display = "none";
    }
  });
  modalSignInButtonSubmit.addEventListener('click',event=>{
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        email:modalSignInInputEmail.value,
        password:modalSignInInputPassword.value,
        name:modalSignInInputUserName.value
      }),
    })
      .then((result) => result.json())
      .then((data) => {
        view.showNotyfication(data);
      });
  });
}
function initModalSignUp(){
  buttonSignUp.addEventListener("click", (event) => {
    modalSignUp.style.display = "block";
  });
  modalSignUp.addEventListener("click", (event) => {
    if (event.target.id === modalSignUp.id) {
      modalSignUp.style.display = "none";
    }
  });
  modalSignUpExitmark.addEventListener("click", (event) => {
    modalSignUp.style.display = "none";
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modalSignUp.style.display = "none";
    }
  });
  modalSignUpButtonSubmit.addEventListener("click",event=>{
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: modalSignUpInputEmail.value,
        password: modalSignUpInputPassword.value,
      }),
    })
      .then((result) => result.json())
      .then((data) => {
        modalSignUpInputEmail.value= '';
        modalSignUpInputPassword.value ='',
        modalSignUp.style.display='none';
        model.token = data.token;
        view.showNotyfication(data.userId);
        console.log(model.token);
      });
  })
}


const assetNameList = document.getElementById("assetName");
fetch("https://api.llama.fi/protocols", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((result) => result.json())
  .then((data) => {
    data.find((ele) => {
      const assetName = document.createElement("option");
      assetName.setAttribute("value", ele.name);
      assetNameList.appendChild(assetName);
    });
    console.log("finish");
  });

