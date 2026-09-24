import {BrowserRouter, Navigate, Route, Routes} from "react-router";

import AddProductPage from "./pages/AddProductPage";
import EditProductPAge from "./pages/EditProductPAge";
import productPage from "./pages/productPage";

function App (){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Navigate to = "/product" replace/>} />
        <Route path = "/product" element = {<productPage />} />
        <Route path = "/product/new" element = {<AddProductPage />} />
        <Route path = "/product/:id/edit" element = {<EditProductPAge />} />
        <Route path = "*" element = {<Navigate to = "/product" replace/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;