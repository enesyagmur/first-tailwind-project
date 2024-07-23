import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Image from "./Components/Image";
import Plan from "./Components/Plan";
import { MyProvider } from "./context/Context";

function App() {
  return (
    <MyProvider>
      <div className="w-full min-h-screen flex flex-col items-center">
        <Header />
        <Image />
        <About />
        <Plan />
        <Footer />
      </div>
    </MyProvider>
  );
}

export default App;

// useContext i kullanamadım daha önce yaptığım projeden bakacağım
