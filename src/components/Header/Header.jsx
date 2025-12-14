import React, { useState } from 'react'
import "../Header/header.css"
import { Col, Container, Row, Dropdown, InputGroup, Form, ListGroup, Navbar, Offcanvas, Nav, NavDropdown } from 'react-bootstrap'
import logo from "../../assets/icons/logo.png"
import Cart from '../Cart/Cart'
import CategoriesList from './CategoriesList'

const Header = () => {

  const [cartBox, setCartBox] = useState(false)
  const [showNavBar, setShowNavBar] = useState(false)
  const [dropdownShow, setDropdownShow] = useState(0)

  const handleDropdown = (type, id) => {
    if(window.innerWidth >= 1199) {
      type === "in" ? setDropdownShow(id) : setDropdownShow(0)
    }
    if(type === "click") {
      dropdownShow ? setDropdownShow(0) : setDropdownShow(id)
    }

  }

  return (
    <>
        <div className="top_header py-1">
          <Container>
            <Row className='align-items-center'>
              <Col md={6} sm={6} xs={6}>
                <p>Super Value Deals = Save more with coupons</p>
              </Col>

              <Col md={6} sm={6} xs={6}>
                <div className="text-end">
                  <Dropdown>
                    <Dropdown.Toggle className='fw-bold text-white' id="dropdown-menu-align-start">
                      English
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">French</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <header className='py-3 border-bottom'>
          <Container>
            <Row className='align-items-center'>
              <Col xl={2} lg={3} md={6} sm={5} xs={5}>
                <img src={logo} alt="logo" className='img-fluid' />
              </Col>

              <Col xl={5} lg={4} className='d-none d-lg-block'>
                <div className="search_box">
                  <InputGroup>                  
                    <Form.Control
                      placeholder="Search for Products"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      type='search'
                      className='rounded-1 py-2'
                    />
                    <i className="bi bi-search position-absolute"></i>
                  </InputGroup>
                </div>
              </Col>

              <Col xl={3} lg={2} className='d-none d-lg-block'>
                <button type='button' className='btn secondary-btn'>
                  <i className="bi bi-geo-alt me-2"></i> Location
                </button>
              </Col>

              <Col xl={2} lg={3} md={6} sm={7} xs={7}>
                <ListGroup horizontal className='justify-content-end'>

                  <ListGroup.Item className="border-0">
                    <span className='d-flex align-items-center'>
                      <span className='position-relative'>
                        <i className="bi bi-person h4 mb-0"></i> 
                      </span>
                      <span className='ms-1 d-none d-sm-block body-text'>
                        Account
                      </span>
                    </span>
                  </ListGroup.Item>

                  <ListGroup.Item className="border-0">
                    <span className='d-flex align-items-center'>
                      <span className='position-relative'>
                        <i className="bi bi-heart h4 mb-0"></i>
                        <span className='position-absolute translate-middle badge rounded-pill bg-danger'>
                          2<span className='visually-hidden'>unread messages</span>
                        </span>
                      </span>
                      <span className='ms-2 d-none d-sm-block body-text'>
                        Wishlist
                      </span>
                    </span>
                  </ListGroup.Item>

                  <ListGroup.Item className="border-0"
                    onClick={() => setCartBox(true)}
                  >
                    <span className='d-flex align-items-center'>
                      <span className='position-relative'>
                        <i className="bi bi-cart h4 mb-0"></i>
                        <span className='position-absolute translate-middle badge rounded-pill bg-danger'>
                          9<span className='visually-hidden'>unread messages</span>
                        </span>
                      </span>
                      <span className='ms-2 d-none d-sm-block body-text'>
                        Cart
                      </span>
                    </span>
                  </ListGroup.Item>

                  <ListGroup.Item className="border-0 d-block d-lg-none">
                    <i 
                      className='bi bi-list h4'
                      onClick={() => setShowNavBar(true)}
                      aria-controls={`offcanvasNavbar-expand-lg`}
                    ></i>
                 </ListGroup.Item>

                </ListGroup>
              </Col>
            </Row>
          </Container>
        </header>

        <div className="menu">
          <Container>
            <Row> 
              <Navbar expand='lg' className="p-0">     
                <Container fluid>                  

                  {/* OFFCANVAS MOBILE */}
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    className='navbarOffcanvas'
                    placement="start"
                    show={showNavBar}
                    onHide={() => setShowNavBar(false)}
                    
                  >
                    <Offcanvas.Header className='justify-content-between border-bottom'>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                        <img src={logo} alt="logo" className='img-fluid' />
                      </Offcanvas.Title>

                      <button className='btn secondary-btn'>
                        <i className='bi bi-x-lg' onClick={() => setShowNavBar(false)}></i>
                      </button>
                    </Offcanvas.Header>

                    <Offcanvas.Body className='align-items-center'>
                      <div className='d-block d-lg-none'>
                        <div className='search_box mt-2'>
                          <InputGroup>                  
                            <Form.Control
                              placeholder="Search for Products"
                              aria-label="Search"
                              aria-describedby="basic-addon1"
                              type='search'
                              className='rounded-1 py-2'
                            />
                            <i className="bi bi-search position-absolute"></i>
                          </InputGroup>
                        </div>
                        <button className='btn btn-light rounded-1 w-100 mb-3'>
                          <i className='bi bi-geo-alt me-2'> Pick Location</i>
                        </button>
                      </div>

                      <div className='category_list'>
                        <CategoriesList />
                      </div>

                      <Nav className="justify-content-start flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About us</Nav.Link>
                        <Nav.Link href="#action2">Shop</Nav.Link>
                        <NavDropdown
                          title="Stores"
                          id={`offcanvasNavbarDropdown-expand-lg`}
                          show={dropdownShow === 1 ? true : false}
                          onMouseEnter={() => handleDropdown('in', 1)}
                          onMouseLeave={() => handleDropdown('out', 0)}
                          onClick={() => handleDropdown('click', 1)}
                        >
                          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action4">
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action5">
                            Something
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action5">
                            Separated link
                          </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                          className='dropdown-fullwidth'
                          title="All Departments"
                          id={`collapsible-nav-dropdown`}
                          show={dropdownShow === 2 ? true : false}
                          onMouseEnter={() => handleDropdown('in', 2)}
                          onMouseLeave={() => handleDropdown('out', 0)}
                          onClick={() => handleDropdown('click', 2)}
                        >
                          <Row>
                            <Col lg={3} xs={12} className='mb-2 mb-lg-0 border-end'>
                              <h6 className='primary-text sub-heading mb-1 ms-2'>Dairy, Bread Eggs</h6>
                              <a href="#" className='dropdown-item'>Butter</a>
                              <a href="#" className='dropdown-item'>Milk Drinks</a>
                              <a href="#" className='dropdown-item'>Curd Yogurt</a>
                              <a href="#" className='dropdown-item'>Eggs</a>
                            </Col>

                            <Col lg={3} xs={12} className='mb-2 mb-lg-0 border-end'>
                              <h6 className='primary-text sub-heading mb-1 ms-2'>Dairy, Bread Eggs</h6>
                              <a href="#" className='dropdown-item'>Butter</a>
                              <a href="#" className='dropdown-item'>Milk Drinks</a>
                              <a href="#" className='dropdown-item'>Curd Yogurt</a>
                              <a href="#" className='dropdown-item'>Eggs</a>
                            </Col>

                            <Col lg={3} xs={12} className='mb-2 mb-lg-0 border-end'>
                              <h6 className='primary-text sub-heading mb-1 ms-2'>Dairy, Bread Eggs</h6>
                              <a href="#" className='dropdown-item'>Butter</a>
                              <a href="#" className='dropdown-item'>Milk Drinks</a>
                              <a href="#" className='dropdown-item'>Curd Yogurt</a>
                              <a href="#" className='dropdown-item'>Eggs</a>
                            </Col>

                            <Col lg={3} xs={12} className='mb-2 mb-lg-0 border-end'>
                              <h6 className='primary-text sub-heading mb-1 ms-2'>Dairy, Bread Eggs</h6>
                              <a href="#" className='dropdown-item'>Butter</a>
                              <a href="#" className='dropdown-item'>Milk Drinks</a>
                              <a href="#" className='dropdown-item'>Curd Yogurt</a>
                              <a href="#" className='dropdown-item'>Eggs</a>
                            </Col>
                          </Row>
                          
                        </NavDropdown>

                        <Nav.Link href="#action2">Blog</Nav.Link>
                        <Nav.Link href="#action2">Contact us</Nav.Link>


                      </Nav>
                  
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>           
              </Navbar>
            </Row>
          </Container>
        </div>

        <Cart show={cartBox} setCartBox={setCartBox} />
    </>
  )
}

export default Header