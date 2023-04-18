class Model {
  #token;
  #name;
  #assets=[];

  constructor() {
    this.#token = localStorage.getItem("token");
    this.#name = localStorage.getItem("name");
  }

  set token(value) {
    this.#token = value;
    localStorage.setItem('token',value);
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
 async sendRequestSignIn(email,password){
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
  };
  async sendRequestLogOut(){
  try {
    const headers = new Headers();
    headers.append("Authorization", this.#token);
    headers.append("Content-Type", "application/json");
    await fetch("http://localhost:3000/logout", {
      method: "POST",
      headers: headers
    })
      .then((result) => result.json())
      .then((data) => {
        this.token = '';
        this.name = '';
      });
  } catch (error) {
    throw error;
    return false;
  }
  return true;
  };
  async sendRequestGetAssets(){
      try {
        const headers = new Headers();
        headers.append("Authorization", this.#token);
        headers.append("Content-Type", "application/json");
        await fetch("http://localhost:3000/getassets", {
          method: "GET",
          headers: headers,
        })
          .then((result) => result.json())
          .then((data) => {
            this.#assets = data.assets;
            console.log(this.#assets);
          });
      } catch (error) {
        throw error;
        return false;
      }
      return true;
  }
  
}

export default new Model();
