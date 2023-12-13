
import './App.css'
import Log from './myProject/Loginform';
import Sigin from './myProject/Siginin';
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Navigate from './navigate';
function App() {
  return (
    <div>

        <BrowserRouter>
        <Navigate></Navigate>
        <Routes>
          <Route path="/login" element= <Log/> > </Route>
          <Route path="/signup" element= <Sigin/> > </Route>
        </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;

