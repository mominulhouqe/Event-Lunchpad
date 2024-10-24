import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const TimeManagements = () => {
  return (
    <div className=" mt-6 p">
      <h2 className="font-bold text-center my-12 ">Schedule Management</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-lg shadow-md overflow-hidden">
          <div className="hy bg-gray-400 hover:bg-primary-color text-white w-full h-40 flex justify-center items-center">
            <User size={40} />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2 uppercase">
            7/24 Event Avalibale
            </h3>
            <div className="w-10 h-px mx-auto bg-red-400 mb-4"></div>
            <p className="text-sm text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              non.
            </p>
            <Button variant={"outline"} className="w-full">
              Details
            </Button>
          </div>
        </div>
        <div className="rounded-lg shadow-md overflow-hidden">
          <div className="hy bg-gray-400 hover:bg-primary-color text-white w-full h-40 flex justify-center items-center">
            <User size={40} />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2 uppercase">
             Great locations
            </h3>
            <div className="w-10 h-px mx-auto bg-red-400 mb-4"></div>
            <p className="text-sm text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              non.
            </p>
            <Button variant={"outline"} className="w-full">
              Details
            </Button>
          </div>
        </div>
        <div className="rounded-lg shadow-md overflow-hidden">
          <div className="hy bg-gray-400 hover:bg-primary-color text-white w-full h-40 flex justify-center items-center">
            <User size={40} />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2 uppercase">
              More than 200 Speakers
            </h3>
            <div className="w-10 h-px mx-auto bg-red-400 mb-4"></div>
            <p className="text-sm text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              non.
            </p>
            <Button variant={"outline"} className="w-full">
              Details
            </Button>
          </div>
        </div>
        <div className="rounded-lg shadow-md overflow-hidden">
          <div className="hy bg-gray-400 hover:bg-primary-color text-white w-full h-40 flex justify-center items-center">
            <User size={40} />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2 uppercase">
            Lets party after event
            </h3>
            <div className="w-10 h-px mx-auto bg-red-400 mb-4"></div>
            <p className="text-sm text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              non.
            </p>
            <Button variant={"outline"} className="w-full">
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeManagements;
