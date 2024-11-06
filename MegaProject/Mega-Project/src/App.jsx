import { useEffect, useState } from "react";
import "./App.css";
import authService from "./appwrite/auth";
import useDispatch from "react-redux";
import { logoutState } from "./Store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .currentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logoutState());
        }
      })
      .finally(setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap bg-gray-400">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <p>Please Login to see posts</p>
  );
}

export default App;
