import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/auth/Auth.jsx";
import Layout from "./components/layout/Layout.jsx";
import { useEffect } from "react";
import Notification from "./components/notification/Notification.jsx";
import { uiActions } from "./store/ui_slice.js";
import { fetchData, sendCartData } from "./store/cart_actions.js";

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;