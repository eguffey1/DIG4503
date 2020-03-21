import IdSearch from '../components/IdSearch/IdSearch'
import NameSearch from '../components/NameSearch/NameSearch'
const Home = () => {
  return (
    <div>
      <h3>Name Search</h3>
      <NameSearch />
      <hr/>
      <h3>Id Search</h3>
      <IdSearch />
    </div>
  )
}
export default Home