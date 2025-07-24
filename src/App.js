import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import Nav from "./Nav";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Write from "./Write";
import WriteForm from "./WriteForm";
import WriteDetail from './WriteDetail';

function App() {
    const [posts, setPosts] = useState(() =>{
        const saved = localStorage.getItem('posts');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    const handleAddPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    return (
        <Router>
            <div className="App-layout-container">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/write" element={<Write posts={posts} />} />
                    <Route path="/write/new" element={<WriteForm onSubmit={handleAddPost} />} />
                    <Route path="/write/:id" element={<WriteDetail posts={posts} />} />
                </Routes>
                <Nav />
                <Footer />
            </div>
        </Router>
    );
}

export default App;