export const authContext = React.createContext();

const USERS_API = "http://localhost:8000/users";
const PRODUCTS_API = "http://localhost:8000/products";

const AuthContextProvider = ({ children }) => {
  return <authContext.Provider>{children}</authContext.Provider>;
};

export default AuthContextProvider;
