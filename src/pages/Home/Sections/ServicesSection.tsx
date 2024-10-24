import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ServicesSection = () => {
  return (
    <div>
      <div className="text-center">
        <h2>Our services</h2>
        <p className="max-w-lg w-full mx-auto mt-4 mb-6">
          {" "}
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-md">
          <img
            className="w-full  rounded-md"
            src="https://images.unsplash.com/photo-1561489396-888724a1543d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
            alt=""
          />

          <h4>Corporate event</h4>
          <div className="flex items-center gap-5 mb-2">
            <span>
              <Check
                size={20}
                className="text-green-700 bg-white p-1 rounded-full"
              />{" "}
            </span>
            <p className="text-sm">One day pas access all lecture</p>
          </div>
          <div className="flex items-center gap-5 mb-2">
            <span className="">
              <Check
                size={20}
                className="text-green-700 bg-white p-1 rounded-full"
              />{" "}
            </span>
            <p className="text-sm">One day pas access all lecture</p>
          </div>
          <div className="flex items-center gap-5 mb-2">
            <span className="">
              <Check
                size={20}
                className="text-green-700 bg-white p-1 rounded-full"
              />{" "}
            </span>
            <p className="text-sm">One day pas access all lecture</p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h4>Wedding event</h4>
          <p className="aspect-video mb-2">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies.Ut posuere felis
            arcu tellus tempus in in ultricies.
          </p>

          <div className="flex items-center gap-5 mb-2">
            <span>
              <Check
                size={20}
                className="text-green-700 bg-white p-1 rounded-full"
              />{" "}
            </span>
            <p className="text-sm">One day pas access all lecture</p>
          </div>
          <div className="flex items-center gap-5 mb-2">
            <span className="">
              <Check
                size={20}
                className="text-green-700 bg-white p-1 rounded-full"
              />{" "}
            </span>
            <p className="text-sm">One day pas access all lecture</p>
          </div>
          <div className="flex items-center gap-5 mb-2">
            <span className="">
              <Check
                size={20}
                className="text-green-700 bg-white p-1 rounded-full"
              />{" "}
            </span>
            <p className="text-sm">One day pas access all lecture</p>
          </div>
          <Button size="sm" className="w-full mt-2 rounded-none">
            Checkout it out
          </Button>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <img
            className="w-full  rounded-md"
            src="https://images.unsplash.com/photo-1561489396-888724a1543d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
            alt=""
          />

          <h4>Organization event</h4>
          <div className="flex items-center gap-5 mb-2">
            <span>
              <Check
                size={20}
                className="text-green-700 bg-white p-1 rounded-full"
              />{" "}
            </span>
            <p className="text-sm">One day pas access all lecture</p>
          </div>
          <div className="flex items-center gap-5 mb-2">
            <span className="">
              <Check
                size={20}
                className="text-green-700 bg-white p-1 rounded-full"
              />{" "}
            </span>
            <p className="text-sm">One day pas access all lecture</p>
          </div>
          <div className="flex items-center gap-5 mb-2">
            <span className="">
              <Check
                size={20}
                className="text-green-700 bg-white p-1 rounded-full"
              />{" "}
            </span>
            <p className="text-sm">One day pas access all lecture</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
