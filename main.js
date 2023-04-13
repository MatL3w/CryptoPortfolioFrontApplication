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
