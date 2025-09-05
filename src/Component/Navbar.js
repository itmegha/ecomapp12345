import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import dark from '../imges/dark_mode_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg';
import light from '../imges/light_mode_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg';

function Navbar(){

   const {theme,setTheme} = useContext(ThemeContext);
     console.log(theme);

     let myStyle = {};
     if(theme === 'light'){
        myStyle = {
          background : 'pink'
        }
     }
     else if(theme === 'dark')
     {
      myStyle = {
        background : 'red'
      }
     }
    return(
        <>
         <header>
             <nav className="navbar navbar-expand-sm navbar-light" 
             style={myStyle}
             >
            <div className="container-fluid">
             <ul className="navbar-nav">
             <li className="nav-item">
             <NavLink className="nav-link active" to={"/home"}>Home</NavLink>
             </li>
             <li className="nav-item">
             <NavLink className="nav-link" to={"/about"}>AboutUs</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to={"/contact"}>ContactUs</NavLink>
               </li>
                <li className="nav-item">
             <NavLink className="nav-link" to={"/login"}>Login</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to={"/reg"}>Register</NavLink>
               </li>
                <li className="nav-item">
              <NavLink className="nav-link" to={"/product"}>Products</NavLink>
               </li>

               {
                theme === 'light'?
                (
                  <img src={dark} onClick={()=>setTheme('dark')} />
                )
                :
                (
                 <img src={light} onClick={()=>setTheme('light')} />
                )

               }
               </ul>
             </div>
           </nav>
         </header>
         <main>
            <Outlet />
         </main>

           
        </>
    )
}
export default Navbar;