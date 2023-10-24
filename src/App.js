
import{BrowserRouter,Routes,Route}from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Menu from './components/Menu';
import About from "./components/About";
import MenuCategories from "./components/MenuCategories";
function App() {
  return (
    <BrowserRouter>
  
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/history' element={<About />} />
        <Route path='/categories' element={<MenuCategories />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
