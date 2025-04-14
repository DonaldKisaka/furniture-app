import { NewsItemProps, aboutProps, navLinkProps, FaqItemProps } from "@/types";

export const navLinks: navLinkProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "News",
    href: "#news",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Faq",
    href: "#faq",
  },
];

export const about: aboutProps[] = [
  {
    number: "59+",
    text: "Our Patners"
  },
  {
    number: "200+",
    text: "Total Clients"
  },
  {
    number: "300+",
    text: "Projects"
  }
  
];

export const news: NewsItemProps[] = [
  {
    img: "/kitchen11.jpg",
    title: "REDEFINING URBAN LIVING WITH STYLE AND COMFORT",
    description: "Embark on a journey through the latest trends in urban living.",
  },
  {
    img: "/kitchen12.jpg",
    title: "A DYNAMIC HAVEN FOR MODERN AND VIBRANT SOULS.", 
    description: "Step into a dynamic haven crafted for those with modern and artistic preferences.",
  },
]

export const pricingData = {
  "Light Renovation": {
    price: "sh. 130,000",
    features: [
      "Basic design consultation",
      "Use of standard materials.",
      "Guaranteed work for 6 months.",
      "Simple color and design guidance.",
      "Minimal structural changes.",
      "Affordable & quick implementation.",
    ],
  },
  "Intermediate Renovation": {
    price: "sh. 250,000",
    features: [
      "Custom consultation and design.",
      "Use of medium to high quality materials and furniture.",
      "Guaranteed work for 1 Years.",
      "Deeper color and design selection session.",
      "Additional design and consultation.",
      "Structural improvements if necessary.",
      "Projects are managed by a dedicated team of experts.",
      "Longer installment options.",
      "Exclusive after-sales service.",
      "Significant transformation in layout and interior design.",
    ],
  },
  "Total Renovation": {
    price: "sh. 350,000",
    features: [
      "Full interior redesign and construction.",
      "Premium materials and smart home integration.",
      "Guaranteed work for 3 years.",
      "Dedicated interior designer + architect.",
      "Turnkey project management.",
      "Extended after-sales care and warranty.",
    ],
  },
};

export const faqData: FaqItemProps[] = [
  {
    question: "What is the duration of the renovation process?",
    answer: "The duration of the renovation process depends on the scope of the project and the complexity of the design. We aim to complete the project within 3-6 months, but this can vary based on the specific requirements and design complexity.",
  },
  {
    question: "What services does RenoTzy offer?",
    answer: "We offer a range of services including design consultation, project management, construction, and after-sales service.",
  },
  {
    question: "What is the payment process?",
    answer: "We offer flexible payment options to suit your budget. You can pay a deposit to secure your booking and then make the remaining payment before the project starts.",
  },
  {
    question: "What is the process of working with RenoTzy?",
    answer: "The process of working with RenoTzy is simple and straightforward. We will provide you with a dedicated project manager who will be responsible for managing your project from start to finish.",
  },
  {
    question: "What is RenoTzy?",
    answer: "RenoTzy is a company that offers a range of services including design consultation, project management, construction, and after-sales service.",
  },
  {
    question: "What is the turn around time for projects?",
    answer: "The turn around time for projects depends on the scope of the project and the complexity of the design. We aim to complete the project within 3-6 months, but this can vary based on the specific requirements and design complexity.",
  },
];


