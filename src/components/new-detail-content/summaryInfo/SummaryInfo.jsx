import React from "react"
import "./summaryInfo.scss"

const productList = [
  {
    thumb: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png",
    title: "Medusa Water Bottle",
    priceUnit: 30,
    quantity: 3,
  },
  {
    thumb: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png",
    title: "Medusa Water Bottle",
    priceUnit: 30,
    quantity: 3,
  },
  {
    thumb: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png",
    title: "Medusa Water Bottle",
    priceUnit: 30,
    quantity: 3,
  },
]

const SummaryInfo = () => {
  return (
    <div className="summary-info paper">
      <div className="summary-info-container paper-container">
        <p className="summary-title">Summary</p>
        <ul className="product-list">
          {productList?.map &&
            productList.map((product, idx) => (
              <li className="product-item" key={idx}>
                <div className="image-title-wrapper">
                  <img src={product?.thumb} alt="" />
                  <p className="title">{product?.title}</p>
                </div>
                <div className="price-wrapper">
                  <div className="quantity-price-wrapper">
                    <p className="price-unit">{`$${product?.priceUnit.toFixed(
                      2
                    )}`}</p>
                    <p className="quantity">{` x ${product?.quantity}`}</p>
                  </div>
                  <p className="total">{`$${(
                    product?.quantity * product?.priceUnit
                  ).toFixed(2)}`}</p>
                  <p className="currency">{`usd`}</p>
                </div>
              </li>
            ))}
        </ul>
        <div className="price-content">
          <p className="price-title">Subtotal</p>
          <div className="price-value-content">
            <p className="price-value">$150.00</p>
            <p className="price-unit">USD</p>
          </div>
        </div>
        <div className="price-content">
          <p className="price-title">Shipping</p>
          <div className="price-value-content">
            <p className="price-value">$10.00</p>
            <p className="price-unit">USD</p>
          </div>
        </div>
        <div className="price-content">
          <p className="price-title">Tax</p>
          <div className="price-value-content">
            <p className="price-value">$0.00</p>
            <p className="price-unit">USD</p>
          </div>
        </div>
        <div className="original-total">
          <p className="original-total-title">Original Total</p>
          <p className="original-total-value">$160.00</p>
        </div>
        <div className="price-content">
          <p className="price-title">Refunded for Returns</p>
          <div className="price-value-content">
            <p className="price-value">$30.00</p>
            <p className="price-unit">USD</p>
          </div>
        </div>
        <div className="net-total-content">
          <p className="net-total-content-title">Net Total</p>
          <p className="net-total-content-value">$130.00</p>
        </div>
      </div>
    </div>
  )
}

export default SummaryInfo
