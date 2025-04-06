import { useParams, useNavigate } from "react-router-dom";
import "./ProductVariant.css";

export default function ProductVariant() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Product Variant Page for ID: {id}</h2>
      <button className="back-button" onClick={() => navigate("/products")}>
        Back to Products
      </button>
    </div>
  );
}
