import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import "./App.css";
import { makeStyles } from "@material-ui/core";
import Alert from "./components/Alert";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage exact />} />
          <Route path="/welcome" element={<Header />} />
          <Route path="/coins/:id" element={<CoinPage exact />} />
        </Routes>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
