import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';

import Footer from './components/footer';
import Signin from './components/signin';
import Signup from './components/signup';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;