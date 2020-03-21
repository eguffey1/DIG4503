class NameSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myObjects: []
    }
  }

    getName = () => {

        let name = document.querySelector('#NameSearch').value;
        console.log(name)

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
          <button onClick={this.getName}>SUBMIT</button>
          <div id="results"></div>
        </div>
        );
    }

}

export default NameSearch;