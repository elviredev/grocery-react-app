import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import "../Footer/footer.css"

const Footer = () => {
  return (
    <footer className='footer pt-5'>
      <Container>
        <Row>
          <Col xs={12} md={3} lg={3} >
            <h6 className="mb-4 sub-heading">Categories</h6>
            <ul className="nav flex-column ">
              <li className="nav-item mb-2">
                <a href="#!" className="nav-link p-0">
                  Vegetables & Fruits
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#!" className="nav-link p-0 mt-2">
                  Breakfast & Instant Food
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#!" className="nav-link p-0 mt-2">
                  Bakery & Biscuits
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#!" className="nav-link p-0 mt-2">
                  Atta, Rice & Dal
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={3} lg={3}>
            <h6 className="mb-4 sub-heading">Get to know us</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#!" className="nav-link p-0">
                  Company
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#!" className="nav-link p-0 mt-2">
                  About
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#!" className="nav-link p-0 mt-2">
                  Blog
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#!" className="nav-link p-0 mt-2">
                  Help Center
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={3} lg={3}>
            <h6 className="mb-4 sub-heading">For Customers</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#!" className="nav-link p-0">
                  Payments
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#!" className="nav-link p-0 mt-2">
                  Shipping
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#!" className="nav-link p-0 mt-2">
                  Product Returns
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#!" className="nav-link p-0 mt-2">
                  Faq
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={3} lg={3}>
            <h6 className="mb-4 sub-heading">Contact Us</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <span className="nav-link p-0">
                  <i className="bi bi-house-door me-2"></i>
                  New York, NY 10012, US
                </span>
              </li>

              <li className="nav-item mb-2">
                <span className="nav-link p-0 mt-2">
                  <i className="bi bi-envelope me-2"></i>
                  info@gmail.com
                </span>
              </li>

              <li className="nav-item mb-2">
                <span className="nav-link p-0 mt-2">
                  <i className="bi bi-telephone me-2"></i>
                  +01 234 567 88
                </span>
              </li>

              <li className="nav-item mb-2">
                <span className="nav-link p-0 mt-2">
                  <i className="bi bi-telephone me-2"></i>
                  +01 234 567 89
                </span>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className='align-items-center border-top mt-3 pt-2'>
          <Col md={7} lg={8}>
            <p className='m-0 text-center text-md-start'>2025 Copyright Grocery App All right reserved</p>
          </Col>

          <Col md={5} lg={4} className='text-end py-2'>
            <ListGroup horizontal className='justify-content-md-end justify-content-center'>
              <ListGroup.Item className='border-0 bg-transparent text-white'><i className='bi bi-facebook'></i></ListGroup.Item>
              <ListGroup.Item className='border-0 bg-transparent text-white'><i className='bi bi-twitter'></i></ListGroup.Item>
              <ListGroup.Item className='border-0 bg-transparent text-white'><i className='bi bi-youtube'></i></ListGroup.Item>
              <ListGroup.Item className='border-0 bg-transparent text-white'> <i className='bi bi-instagram'></i></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer