import React from 'react'
import './App.css'
import Home from './Pages/Home/Home';
import Order from './Pages/Order/Oredr';
import Cart from './Pages/cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './Pages/admin/dashboard/dashboard';
import Nopage from './Pages/nopage/Nopage';
import State from './Context/data/Mystate';
import Allprouct from './Pages/allproducts/Allprouct';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Reagistration/Login';
import Signup from './components/Reagistration/Signup';
import Productinfo from './components/ProductInfo/Productinfo';
import AddProduct from './Pages/admin/page/AddProduct';
import UpdateProduct from './Pages/admin/page/UpdateProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <>
      
      <State> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/order' element= { <ProtectedRoutes>
            <Order/>
          </ProtectedRoutes>}></Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/dashboard' element={ <ProtectedRoutes><Dashboard/></ProtectedRoutes>}/>
          <Route path='/*' element={<Nopage/>}/>
          <Route path='/allproduct' element={<Allprouct/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/updateproduct' element={ <ProtectedRoutesForAdmin>
            <UpdateProduct/>
          </ProtectedRoutesForAdmin>}/>
          <Route path='/productinfo/:id' element={<Productinfo/>}/>
          <Route path='/*' element={<Nopage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          

        </Routes>
        <ToastContainer/>
       
         
      </BrowserRouter>
      </State>
      
    </>
  )
}

export default App
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'));
  if (admin?.email === 'venulucky23218@gmail.com') {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};