import Link from 'next/link'
import Head from 'next/head'
import styles from "./index.module.css";
class NameSearch extends React.Component {
  constructor(props) {
    super(props);
  }

    getName = () => {

        let name = document.querySelector('#NameSearch').value;
        console.log(name)

        fetch("http://localhost:3000/api/pokemon/name/" + name)
        .then((res) => { return res.json() })
        .then((processed) => {
          let reporting = document.querySelector("#results");
          console.log(processed)
          if(processed.error) {
            
              reporting.innerHTML = processed.error + " You entered: " + element.value;
          } else {
              reporting.innerHTML = "Pokemon Name: " + processed.name + "; Pokemon Id #: " + processed.id + "; Pokemon Type(s): " + processed.typeList;
          }
  
      });

    }

    render() {
        return(
          <div>
            <Head>
              <title>Search Pokemon By Name</title>
            </Head>
            <img src="https://fontmeme.com/permalink/200327/ac2c04a51c31df11e977558dae95de44.png" alt="Search Pokemon By Name" border="0"/>
            <br/>
            <input type="text" id="NameSearch" className={styles.cssinput}/>
            <button onClick={this.getName} className={styles.myButton}>SUBMIT</button>
            <div id="results" className={styles.blue}></div>
            <hr className={styles.hr}/>
            <br/>
            <Link href="/">
              <a>Search Pokemon by Id</a>
            </Link>
            <br/>
            <Link href="/typesearch">
              <a>Search Pokemon by Type</a>
            </Link>
          </div>
        );
    }

}

export default NameSearch;