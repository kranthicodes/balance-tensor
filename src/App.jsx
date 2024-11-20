import "./App.css";
import { Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Route } from "react-router-dom";
import AppPage from "./pages/app/AppPage";
import LandingPage from "./pages/landing/LandingPage";
import TransferPage from "./pages/transfer/TransferPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/transfer" element={<TransferPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
