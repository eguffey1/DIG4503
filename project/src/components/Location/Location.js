import React from 'react';
import styles from "../../index.module.css";

class Location extends React.Component {
  constructor(props) {
  super(props)
  this.state = { 
    data: []
  }
  }
    
  location = () =>{
    let location = document.querySelector('#Search2').value;
    location = parseInt(location)
      fetch('https://rickandmortyapi.com/api/episode/' + location) 
			.then(data => data.json()) 
      .then(data => this.setState({data: [data.results]}))
      console.log(this.props.data)
  };
  
  render() {
    return (
      <div class="mt-2">
        <i class="fa fa-search-plus ml-5 mr-1 text-primary"></i><input ref={this.setTextInputRef} type="text" placeholder="Search By Id Number" id="Search2" onKeyUp={this.location} className={styles.input}/>
      </div>
    )
  }
}
export default Location
