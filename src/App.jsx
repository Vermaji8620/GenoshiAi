import AccountSettings from "./page1/AccountSettings";
import "./App.css";
import CreateNewGraph from "./page1/CreateNewGraph";
import GraphDetails from "./page1/GraphDetails";
import ProfileDashboard from "./page1/ProfileDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PricingPage from "./page2/pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfileDashboard />} />
        <Route path="/createnewgraph" element={<CreateNewGraph />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="/getgraphdetails" element={<GraphDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
