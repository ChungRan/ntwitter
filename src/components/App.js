import React, { useState } from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  )
}

export default App;
