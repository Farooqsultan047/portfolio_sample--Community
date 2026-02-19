
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from "./pages/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/about.jsx"; 
import Project from "./components/project.jsx";
import Contect from './components/Contect.jsx';
import Resume from "./components/Resume.jsx";
import Service from "./components/Service.jsx";

const App = () =>{
return(
  <div className='App'>
    <BrowserRouter>
    
    <Navbar/>
<Routes>
  <Route path='/' element = {<Home/>}/>
  <Route path='/about' element = {<About/>}/>
  <Route path='/project' element={<Project/>}/>
 <Route path="/contact" element={<Contect />}/>
    <Route path='/resume' element={<Resume/>}/>
     <Route path='/service' element={<Service/>}/>

</Routes>
</BrowserRouter>
  </div>
 
)

}
export default App;