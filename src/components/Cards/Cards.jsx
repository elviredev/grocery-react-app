import React from 'react'

const Cards = ({ val }) => {
  return (
    <div className="d-flex rounded-2 justify-content-between align-content-center align-items-md-end" style={{ background:val.color }}>
        <div className='des-box px-4 py-5' style={{ flex: "0 0 60%" }}>
            <h3 className="heading">{val.title}</h3>
            <p className='small-text py-3 fw-bold'>{val.products}</p>
            <button className="btn primary-btn">Shop Now</button>
        </div>

        <div className="img-box">
          <img src={val.image} alt={val.title} className='img-fluid' />
        </div>
    </div>
  )
}

export default Cards