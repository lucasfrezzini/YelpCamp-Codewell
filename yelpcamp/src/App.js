import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NewComment from "./pages/NewComment";
import NewCampground from "./pages/NewCampground";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";
import Campgrounds from "./pages/Campgrounds";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/campgrounds" element={<Campgrounds />}>
        </Route>
        <Route path="dashboard/*" element={<Dashboard />}>
          <Route path="login" element={<Login />} />
          <Route path="new" element={<NewAccount />} />
          <Route path="new-campground" element={<NewCampground />} />
          <Route path="new-comment" element={<NewComment />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
