import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const USERS_API = "http://localhost:8000/users";

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const login = async (username, password) => {
    checkLoginStatus();
    const { data } = await axios.get(USERS_API);
    const checkLogin = data.find(
      item => item.username === username && item.password === password
    );
    if (checkLogin) {
      localStorage.setItem("user", JSON.stringify(checkLogin));
    } else {
      return alert("Invalid username or password");
    }

    navigate("/product");
  };

  function checkLoginStatus() {
    let user = localStorage.getItem("user");
    if (user) {
      alert("You are already signed in");
    }
  }

  function checkLogoutStatus() {
    let user = localStorage.getItem("user");
    if (!user) {
      alert("You have to login");
    }
  }

  function logout() {
    localStorage.removeItem("user");
  }

  const addUser = async newUser => {
    axios.post(USERS_API, newUser);
  };

  function register(username, age, password, checkPassword, isAdmin) {
    if (!username || !age || !password || !checkPassword) {
      alert("Some inputs are empty");
      return;
    } else {
      alert("You have successfully registered");
      let newUser = {
        username,
        age,
        password,
        isAdmin: isAdmin,
      };
      addUser(newUser);
      navigate("/login");
    }
  }

  function passCheck(password, checkPassword, username, age, isAdmin) {
    if (password !== checkPassword) {
      alert("Passwords do not match");
      return;
    } else {
      register(username, age, password, checkPassword, isAdmin);
    }
  }

  const usernameCheck = async (
    username,
    age,
    password,
    checkPassword,
    isAdmin
  ) => {
    const { data } = await axios.get(USERS_API);
    const checkUsername = data.find(item => item.username === username);
    if (checkUsername) {
      alert("This username is already taken");
      return;
    } else {
      passCheck(password, checkPassword, username, age, isAdmin);
    }
  };

  return (
    <authContext.Provider
      value={{
        addUser,
        login,
        usernameCheck,
        logout,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
