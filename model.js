
class Model{
    #token;
    
    constructor(){
        this.#token =localStorage.getItem('token')
    }

    set token(value){
        this.#token = value;
    }
    get token(){
        return this.#token;
    }
}

export default new Model();