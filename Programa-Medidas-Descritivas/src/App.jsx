import "./App.css";

// Components
import NavBar from "./components/NavBar/NavBar";
import MediaAritmetica from "./components/MediaAritmetica/MediaAritmetica";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <MediaAritmetica />
      </div>
      <Footer />
    </>
  );
}

export default App;
