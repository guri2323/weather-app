import { useParams } from "react-router-dom";
export default function ProductVariant() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Variant Page for ID: {id}</h2>
    </div>
  );
}
