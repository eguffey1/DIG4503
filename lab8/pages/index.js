import IdSearch from '../components/IdSearch/IdSearch'
import NameSearch from '../components/NameSearch/NameSearch'
class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      table: []
    };

  }

  setResultsTable = (processed) => {
    this.setState({table: processed});
    console.log(processed)
  }


  createResultsTable() {

    return (
      <table>
        <tbody>
        {
          this.state.table.map(processed => {
             return( 
              <tr key={processed.name}>
                <td>{processed.name}</td>
                <td>{processed.id}</td>
              </tr>
             );
          })
        }
        </tbody>
      </table>
    );

  }

  render() {
    return (
      <div>
        <h3>Search Pokemon By Id</h3>
        <IdSearch callback={this.setResultsTable} />
        {this.createResultsTable()}
        <hr />
        <h3>Search Pokemon By Name</h3>
        <NameSearch callback={this.setResultsTable} />
        {this.createResultsTable()}
      </div>
    );
  }
  
}

export default Home;
