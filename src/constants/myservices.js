import { CgWebsite } from "react-icons/cg";
import { TfiLayoutCtaCenter } from "react-icons/tfi";
import { RiShoppingCartLine } from "react-icons/ri";
import { SiAmazonapigateway } from "react-icons/si";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";

export const services = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Creating websites using React JS, Next JS, Node JS, Express JS and MongoDB.",
    icon: CgWebsite,
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Ensuring websites display correctly on all devices and screens.",
    icon: TfiLayoutCtaCenter,
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    description:
      "Building online stores with secure payment systems and inventory management.",
    icon: RiShoppingCartLine,
  },
  {
    id: 4,
    title: "Custom Web Applications",
    description: "Tailored software solutions for specific business needs.",
    icon: SiAmazonapigateway,
  },
  {
    id: 5,
    title: "API Integration",
    description:
      "Incorporating third-party services into websites for added functionality.",
    icon: MdOutlineIntegrationInstructions,
  },
  {
    id: 6,
    title: "Performance Optimization",
    description:
      "Improving website speed and efficiency for better user experience.",
    icon: GrDocumentPerformance,
  },
];
