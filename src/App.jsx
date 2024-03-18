import { useSelector } from "react-redux";
import './App.css';
import Auth from './components/auth/Auth.jsx';
import Layout from './components/layout/Layout.jsx'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div >
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
