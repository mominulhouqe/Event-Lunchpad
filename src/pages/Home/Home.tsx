import Container from "@/components/ui/Container";
import HeaderSection from "./Sections/HeaderSection";
import BannerSection from "./Sections/BannerSection";
import ServicesSection from "./Sections/ServicesSection";
import EventItems from "./Sections/EventItems";
import PricingPlan from "./Sections/PricingPlan";
import Gallary from "./Sections/Gallary";
import RecentlyEvent from "./Sections/RecentlyEvent";
import UpcommingEvent from "./Sections/UpcommingEvent";
import Sponsor from "./Sections/Sponsor";
import ClientSays from "./Sections/ClientSays";
import TimeManagesments from "./Sections/TimeManagesments";

const Home = () => {
  return (
    <Container className="py-3">
      <HeaderSection />
      <BannerSection />
      <ServicesSection />
      <EventItems />
      <PricingPlan />
      <Gallary />
      <RecentlyEvent />
      <UpcommingEvent />
      <Sponsor />
      <ClientSays />
      <TimeManagesments />
    </Container>
  );
};

export default Home;
