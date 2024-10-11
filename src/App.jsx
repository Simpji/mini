import Header from "./components/Header";
import Banner from "./components/Banner";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ImagefindProvider } from "./context/ImagefindContext";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <ImagefindProvider>
                <Header />
                <Banner />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer/>
            </ImagefindProvider>
        </Router>
    );
}

export default App;