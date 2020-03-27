import Link from 'next/link'
import Head from 'next/head'
import styles from "./index.module.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
    getId = () => {

        let id = document.querySelector('#IdSearch').value;
        console.log(id)

        fetch("http://localhost:3000/api/pokemon/id/" + id)
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
              <title>Search Pokemon By Id</title>
            </Head>
            <img src="https://fontmeme.com/permalink/200327/51cf793dffa8f226afda6d68d1cb6235.png" alt="Search Pokemon By Id" border="0"/>
            <br/>
            <input type="text" id="IdSearch" className={styles.cssinput}/>
            <button onClick={this.getId} className={styles.myButton}>SUBMIT</button>
            <div id="results" className={styles.blue}></div>
            <hr className={styles.hr}/>
            <br/>
            <Link href="/typesearch">
              <a>Search Pokemon by Type</a>
            </Link>
            <br/>
            <Link href="/namesearch">
            < a>Search Pokemon by Name</a>
            </Link>
          </div>
    );
  }
  
}

export default Home;
