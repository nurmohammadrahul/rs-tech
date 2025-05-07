import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Management from './pages/Management';
import News from './pages/News';
import Photo from './pages/Photo';
import Video from './pages/Video';
import ContactUs from './pages/ContactUs';
import Clients from './pages/Clients';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsSingle from './Shared/News/NewsSingle';
import SingleAlbum from './Shared/PhotoAlbum/SingleAlbum';

function App() {
  return (
    <Router>
      <div className="font-barlow">
        <Navbar />

        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/management" element={<Management />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsSingle />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/photo/:id" element={<SingleAlbum />} />
            <Route path="/video" element={<Video />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/solution" element={<Solutions />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;