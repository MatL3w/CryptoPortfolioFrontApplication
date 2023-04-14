const modal = document.getElementById("myModal");
const overlay = document.querySelector(".modal");
const buttonSignIn = document.getElementById("buttonSignIn");
const exemple = document.getElementById("exemple");
console.log(buttonSignIn);

buttonSignIn.addEventListener("click", (event) => {
  console.log('lol');
  console.log(modal.style.display);
  modal.style.display ="block";
  overlay.style.display = "block";

});

overlay.addEventListener('click',(event)=>{
  modal.style.display = 'none';
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
