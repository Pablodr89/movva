import { Lottie } from "lottie-react";
import gearAnimation from "../public/engranaje.json";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-5 md:px-10">
      <figure className="flex justify-center items-start">
        <img
          src="/logo_amarillo.svg"
          alt="logo"
          className="w-auto h-36 md:h-52 mt-6"
        />
      </figure>

      <div className="w-48 h-48 md:w-64 md:h-64 flex justify-center items-center">
        <Lottie src={gearAnimation} loop={true} autoplay={true} />
      </div>

      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-primary text-center max-w-full">
        Web en construcción
      </h1>
    </div>
  );
}

export default App;
