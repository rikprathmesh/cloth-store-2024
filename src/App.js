import HomeComponent from "./routes/home/HomeComponent";
import { Routes, Route, Outlet } from "react-router-dom";
import NavigationComponent from "./routes/navigation/NavigationComponent";
import SigninComponent from "./routes/signin/SigninComponent";


const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationComponent />}>
        <Route index element={<HomeComponent />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SigninComponent />} />
      </Route>
    </Routes>
  );
};

export default App;
