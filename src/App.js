import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Image from "./Components/Image";
import Plan from "./Components/Plan";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header />
      <Image />
      <About />
      <Plan />
      <Footer />
    </div>
  );
}

export default App;
// - `sm` (640px ve üstü): `sm:`
// - `md` (768px ve üstü): `md:`
// - `lg` (1024px ve üstü): `lg:`
// - `xl` (1280px ve üstü): `xl:`
// - `2xl` (1536px ve üstü): `2xl:`

// footer ı responsive yapıyorum
