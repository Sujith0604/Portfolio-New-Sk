import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./pages/About";
import Herosection from "./pages/Herosection";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <div className="  p-4 flex flex-col gap-5 font-all ">
      <Herosection />
      <main className=" flex flex-col gap-5 ">
        <Header />
        <About />
        <Skills />
        <Services />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
