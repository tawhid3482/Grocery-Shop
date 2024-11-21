import loader from "../assets/Error/loader.gif";

const ReactLoader = () => {
  return (
    <div>
      <img src={loader} alt="Loading..." className="w-full h-screen" />
    </div>
  );
};

export default ReactLoader;
