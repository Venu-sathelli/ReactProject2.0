import React, { useState, useEffect } from 'react';
import Mycontext from './Mycontext';
import { fireDB } from '../../Fireabase/FirebaseConfig.JSX';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { toast } from 'react-toastify';

const State = (props) => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    title: '',
    price: '',
    imageUrl: '',
    category: '',
    description: '',
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });

  const addProduct = async () => {
    if (!products.title || !products.price || !products.imageUrl || !products.category || !products.description) {
      return toast.error('Please fill all fields');
    }

    const productRef = collection(fireDB, "products");
    setLoading(true);

    try {
      await addDoc(productRef, products);
      toast.success("Product added successfully");
      getProductData(); // Fetch updated products list
      closeModal(); // Ensure this function exists and is imported
      setProducts({ title: '', price: '', imageUrl: '', category: '', description: '', time: Timestamp.now(), date: new Date().toLocaleString() });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const [product, setProduct] = useState([]);

  // ****** Fetch product data
  const getProductData = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData(); // Fetch products on component mount
  }, []);

  return (
    <Mycontext.Provider value={{ mode, toggleMode, loading, setLoading, products, addProduct, product, setProducts }}>
      {props.children}
    </Mycontext.Provider>
  );
};

export default State;
