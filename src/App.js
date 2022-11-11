import React from "react";
import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./contexts/AuthContextProvider";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <MainRoutes />
      </AuthContextProvider>
    </>
  );
};

export default App;
