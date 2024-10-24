import { Button } from "@/components/ui/button";

const HeaderSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mb-4 place-content-center my-6">
        <div className="text-5xl text-center md:text-left uppercase text-secondary font-semibold">
          <span> Best Event</span> <br />
          <span >Management firm</span>
        </div>

        <div className="text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate.
        </div>
      </div>
      <div className="flex md:justify-start justify-center">

      <Button className="rounded-none">Explore</Button>
      </div>
    </>
  );
};

export default HeaderSection;
