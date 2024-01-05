import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./middlewares/PrivateRoute";

/// Components
import NoPageFound from "./common/NoPageFound";
import Login from "./pages/Login/Login";
import LandingPage from "./pages/LandingPage/LandingPage";
import ConversionList from "./pages/Conversion/ConversionList";
import AddSupplier from "./pages/Supplier/AddSupplier";
import SupplierList from "./pages/Supplier/SupplierList";
import AddRemittance from "./pages/Remittance/AddRemittance";
import RemittanceList from "./pages/Remittance/RemittanceList";
import AddRMB from "./pages/RMB/AddRMB";
import RMBList from "./pages/RMB/RMBList";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col  ">
      <Toaster />
      <Routes>
        <Route path="*" element={<NoPageFound />} />
        <Route path="/login" element={<Login />} />
        {/* {Private Routes} */}
        <Route path="" element={<PrivateRoute />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AddSupplier" element={<AddSupplier />} />
          <Route path="/SupplierList" element={<SupplierList />} />
          <Route path="/AddRemittance" element={<AddRemittance />} />
          <Route path="/RemittanceList" element={<RemittanceList />} />
          <Route path="/AddRMB" element={<AddRMB />} />
          <Route path="/RMBList" element={<RMBList />} />
          <Route path="/ConversionList" element={<ConversionList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
