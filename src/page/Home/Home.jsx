import React from 'react'
import Slider from '../../components/Slider/Slider'
import { Col, Container, Row } from 'react-bootstrap'
import { bestCategoriesData, featureData, productData } from '../../utils/data'
import Categories from '../../components/Categories/Categories'
import ProductCard from '../../components/Cards/ProductCard'
import Cards from '../../components/Cards/Cards'

const Home = () => {
  return (
    <>
      <Slider />
      <section className="py-5">
        <Container>
          <Row>
            {
              featureData.map((val, index) => {
                return (
                  <Col md={6} lg={3} sm={6} key={index}>
                    <div className='d-flex align-items-start'>
                      <div className='mb-3 me-3'>
                        <img src={val.image} alt={val.title} className='img-fluid' />
                      </div>
                      <div className="text">
                        <h3 className="sub-heading mb-1">{val.title}</h3>
                        <p className="body-text">{val.text}</p>
                      </div>
                    </div>
                  </Col>
                )
              })
            }

          </Row>
        </Container>
      </section>

      <Categories />

      <div className="py-5">
        <Container>
          <Row>
            {
              bestCategoriesData.map((val, index) => {
                return (
                  <Col md={4} sm={12} key={index} className='mb-4 mb-md-0'>
                    <Cards val={val} />
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>

      <section className='product-list py-5 bg-light'>
        <Container>
          <Row>
            <Col md={12} className='mb-4'>
              <div className='d-flex justify-content-between align-items-center'>
                <h1 className="heading">Popular Products</h1>
                <button className="btn primary-btn">View All</button>
              </div>
            </Col>
          </Row>

          <Row className='row g-4 row-cols-2 row-cols-lg-5 row-cols-md-3'>
            {
              productData.map((val, index) => {
                return (
                  <Col key={index}>
                    <ProductCard data={val} />
                  </Col>
                )
              })
            }

          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home