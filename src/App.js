import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {HomePage, Connections} from "./Pages";
import {Topbar} from './Components';
import './App.css'

function App() {

  return (
    <Router>
      <Topbar />
       <Routes>
         <Route path='/' element={<HomePage/>} exact/>
         <Route path='/connections' element={<Connections/>} exact/>
         {/* <Route path='/' element={<HomePage/>} exact/>
         <Route path='/' element={<HomePage/>} exact/>
         <Route path='/' element={<HomePage/>} exact/> */}
       </Routes>
    </Router>
  );
}

export default App;
