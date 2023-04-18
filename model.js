class Model {
  #token;
  #name;
  #assets = [];
  #totalValueofAssets = 0;

  constructor() {
    this.#token = localStorage.getItem("token");
    this.#name = localStorage.getItem("name");
  }

  set token(value) {
    this.#token = value;
    localStorage.setItem("token", value);
  }
  get token() {
    return this.#token;
  }

  set name(value) {
    this.#name = value;
    localStorage.setItem("name", value);
  }
  get name() {
    return this.#name;
  }
  get assets() {
    return this.#assets;
  }
  set assets(value) {
    this.#assets = value;
  }
  get totalValueofAssets() {
    return this.#totalValueofAssets;
  }
  #countTotalValue() {
    if (this.#assets) {
      for (let i = 0; i < this.#assets.length; i++) {
        this.#totalValueofAssets += this.#assets[i].totalValue;
      }
    }
  }
  clearDataAfterUserLogOut() {
    this.#token = '';
    this.#name = '';
    this.#assets = [];
    this.#totalValueofAssets = 0;
  }
  async sendRequestSignIn(email, password) {
    try {
      await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((result) => result.json())
        .then((data) => {
          this.token = data.token;
          this.name = data.userName;
          console.log(this.token);
          console.log(this.name);
        });
    } catch (error) {
      throw error;
      return false;
    }
    return true;
  }
  async sendRequestLogOut() {
    try {
      const headers = new Headers();
      headers.append("Authorization", this.#token);
      headers.append("Content-Type", "application/json");
      await fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: headers,
      })
        .then((result) => result.json())
        .then((data) => {
          this.token = "";
          this.name = "";
        });
    } catch (error) {
      throw error;
      return false;
    }
    return true;
  }
  async sendRequestGetAssets() {
    try {
      const headers = new Headers();
      headers.append("Authorization", this.#token);
      headers.append("Content-Type", "application/json");
      await fetch("http://localhost:3000/asset", {
        method: "GET",
        headers: headers,
      })
        .then((result) => result.json())
        .then((data) => {
          this.#assets = data.assets;
          this.#countTotalValue();
        });
    } catch (error) {
      throw error;
      return false;
    }
    return true;
  }
}

export default new Model();
