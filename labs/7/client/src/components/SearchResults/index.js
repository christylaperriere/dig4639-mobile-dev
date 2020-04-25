import React from "react"; 

function SearchResult(props) {
  return (
    <div key = {props.number}>
      <hr />
      <p><strong>Contacts:</strong>
        <ul>
          {
            props.contacts.map((contact, index) => {
              return (
              <li>key={contact}>{index}
              </li>
              )
            })
          }
        </ul>
      </p>
    </div>
  ); 
}

export default SearchResult; 