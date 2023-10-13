import { Route, Routes, useNavigate, HashRouter} from 'react-router-dom';
import { useState } from "react";
import Layout from "./Layout";
import Success from './Success';
import Home from './Home'
function App() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Layout />}>
          <Route index element={ <Home userEmail={userEmail} setUserEmail={setUserEmail} navigate={navigate}/> } />
          <Route path='success' element={ <Success userEmail={userEmail} navigate={navigate}/> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
