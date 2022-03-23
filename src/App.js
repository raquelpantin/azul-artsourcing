import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PageHeader />
        </header>
        <main>
          <Routes></Routes>
        </main>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
