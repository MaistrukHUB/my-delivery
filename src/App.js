import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import './scss/app.scss';
import { ShopsPage, ShoppingCart } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { fetchShopsItems, } from "./redux/Slices/ItemsShopsSlice";
import { fetchShops } from "./redux/Slices/ShopsSlice";





function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(
      fetchShopsItems({
      })
    )
    dispatch(
      fetchShops({
      })
    )
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='/' element={<ShopsPage />} />
          <Route path='/ShoppingCart' element={<ShoppingCart />} />

        </Route>
      </Routes  >
    </div>
  );
}

export default App;
