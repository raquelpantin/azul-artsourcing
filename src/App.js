import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ArtistProfilePage from "./pages/ArtistProfilePage/ArtistProfilePage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Private from "./pages/PrivateRoute/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PageHeader search={search} setSearch={setSearch} />
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/search"
              element={<SearchResultsPage search={search} />}
            />
            <Route
              path="/artist/:id"
              element={<Private Private={ArtistProfilePage}></Private>}
            />
          </Routes>
        </main>
        <footer>
          <PageFooter />
        </footer>
      </div>
    </Router>
  );
}

export default App;
