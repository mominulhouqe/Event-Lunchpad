import { ArrowLeft, ArrowRight } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, harum.",
    author: "John Doe",
    designation: "CEO, Company A",
  },
  {
    id: 2,
    text: "Suscipit atque ipsum nisi blanditiis, asperiores nostrum rerum velit tempore repellendus.",
    author: "Jane Smith",
    designation: "CTO, Company B",
  },
  {
    id: 3,
    text: "Nemo, labore veritatis ipsa amet at repellat tempora ratione dolore maiores natus?",
    author: "Alice Johnson",
    designation: "COO, Company C",
  },
  // Add more feedback objects as needed
];

const ClientSays = () => {
  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-between my-4 gap-2">
          <div className="">
            <h2 className="mb-4">What Clients Say</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
              veritatis.
            </p>
          </div>
          <div className="flex space-x-4">
            <span
              className="text-white p-1 rounded-full bg-primary-color"
              // onClick={goToPreviousSlide}
            >
              <ArrowLeft />
            </span>
            <span
              className="text-white p-1 rounded-full bg-primary-color"
              // onClick={goToNextSlide}
            >
              <ArrowRight></ArrowRight>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          {feedbacks.map((feedback) => (
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://i.ibb.co/d58Rp45/my-img4.jpg"
                  alt=""
                />
                <div className="">
                  <h4 className="m-0">{feedback.author}</h4>
                  <h6>{feedback.designation}</h6>
                </div>
              </div>
              <article className="my-3">{feedback.text}</article>
              <h4 className="my-4"> NETLIFIX</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientSays;
