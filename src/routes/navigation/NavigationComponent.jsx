import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdownComponent from "../../components/cart-dropdown/CartDropdownComponent";
import CartIconComponent from "../../components/cart-icon/CartIconComponent";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { LogoContainer, NavigationContainer, NavLink, NavLinkContainer } from "./navigation-styles.jsx";

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
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo">Logo</CrwnLogo>
        </LogoContainer>

          <NavLinkContainer>
            <NavLink  to="/shop">
              SHOP
            </NavLink>
            {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink  to="/auth">
                SIGN IN
              </NavLink>
            )}
            <CartIconComponent />
          </NavLinkContainer>
          {
            isCartOpen && <CartDropdownComponent />
          }
          

      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default NavigationComponent;
