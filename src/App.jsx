import "./App.css";
import AccountSettings from "./pages/AccountSettings";
import CreateNewGraph from "./pages/CreateNewGraph";
import GraphDetails from "./pages/GraphDetails";
import ProfileDashboard from "./pages/ProfileDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfileDashboard />} />
        <Route path="/createnewgraph" element={<CreateNewGraph />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="/getgraphdetails" element={<GraphDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
