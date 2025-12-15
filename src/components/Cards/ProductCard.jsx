import React from 'react'
import { Card } from 'react-bootstrap'
import "../Cards/card.css"

const ProductCard = ({ data }) => {
  // check if product is new based on offer price
  const isNewProduct = data.offerPrice === 0

  // Generate an array of stars icons based on the product's rating
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <i 
        key={i}
        className={`bi ${i < data.rating ? " bi-star-fill" : "bi-star"}`}></i>
    )
  }

  
  return (
    <>
      <Card className='product-wrapper border-0'>

        <Card.Body>
          <div className='text-center position-relative'>
            <span className={`badge position-absolute top-0 start-0 ${isNewProduct ? "bg-success" : "bg-danger"}`}>
              {isNewProduct ? "New" : "Sale"}
            </span>
          

            <Card.Img variant="top" src={data.image} />
            <div className="card-product-action">
              <span className='btn-action shadow-sm'>
                <i className="bi bi-eye" data-bs-original-title="Quick View"></i>
              </span>

              <span className='btn-action shadow-sm'>
                <i className="bi bi-heart" data-bs-original-title="Whishlist"></i>
              </span>

              <span className='btn-action shadow-sm'>
                <i className="bi bi-arrow-left-right" data-bs-original-title="Compare"></i>
              </span>
            </div>
          </div>
          <small className='small-text mb-1 fw-bold d-block'>{data.cat}</small>

          <Card.Title className='title'>{data.title}</Card.Title>

          <div className="py-2">
            <small className="text-warning me-1">
              {stars}
            </small>
            <small className="text-muted">
              {data.rating} ({ Math.floor(data.rating + Math.random() * 100) })
            </small>
          </div>

          <Card.Footer className='border-0 d-flex align-content-center justify-content-between p-0 mt-2'>
            <div className=''>
              <span
                className={
                  isNewProduct ? "body-text" : "text-decoration-line-through body-text"
                }
              >
                <i className="bi bi-currency-euro">{data.price}</i>
              </span>

              <span 
                className={
                  isNewProduct ? "d-none" : "body-text"
                }
              >
                <i className="bi bi-currency-euro">{data.offerPrice}</i>
              </span>
            </div>

            <div className=''>
              <button className="primary-btn">
                <i className="bi bi-plus-lg"></i> Add
              </button>
            </div>
          </Card.Footer>

        </Card.Body>

      </Card>
    </>
  )
}

export default ProductCard