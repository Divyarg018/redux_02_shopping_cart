import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Auth from './components/auth/Auth.jsx';
import Layout from './components/layout/Layout.jsx';
import { useEffect } from "react";
import Notification from "./components/notification/Notification.jsx";
import { uiActions } from "./store/ui_slice.js";
import { sendCartData } from "./store/cart_slice.js";

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // console.log(cartItems);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <div >
      {notification && <Notification type={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
