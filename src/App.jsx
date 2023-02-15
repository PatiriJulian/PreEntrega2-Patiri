import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Sections/ItemListContainer';
import './components/Sections/ItemListContainer.css'
 
function App() {

  return (
    <> 
      <NavBar/>
      <section class="ItemListContainerWrapper ItemListContainerfont">
        <ItemListContainer greetings="Hola usuario"/>
      </section>
    </>
  )
}

export default App
