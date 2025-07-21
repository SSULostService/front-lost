import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import Nav from "./Nav";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Write from "./Write"; // 글쓰기 컴포넌트

function App() {
    return (
        <Router>
            <div className="App-layout-container">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/write" element={<Write />} />
                </Routes>
                <Nav />
                <Footer />
            </div>
        </Router>
    );
}

export default App;