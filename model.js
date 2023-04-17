class Model {
  #token;
  #name;

  constructor() {
    this.#token = localStorage.getItem("token");
    this.#name = localStorage.getItem("name");
  }

  set token(value) {
    this.#token = value;
    //console.log
  }
  get token() {
    return this.#token;
  }

  set name(value) {
    this.#name = value;
    //console.log
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
  }
}

export default new Model();
