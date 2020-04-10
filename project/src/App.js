import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import styles from "./index.module.css";
import Location from './components/Location/Location.js';

export default class App extends React.Component {
	constructor() {
		super();
    
    this.state = { 
      data: []
    }
  
  this.textInput = null;

  this.setTextInputRef = element => {  // very interesting thing I had to do here. Looks like there might be a change coming
      this.textInput = element;        // that forces an input to be stored as a general element referenced rather than string
    };

  }  

	search = () => {
    const searchOutput = document.querySelector('#searchOutput');
    searchOutput.innerHTML = '';
		let nameSearch = document.querySelector('#Search').value;
		fetch(`https://rickandmortyapi.com/api/character/?name=${nameSearch}`) 
			.then(data => data.json()) 
      .then(data => this.setState({data: data.results}))
      .catch(err => {
        searchOutput.innerHTML = `<p class="no-results">No Results Found</p>`;
      })
    }
    
//Below Rick and Morty Image - By Source (WP:NFCC#4), Fair use, https://en.wikipedia.org/w/index.php?curid=53588037
	render() {
		return (
			<div>
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png" alt="title logo" className="img-fluid"/> 
            <i class="fa fa-search-plus ml-5 mr-1 text-primary"></i><input ref={this.setTextInputRef} type="text" placeholder="Search By Name" id="Search" onKeyUp={this.search} className={styles.input}/>
            <Location />
            <hr/>
						{this.state.data.map(character => {
							return (
								<div className="col-lg-3" key={character.id}>
                  <div className="card-group">
                    <div className="card">
                      <div className="card-image-crc">
                        <img src={character.image} alt={character.name} className="img-fluid rep-image w-100" />
                      <div className="header-top">
                        <h2 className="title-card-carc text-center mt-1">{character.name}</h2>
                        <p class="card-para-carc text-center"><strong>ID: </strong>{character.id}</p><p class="card-para-carc text-center" id="time-carc"><strong>Created:</strong> {character.created}</p>
                      </div>
                      </div>
                      <div className="card-body card-body-carc">
                        <div className="table-responsive">
                          <table class="table text-center">
                            <tbody>
                              <tr>
                                  <td class="first-crc-stat table-text-crc"><strong>Status</strong></td>
                                  <td class="table-text-crc">{character.status}</td>
                              </tr>
                              <tr>
                                  <td class="first-crc-stat table-text-crc"><strong>Species</strong></td>
                                  <td class="table-text-crc">{character.species}</td>
                              </tr>
                              <tr>
                                  <td class="first-crc-stat table-text-crc"><strong>Gender</strong></td>
                                  <td class="table-text-crc">{character.gender}</td>
                              </tr>
                              <tr>
                                  <td class="first-crc-stat table-text-crc"><strong>Origin</strong></td>
                                  <td class="table-text-crc">{character.origin.name}</td>
                              </tr>
                              <tr>
                                  <td class="first-crc-stat table-text-crc"><strong>Last Location</strong></td>
                                  <td class="table-text-crc">{character.location.name}</td>
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