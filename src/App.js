import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
function App() {
  return (
  <>
    <NavBar/>
    <Hero/>
    <Featured/>
      <Signup />
      <Footer/>
  </>
  );
}

export default App;
