import { useNavigate } from "react-router-dom";
import Button from "../componenets/UI/Button";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[70vh]">
      <div className="flex flex-col items-center gap-5">
        <h6>Home Page</h6>
        <p>
          The page is currently unavailable. Click the button below to access
          the Product Catalog
        </p>
      </div>
      <Button type="button" onClick={() => navigate("/products")}>
        View Products
      </Button>
    </div>
  );
};
export default HomePage;
