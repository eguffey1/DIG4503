class IdSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myObjects: []
    }
  
  }
    getId = () => {

        let id = document.querySelector('#IdSearch').value;
        console.log(id)

        if(id.length === 0) {
            id = "0";
        }

        fetch("http://localhost:3000/api/pokemon/id/" + id)
        .then((res) => { return res.json() })
        .then((processed) => {
            this.props.callback(processed)
            console.log(processed)
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