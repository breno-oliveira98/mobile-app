import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { VisibilityProvider } from "./contexts/VisibilityContext";

function App() {
  return (
    <VisibilityProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </Router>
    </VisibilityProvider>
  );
}

export default App;
