import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import HomePage from "./pages/HomePage/HomePage";
import UserHomePage from "./pages/UserHomePage/UserHomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ArtistProfilePage from "./pages/ArtistProfilePage/ArtistProfilePage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PageHeader />
        </header>
        <main>
          {/* <ArtistProfilePage /> */}
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/user" exact element={<UserHomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/:search" element={<SearchResultsPage />} />
            <Route path="/profile/:id" element={<ArtistProfilePage />} />
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
