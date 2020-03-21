class IdSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myObjects: []
    }
  
    this.getId = this.getId.bind(this);
  }
    getId = () => {

        // Get the input's value
        let id = document.querySelector('#IdSearch').value;
        console.log(id)
        // Test if id is an empty string
        // If so, change it to a value
        if(id.length === 0) {
            id = "0";
        }

        // Look for movies based on the id
        fetch("http://localhost:3000/api/pokemon/id/" + id)
        .then((res) => { return res.json() })
        .then((processed) => {
            // Call the callback function given to the class component
            this.props.callback(processed);
        });

    }

    render() {
        return(
          <div>
          <input type="text" id="IdSearch" />
          <button onClick={this.getId}>SUBMIT</button>
          <div id="results"></div>
        </div>
        );
    }

}

export default IdSearch;