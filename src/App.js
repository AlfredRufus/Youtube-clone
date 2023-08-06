import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import Recommendations from './Recommendations';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <div className="app">
      
      <Header/>
      <div className='app__page'>
      <Sidebar/>
      <Recommendations/>
  </div>



      {/*Header --> <Header/>*/}
      {/*Sidebar --> <Sidebar/>*/}
      {/*Recommendations --> <Recommendations/>*/}
      


    </div>
  );
}


export default App;
