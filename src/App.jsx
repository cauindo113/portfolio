import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/work' element={<Work />}></Route>
        </Routes>
        <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
