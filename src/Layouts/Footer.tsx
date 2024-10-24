import Container from "@/components/ui/Container";
import { Euro, FacebookIcon, Languages } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-4">
      <Container className="p-6">
        <div className="flex flex-wrap gap-4 justify-between">
          <h4>
            <span className="text-white mr-2">Event</span>
            <span className="text-primary-color">Lunchpad</span>
          </h4>
          <div>
            <p className="mb-2">Product</p>
            <p className="mb-2">Pricing</p>
            <p className="mb-2">Overview</p>
            <p className="mb-2">Browser</p>
            <p className="mb-2">Accessibility</p>
          </div>
          <div>
            <p className="mb-2">Product</p>
            <p className="mb-2">Pricing</p>
            <p className="mb-2">Overview</p>
            <p className="mb-2">Browser</p>
            <p className="mb-2">Accessibility</p>
          </div>
          <div>
            <p className="mb-2">Product</p>
            <p className="mb-2">Pricing</p>
            <p className="mb-2">Overview</p>
            <p className="mb-2">Browser</p>
            <p className="mb-2">Accessibility</p>
          </div>
          <div>
            <p className="mb-2">Product</p>
            <p className="mb-2">Pricing</p>
            <p className="mb-2">Overview</p>
            <p className="mb-2">Browser</p>
            <p className="mb-2">Accessibility</p>
          </div>
          <div>
            <p className="mb-2">Product</p>
            <p className="mb-2">Pricing</p>
            <p className="mb-2">Overview</p>
            <p className="mb-2">Browser</p>
            <p className="mb-2">Accessibility</p>
          </div>
        </div>
        <div className="border-b border-gray-900 p-2"></div>

        <footer className="flex justify-between p-2">
          <span>@2024. All rights reserved</span>
          <div className="flex items-center gap-4">
            <span>Terms</span>
            <span>Privacy</span>
            <span className="flex gap-1">
              <Languages /> <span>EN</span>
            </span>
            <span className="flex gap-1">
              <Euro /> <span>EUR</span>
            </span>
            <span className="border rounded-full p-px">
              <FacebookIcon />
            </span>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
