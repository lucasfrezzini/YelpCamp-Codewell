import { Route, Routes } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import TopAlert from "./components/TopAlert";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NewComment from "./components/NewComment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="login" />
        <Route path="dashboard/*" element={<Dashboard />}>
          <Route path="new-comment" element={<NewComment />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
