import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import Nav from "./Nav";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Write from "./Write";
import WriteForm from "./WriteForm";

function App() {
    return (
        <Router>
            <div className="App-layout-container">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/write" element={<Write />} />
                    <Route path="/write/new" element={<WriteForm />} /> {/* ✅ 추가된 경로 */}
                </Routes>
                <Nav />
                <Footer />
            </div>
        </Router>
    );
}

export default App;