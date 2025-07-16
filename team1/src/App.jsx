import './App.css'
import ShopLayout from "./layouts/ShopLayout.jsx";
import Login from "./components/Login/Login.jsx";
import SupplierPage from "./pages/supplier/supplier-page.jsx";

function App() {

  return (
    <>
      <Login/>
        <SupplierPage />
    </>
  )
}

export default App
