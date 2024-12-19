import React, { useContext } from 'react'
import Layout from '../../components/Layouts/Layout'
import Herosection from '../../components/herosection/Herosection'
import Filter from '../../components/Filter/Filter'
import Productcard from '../../components/Productcard/Productcard'
import Track from '../../components/track/track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../redux/createslice'
// import Mycontext from '../../Context/data/mycontext'


const Home = () => {
  // const Context = useContext(Mycontext)
  // const {name,rollno} = Context;
  // const Despatch = useDispatch();
  // const cartItem = useSelector((state)=>state.cart)
  // console.log(cartItem)
  // const addCart = () => {
  //   Despatch(addToCart('shirt'))
  // }
  // const deletecart = () =>{
  //   Despatch(deleteFromCart('shirt'))

  // }

  return (
     <Layout>
      {/* <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deletecart()}>del</button>
      </div> */}
     <Herosection/>
     <Filter/>
     <Productcard/>
     <Track></Track>
     <Testimonial/>
     </Layout>
  )
}

export default Home
