import Container from "@/components/ui/Container";
import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
  <Container>
      <header className="py-3">
      <nav className="flex justify-between items-center font-medium">
        <div className="md:text-3xl text-2xl space-x-2">
          <span>Event</span>
          <span className="text-primary-color">Lunchpad</span>
        </div>
        <ul className="space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
        </ul>
      </nav>
    </header>
  </Container>
  );
};

export default Navber;
