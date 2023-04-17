
class View{

    #notyficationsContainer;

    constructor(){
        this.#notyficationsContainer = document.getElementById("notificationsContainer");
    }

    showNotyfication(message){
        let paragraph = document.createElement('p');
        paragraph.textContent = JSON.stringify(message);
        this.#notyficationsContainer.style.display = "block";
        this.#notyficationsContainer.appendChild(paragraph);
        paragraph.style.opacity = 1;
        const intervalId = setInterval(()=>{
            if (paragraph.style.opacity >0)
            {
                paragraph.style.opacity -= 0.01;
            }
            else{
                this.#notyficationsContainer.removeChild(paragraph);
                clearInterval(intervalId);
            }
            if(paragraph.style.opacity == 0){
                this.#notyficationsContainer.style.display ="none";
            }
        },100)
    }
}

export default new View();