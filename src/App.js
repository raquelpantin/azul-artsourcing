import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
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
          <SearchResultsPage />
          {/* <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/:search" element={<SearchResultsPage />} />
          </Routes> */}
        </main>
        <footer>
          <PageFooter />
        </footer>
      </div>
    </Router>
  );
}

export default App;
