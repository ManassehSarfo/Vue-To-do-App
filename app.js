class Task{

    constructor(name){
        this.name = name;
        this.subTasks = [];
        this.assignees = [];
        this.isCompleted = false;
        this.description = "";
    }

    addSubTask(task){
        this.subTasks.push(task);
    }
}

let app = new Vue({
    el: "#app",
    data() {
        return {
            headerText: "To Do",
            titles: {
                "General": new Task("General"),
                "Others": new Task("Others")
                }, 
            addCategory: "",
            activeTab: ""
        }
    },
    methods: {
        addTitle(name){
            //assign a unique title for each main title or task
            if(!Object.keys(this.titles).includes(name)){
                this.titles[this.addCategory] = new Task(name);
            }else{
                console.log("The exact task or title name already exists")
            }
            this.addCategory = "";
        },
        setActive(title){
            console.log(title)
        }
    }
})

