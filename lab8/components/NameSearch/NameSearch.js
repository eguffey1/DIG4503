class NameSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myObjects: []
    }
  }
  
    getId = () => {

        let name = document.querySelector('#NameSearch').value;
        console.log(id)

        fetch("http://localhost:3000/api/pokemon/name/" + name)
        .then((res) => { return res.json() })
        .then((processed) => {
            this.props.callback(processed)
            console.log(processed)
        });

    }

    render() {
        return(
          <div>
          <input type="text" id="NameSearch" />
          <button onClick={this.getId}>SUBMIT</button>
          <div id="results"></div>
        </div>
        );
    }

}

export default NameSearch;