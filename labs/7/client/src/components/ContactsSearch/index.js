import SearchResult from "../SearchResults";
import React from "react"; 

const HEADERS = {
  "method": "GET",
  "headers": {
    "api": "lapperiere",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}

class ContactSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      searchValue: "",
      result: []
    }; 
  }

  changeHandler(value) {
    this.setState(
      {
        searchValue: value
      }
    );
  }

  async clickHandler() {
    let searchValue = this.state.searchValue; 

    if(searchValue === "") {
      searchValue = '~'; 
    }

    let response = await fetch('https://plato.mrl/ai:8080'+ searchValue, HEADERS);
    let processed = await response.json(); 

    this.setState({result: processed}); 
  }

  render() {
    return (
    <div>
      <p>View Contacts</p>
      <button onClick={ () => { this.clickHandler() } }>Search</button>
            {
              this.state.result.map((contact, index) => {
                return (
                  <SearchResult name={contact} number={index} />
                )
              })
            }
    </div>
    ); 
  }
}
    
export default ContactSearch; 