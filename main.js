import model from "./model.js";

const modalSignIn = document.getElementById("signInModal");

const buttonSignIn = document.getElementById("buttonSignIn");




buttonSignIn.addEventListener("click", (event) => {
  modal.style.display = "block";
});

modal.addEventListener("click", (event) => {
  if(event.target.id === modal.id)
  {
    modal.style.display = "none";
  }
});

overlay.addEventListener("click", (event) => {
  modal.style.display = "none";
  overlay.style.display = "none";
  console.log("lol");
});

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
