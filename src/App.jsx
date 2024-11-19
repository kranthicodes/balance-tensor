import "./App.css";
import { Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Route } from "react-router-dom";
import AppPage from "./pages/app/AppPage";
import LandingPage from "./pages/landing/LandingPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
