import { Route, Routes } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import TopAlert from "./components/TopAlert";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NewComment from "./components/NewComment";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" />
      <Route path="dashboard/*" element={<Dashboard />}>
        <Route path="new-comment" element={<NewComment />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
