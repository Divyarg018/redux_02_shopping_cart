import { useSelector } from "react-redux";
import './App.css';
import Auth from './components/auth/Auth.jsx';
import Layout from './components/layout/Layout.jsx';
import { useEffect } from "react";

function App() {
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // console.log(cartItems);
  useEffect(() => {
    async function sendRequest() {
      const res = await fetch(
        'https://redux-http-14b55-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
    };
    sendRequest();
  }, [cart]);
  return (
    <div >
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
