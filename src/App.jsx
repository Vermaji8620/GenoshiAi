import AccountSettings from "./page1/AccountSettings";
import "./App.css";
// importing every compoenent
import CreateNewGraph from "./page1/CreateNewGraph";
import GraphDetails from "./page1/GraphDetails";
import ProfileDashboard from "./page1/ProfileDashboard";
// importing external packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PricingPage from "./page2/pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routing the components */}
        <Route path="/" element={<ProfileDashboard />} />
        <Route path="/createnewgraph" element={<CreateNewGraph />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="/getgraphdetails" element={<GraphDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
