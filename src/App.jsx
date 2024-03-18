import { useSelector } from "react-redux";
import './App.css';
import Auth from './components/auth/Auth.jsx';
import Layout from './components/layout/Layout.jsx'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.itemList);
  console.log(cartItems);
  return (
    <div >
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
