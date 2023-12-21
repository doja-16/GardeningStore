import Log from './myProject/Loginform';
import Sigin from './myProject/Siginin';
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Main from './myProject/Main';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div>
         <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Log></Log> }> </Route>
          <Route path="/signup" element= {<Sigin/>} > </Route>
          <Route path="/main" element= {<Main/>} > </Route>
        </Routes>
        </BrowserRouter> 
        
    </div>
  );
}

export default App;

