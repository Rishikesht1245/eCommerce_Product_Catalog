import loadingImage from "../../assets/images/loading.png";
const Loader = () => {
  return (
    <div className="text-center flex items-center justify-center w-full h-[60vh]">
      <img className="h-10 w-10 animate-spin" src={loadingImage} alt="Loader" />
    </div>
  );
};
export default Loader;
