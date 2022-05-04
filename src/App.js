
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer'
import Home from './Pages/Home/Home'
import { useEffect, useState } from 'react';
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './Pages/RequireAuth/RequireAuth';


function App() {
  let [color, setColor] = useState("#3BE90A");
  const override = css`
  display: block;
  margin: 350px auto;
  border-color: red;
`;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])
  return (
    <div className="App Appbg">
      {
        loading ?
          <div className='App-header'>
            <DotLoader color={color} loading={loading}
              css={override}
              size={60} />
          </div>
          :
          <>
            <Header></Header>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/signup' element={<SignUp></SignUp>}></Route>
              <Route path='/inventory/:_id' element={<RequireAuth>
                <Inventory></Inventory>
              </RequireAuth>}></Route>
            </Routes>
            <Footer></Footer>
          </>

      }
    </div>
  );
}

export default App;
