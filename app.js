let app = new Vue({
    el: "#app",
    data() {
        return {
            headerText: "To Do",
            titles: {"General": {}, "Others": {}}, 
            addCategory: ""
        }
    },
    methods: {
        addTitle(){
            this.titles[this.addCategory] = {};
            this.addCategory = "";
        }
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