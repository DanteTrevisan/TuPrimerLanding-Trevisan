import './App.css';
import "./styles/styles.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";



function App() {

  return (
    <div className='container mx-auto flex flex-col min-h-screen items-center bg-red-100'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App
