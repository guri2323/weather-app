import "./Products.css";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="products">
      <h1>Products</h1>
      <div className="product-list">
        {/* Product 1 */}
        <Link to="/products/weather" className="product-link">
          <div className="product-item">
            <h2>Weather App</h2>
            <p>
              Get real-time weather forecasts, severe weather alerts, and 10-day
              predictions for any global location
            </p>
          </div>
        </Link>

        {/* Product 2 */}
        <Link to="/products/2" className="product-link">
          <div className="product-item">
            <h2>Product 2</h2>
            <p>Description of Product 2</p>
          </div>
        </Link>

        {/* Product 3 */}
        <Link to="/products/3" className="product-link">
          <div className="product-item">
            <h2>Product 3</h2>
            <p>Description of Product 3</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
