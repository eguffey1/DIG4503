import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import styles from "./index.module.css";

export default class App extends React.Component {
	constructor() {
		super();
    this.myRef = React.createRef();
    this.state = { 
      data: [],
      hasError: false
    }
  }  

	search = () => {
    let nameSearch = this.myRef.current.value;
		fetch(`https://rickandmortyapi.com/api/character/?name=${nameSearch}`) 
			.then(data => data.json()) 
      .then((data) => {
        if(data.error) {
            this.setState({ hasError: true })
        } else {
          this.setState({data: data.results, hasError: false})
        }
      })
    }
    
    //Below Rick and Morty Image - By Source (WP:NFCC#4), Fair use, https://en.wikipedia.org/w/index.php?curid=53588037
    render() {
      return (
        <div>
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png" alt="Rick and Morty" className="img-fluid"/> 
            <i className="fa fa-search-plus ml-5 mr-1 text-primary"></i><input ref={this.myRef} type="text" placeholder="Enter Character Name" id="Search" onKeyUp={this.search} className={styles.input}/>
            <p className="text-center">(limit 20 results/query)</p>
            <hr/>
            {(this.state.hasError) ? <p>No results - Try Rick, Morty, Summer, Beth, Jerry or look up other Rick and Morty Characters!</p> 
            : this.state.data.map(character => {
							return (
								<div className="col-lg-3" key={character.id}>
                  <div className="card-group">
                    <div className="card">
                      <div className="card-image-crc">
                        <img src={character.image} alt={character.name} className="img-fluid rep-image w-100" />
                      <div className="header-top">
                        <h2 className="title-card-carc text-center mt-1">{character.name}</h2>
                        <p className="card-para-carc text-center"><strong>ID: </strong>{character.id}</p><p className="card-para-carc text-center" id="time-carc"><strong>Created:</strong> {character.created}</p>
                      </div>
                      </div>
                      <div className="card-body card-body-carc">
                        <div className="table-responsive">
                          <table className="table text-center">
                            <tbody>
                              <tr>
                                  <td className="first-crc-stat table-text-crc"><strong>Status</strong></td>
                                  <td className="table-text-crc">{character.status}</td>
                              </tr>
                              <tr>
                                  <td className="first-crc-stat table-text-crc"><strong>Species</strong></td>
                                  <td className="table-text-crc">{character.species}</td>
                              </tr>
                              <tr>
                                  <td className="first-crc-stat table-text-crc"><strong>Gender</strong></td>
                                  <td class="table-text-crc">{character.gender}</td>
                              </tr>
                              <tr>
                                  <td className="first-crc-stat table-text-crc"><strong>Origin</strong></td>
                                  <td className="table-text-crc">{character.origin.name}</td>
                              </tr>
                              <tr>
                                  <td className="first-crc-stat table-text-crc"><strong>Last Location</strong></td>
                                  <td className="table-text-crc">{character.location.name}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
			          )
		        })}	
          </div>		
        </div>
		  )
  }
}