



 import { useUserName } from "../context/UserContext";
 import { Navbar, NavbarBrand, NavItem, NavLink,Nav } from 'reactstrap'

 const Menu = () => {
    const userName = useUserName();
     return ( 
    
  <Navbar dark expand="dark">
  <>
  <NavbarBrand className="mr-auto" > <h1>TodoList</h1>
   </NavbarBrand>
  <Nav className="ml-10 navbar navbar-expand-lg navbar-light" >
    <NavItem>
       <NavLink className="nav-link">
         <span className="fa fa-home fa-lg"></span>Home
       </NavLink>
     </NavItem>
     <NavItem>
       <NavLink className="nav-link active">
        <span className="fa fa-user-profile" ></span>{userName}'s profile
       </NavLink>
     </NavItem>
     <NavItem>
       <NavLink className="nav-link">
       FAQ's <span className="fa fa-question"></span>
       </NavLink>
     </NavItem>
   </Nav>
  
   </>

 </Navbar>
     );
 };

 export default Menu;