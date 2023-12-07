import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './Routes/routes';
import Footer from './Pages/Navigation/Footer/Footer';
import Header from './Pages/Navigation/Header/header';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
        <div className='main_page'>{useRoutes(routes)}</div>
        <div>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
