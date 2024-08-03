import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdownComponent from "../../components/cart-dropdown/CartDropdownComponent";
import CartIconComponent from "../../components/cart-icon/CartIconComponent";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation-styles.scss";

const NavigationComponent = () => {
  const { currentUser } = useContext(UserContext);

  // const signOuthandler = async () => {
  //   await signOutUser()
  //   // console.log(response, 'sign out user');
  //   setCurrentUser(null)  
  // }

  const {isCartOpen} = useContext(CartContext)

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo">Logo</CrwnLogo>
        </Link>
        <div className="links-container">
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )}
            <CartIconComponent />
          </div>
          {
            isCartOpen && <CartDropdownComponent />
          }
          
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationComponent;
