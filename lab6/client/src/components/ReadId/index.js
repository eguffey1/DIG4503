import React from 'react'
class ReadId extends React.Component {
  readId(event) {

    event.preventDefault();
    let element = document.querySelector("#pokeId");

    fetch('http://localhost:80/id/' + element.value)
    
    .then((res) => {
      
        return res.json();
    })
    .then((processed) => {
        let reporting = document.querySelector("#selected");
        if(processed.error) {
          
            reporting.innerHTML = processed.error + " You entered: " + element.value;
        } else {
            reporting.innerHTML = processed[0].name;
        }

    });
    
}

  render() {
    return(
      <div>
      <h2>Pokemon ID</h2>
        <form onSubmit={this.readId}>
            <input id="pokeId" type="text"/>
            <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default ReadId;