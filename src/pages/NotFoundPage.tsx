import { useNavigate } from "react-router-dom";
import Button from "../componenets/UI/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[70vh] w-full flex flex-col items-center justify-center gap-10">
      <h1 className="text-primary font-mono">404</h1>
      <h5>Sorry, the requested page is not found</h5>
      <Button type="button" onClick={() => navigate("/products")}>
        View Products
      </Button>
    </div>
  );
};
export default NotFoundPage;
