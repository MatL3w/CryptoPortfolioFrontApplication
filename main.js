import model from "./model.js";
import view from './view.js';

const modalSignIn = document.getElementById("signInModal");
const modalSignInExitmark = document.getElementById("signInModalExitMark");
const modalSignInInputUserName = document.getElementById("signInInputUserName");
const modalSignInInputPassword = document.getElementById("signInInputPassword");
const modalSignInInputEmail = document.getElementById("signInInputEmail");
const modalSignInButtonSubmit = document.getElementById("signInButtonSumbit");
const buttonSignIn = document.getElementById("buttonSignIn");

initModalSignIn();

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
const obj = {
  lo:'asd',
}
view.showNotyfication(obj);

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

