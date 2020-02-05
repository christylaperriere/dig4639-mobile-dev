import "./index.css"

class Task {
    constructor(props) {

        this.props = props;
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        

        this.onClick = this.onClick.bind(this);

        checkbox.addEventListener("change",this.onClick);

        this.element.appendChild(checkbox);
      
        let span = document.createElement("span");
    
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
        this.element.className = "task";

        //Fixes issue #87 - text is erased when user adds new task
        document.getElementById("taskText").value = "";


    }
    onClick(e) {
        //assignment operator
        var myString = ""
        //comparison operator
        if(myString == "") {
            console.log("INPUT IS TRUE");
        }
        else {
            console.log("INPUT IS FALSE");
        }
        console.log(this);
        console.log(e.target);
        console.log(e.target.checked);

        //fixes issue #88 - display checked tasks with strikethrough
        if(e.target.checked == true) {
            console.log("Checked");
            //event listener to set property props.done to true
            this.props.done = true;

            //display the text with a strikethrough
            this.element.style.setProperty("text-decoration", "line-through");
        }
        else {
            console.log("Unchecked");
            this.element.style.setProperty("text-decoration", "none");
        }
    }
    render() {
        return this.element;
    }
}

export default Task;