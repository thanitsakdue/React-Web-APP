
import React, { Component }  from 'react';
import { Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
class NavbarComp  extends Component {
  render() {
    const dropdownItemStyle = {
      fontSize: '15px', // Font size
      padding: '5px 15px', // Padding
      width: '150px', // Adjust the width as needed
      height: '30px', // Adjust the height as needed
      color: '#000000', // Text color
      
      
    };

    const dropdownMenuStyle = {
      minWidth: '200px', // Adjust the width of the drop-down menu as needed
       // Background color when in the "show" state
      width: '150px', // Adjust the width as needed
      height: '30px', // Adjust the height as needed
      display: 'table', // Display as a table
       // Background color when in the "show" state
      border: 'none', // Remove border when in the "show" state
    };
  
        return(
          
            <>
            <div>
            <Navbar bg="dark" variant="dark"  expand="g">
      <Container>
        {/* <Navbar.Brand href="/Home" ><img src={myImage} alt="Home" style={{ maxWidth: '35px', maxHeight: '40px' }} /></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link  href= "/Home">Home</Nav.Link>
            
               <NavDropdown title="Roots of Equations" id="basic-nav-dropdown" style={dropdownMenuStyle}>
                <NavDropdown.Item href="/Bisection" style={dropdownItemStyle}>
                 Bisection
                </NavDropdown.Item>
                <NavDropdown.Item href="/FalsePosition" style={dropdownItemStyle}>
                 FalsePosition
                </NavDropdown.Item>
                <NavDropdown.Item href="/NewtonRaphson" style={dropdownItemStyle}>
                 Newton Raphson
                </NavDropdown.Item>
                <NavDropdown.Item href="/OnePointiteration" style={dropdownItemStyle}>
                 OnePoint Iteration
                </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Solution of technique" id="basic-nav-dropdown" style={dropdownMenuStyle}>
               <NavDropdown.Item href="/Gauss" style={dropdownItemStyle}>Gauss Elimination</NavDropdown.Item>
               </NavDropdown>

               <NavDropdown title="Interpolation" id="basic-nav-dropdown" style={dropdownMenuStyle}>
               <NavDropdown.Item href="/Lagrange" style={dropdownItemStyle}>Lagrange Interpole</NavDropdown.Item>
               </NavDropdown>

               <NavDropdown title="Regression" id="basic-nav-dropdown" style={dropdownMenuStyle}>
               <NavDropdown.Item href="/Regression" style={dropdownItemStyle}>Regression Method</NavDropdown.Item>
               </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

          </div>
        
   
          </>
        )
        
    
        }
}
export default NavbarComp;