import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PageHeader />
        </header>
        <main>
          <SignUpPage />
          {/* <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
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
