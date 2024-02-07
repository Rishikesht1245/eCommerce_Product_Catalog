import { useNavigate } from "react-router-dom";
import Button from "../componenets/UI/Button";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-10">
      <h1 className="text-primary font-mono uppercase">Error</h1>
      <h5>Sorry, something went wrong, please try after sometime</h5>
      <Button type="button" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </div>
  );
};
export default ErrorPage;
