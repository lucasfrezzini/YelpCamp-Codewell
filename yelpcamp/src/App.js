import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NewComment from "./components/NewComment";
import NewCampground from "./components/NewCampground";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" />
        <Route path="dashboard/*" element={<Dashboard />}>
          <Route path="new-comment" element={<NewComment />} />
          <Route path="new-campground" element={<NewCampground />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
