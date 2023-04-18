
class View {
  #notyficationsContainer;
  #paragraphHello;
  #buttonSignIn;
  #buttonSignUp;
  #buttonLogOut;
  #assetNameList;
  #modalSignIn;

  constructor() {
    this.#notyficationsContainer = document.getElementById(
      "notificationsContainer"
    );
    this.#paragraphHello = document.getElementById("paragraphHello");
    this.#buttonSignIn = document.getElementById("buttonSignIn");
    this.#buttonSignUp = document.getElementById("buttonSignUp");
    this.#buttonLogOut = document.getElementById("buttonLogOut");
    this.#assetNameList = document.getElementById("assetName");
    this.#getAssetNameforList();
    this.#modalSignIn = document.getElementById("signInModal");
  }

  #getAssetNameforList() {
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
          this.#assetNameList.appendChild(assetName);
        });
        console.log("finish");
      });
  }

  showNotyfication(message) {
    let paragraph = document.createElement("p");
    paragraph.textContent = JSON.stringify(message);
    this.#notyficationsContainer.style.display = "block";
    this.#notyficationsContainer.appendChild(paragraph);
    paragraph.style.opacity = 1;
    const intervalId = setInterval(() => {
      if (paragraph.style.opacity > 0) {
        paragraph.style.opacity -= 0.01;
      } else {
        this.#notyficationsContainer.removeChild(paragraph);
        clearInterval(intervalId);
      }
      if (paragraph.style.opacity == 0) {
        this.#notyficationsContainer.style.display = "none";
      }
    }, 100);
    return this;
  }

  setHelloToUser(user) {
    this.#paragraphHello.textContent = `Hello ${user}!`;
    return this;
  }
  ressetHello() {
    this.#paragraphHello.textContent = `Hello user!`;
    return this;
  }
  hideSignInButton() {
    this.#buttonSignIn.style.display = "none";
    return this;
  }
  showSignInButton() {
    this.#buttonSignIn.style.display = "inline-block";
    return this;
  }

  hideSignUpButton() {
    this.#buttonSignUp.style.display = "none";
    return this;
  }
  showSignUpButton() {
    this.#buttonSignUp.style.display = "inline-block";
    return this;
  }
  hideLogoutButton() {
    this.#buttonLogOut.style.display = "none";
    return this;
  }
  showLogoutButton() {
    this.#buttonLogOut.style.display = "inline-block";
    return this;
  }
  hideModalSignIn() {
    this.#modalSignIn.style.display = "none";
    return this;
  }
  signInAllViewActivities(name) {
    this.setHelloToUser(name)
      .hideSignInButton()
      .hideSignUpButton()
      .showLogoutButton()
      .hideModalSignIn()
      .showNotyfication(`User: ${name} succesfully sign in.`);
  }
  logOutAllActivities() {
    this.ressetHello()
    .showSignInButton()
    .showSignUpButton()
    .hideLogoutButton()
    .showNotyfication(`User Logout!`);
    return this;
  }
  
}

export default new View();