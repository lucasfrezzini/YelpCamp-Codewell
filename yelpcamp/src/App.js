import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import TopAlert from "./components/TopAlert";

function App() {
  return (
    <>
      <Header />
      <Button
        title={"View Campgrounds"}
        colors
        width
        icon
      />
    </>
  );
}

export default App;
