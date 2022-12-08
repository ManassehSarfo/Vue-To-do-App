let app = new Vue({
    el: "#app",
    data() {
        return {
            headerText: "Vue toDo App"
        }
    },
    methods: {

    }
})

const aCard = document.querySelector(".card");


aCard.addEventListener('click', () => {
    let selectedText = aCard.innerHTML;
    if(selectedText === "Hello World"){
        aCard.innerHTML = "Clicked on!"
    }else{
        aCard.innerHTML = "Hello World"
    }
})