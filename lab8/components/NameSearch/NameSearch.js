class NameSearch extends React.Component {

  // Instead of using an arror function as the value of
  //  the function, the arrow function is "in" the JSX value.
  //
  // This function is called inside of that arrow function.
  // 
  getName() {
    // Look for an element with the ID of nameInput
    let name = document.querySelector("#nameInput");

    // Use the same origin
    // 
    // Based on the name, fetch using the server's
    //  request parameter.
    fetch("/api/pokemon/name/" + name.value)
    .then((res) => { return res.json(); } )
    .then((processed) => {

      // Look for an element with the ID of results
      let resultElement = document.querySelector("#results");

      // If the processed object has an 'error' property...
      if(processed.error) {
        //... write that it could not be found.
        resultElement.innerHTML = "Could not find!";
      } else {
        //... otherwise, since no error, write its ID.
        resultElement.innerHTML = "Its ID is " + processed.id;
      }

    });
  }

  render() {
    return (
      <div>
        <input type="text" id="nameInput" />
        <button onClick={() => { this.getName } }>SUBMIT</button>
        <div id="results"></div>
      </div>
    );
  }

}

export default NameSearch;
