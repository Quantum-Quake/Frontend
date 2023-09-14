// import RootLayout from "./layout/layout";
import {Input} from "@nextui-org/react";

function Hero() {
    return (
      <div className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-8xl mb-4 text-gray-900">Know Your Rights</h1>
          <div className="flex flex-row pb-8 space-x-5">
          <Input type="" variant="bordered" label="Prompt" className=""/>
          <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Hero;
