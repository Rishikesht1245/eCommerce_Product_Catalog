import { Link, useNavigate, Navigate } from "react-router-dom";
import LoginForm from "../componenets/form/LoginForm";
import useAuthData from "../customHooks/useAuthData";
import { ILogin } from "../interfaces/products";

const SignInPage = () => {
  const navigate = useNavigate();

  const [auth, setAuthData] = useAuthData();

  // checking if users is logged in
  if (auth) return <Navigate to={`/`} />;

  const loginHandler = (auth: boolean) => {
    setAuthData(auth, "login");
  };

  const login = (formData: ILogin): Promise<any> => {
    console.log("login in");
    return new Promise((resolve, reject) => {
      if (
        formData?.email === "test@gmail.com" &&
        formData?.password === "test@1234"
      ) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  };

  return (
    <>
      <div className="parent-container lg:max-w-md border">
        <h6 className="mb-6 text-center text-gray-600 tracking-widest">
          LOGIN
        </h6>
        <LoginForm loginHandler={loginHandler} onSubmit={login} />
        <div className="ml-auto text-sm pt-1 px-2 hover:text-blue-700">
          <Link to={"/register"}>Register →</Link>
        </div>
      </div>
    </>
  );
};
export default SignInPage;
