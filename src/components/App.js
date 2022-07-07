
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Main from './Main';


function App() {
  return (
    <div className='container'>
      <Navbar />
      <Sidebar />
      <Main />
    </div>

  )
}

export default App;
