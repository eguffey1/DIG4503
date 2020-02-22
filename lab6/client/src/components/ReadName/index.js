import React from 'react'
class ReadName extends React.Component {
  readName(event) {

    event.preventDefault();
    const reporting = document.querySelector('#selected')
    let element = document.querySelector('#pokeName');

    fetch('http://localhost:80/name/' + element.value)
    .then((res) => {
        return res.json();
    })
    .then((processed) => {

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
      <h2>Pokemon Name</h2>
        <form onSubmit={this.readName}>
            <input id="pokeName" type="text"/>
            <button>Submit</button>
        </form>
        </div>
    );
  }
}
export default ReadName;