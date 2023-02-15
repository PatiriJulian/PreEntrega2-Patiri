import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Sections/ItemListContainer';
import './components/Sections/ItemListContainer.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

 
function App() {

  return (
    <> 
      <BrowserRouter>
        <NavBar/>
        
          <section class="ItemListContainerWrapper ItemListContainerfont">
            <Routes>
              <Route path='/' element={<ItemListContainer greetings="hola"/>}/>
            </Routes>
          </section>
        
      </BrowserRouter>
    </>
  )
}

export default App
