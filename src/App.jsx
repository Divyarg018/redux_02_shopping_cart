import { useSelector } from "react-redux";
import './App.css';
import Auth from './components/auth/Auth.jsx';
import Layout from './components/layout/Layout.jsx';
import { useEffect } from "react";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  // console.log(cartItems);
  useEffect(() => {
    fetch('https://redux-http-14b55-default-rtdb.firebaseio.com/cartItems.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    })
  }, [cart])
  return (
    <div >
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
