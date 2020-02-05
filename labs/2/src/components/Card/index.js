//importing css
import "./index.css"; 

//Adding Card component
class Card {
    constructor(props) {
        this.props = props; 
        this.element = document.createElement("div"); 
        this.element.innerHTML = this.props.content; 
        this.element.setAttribute("class", "card"); 
    }

    render() {
        return this.element; 
    }
}

//Exporting code 
export default Card; 