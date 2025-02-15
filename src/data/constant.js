import { CodeXml, NotebookPen, Rocket } from "lucide-react";
import logo from "../assets/logo/logo.png";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";
// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";
export { logo };

// company
export const companyDetails = {
  name: "WaveGenX AI",
  address: " No 25/5, Anna street , Korattur , Chennai - 600080",
  phone: "+91-8056078722",
  email: "abc@example.com",
  whatsapplink:
    "https://api.whatsapp.com/send/?phone=918056078722&text&type=phone_number&app_absent=0",
};

// working process
export const workingProcess = [
  {
    step: 1,
    title: "Discovery & Requirement Analysis",
    description:
      "We begin by deeply understanding your vision, goals, and technical needs. Through strategic discussions, we define project objectives, gather key requirements, and assess feasibility, ensuring a strong foundation for development.",
    icon: NotebookPen,
  },
  {
    step: 2,
    title: "Design & Development",
    description:
      "Our design team crafts intuitive, user-centric interfaces that align with your brand. Meanwhile, our developers build high-performance, scalable solutions using cutting-edge technologies, following industry best practices to ensure security and efficiency.",
    icon: CodeXml,
  },
  {
    step: 3,
    title: "Quality Assurance & Deployment",
    description:
      "We conduct extensive testing to ensure flawless functionality, security, and performance. After rigorous quality checks, we deploy the final product, ensuring a seamless transition with ongoing support and optimization.",
    icon: Rocket,
  },
];

// web development services
// Web Development Services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Development",
    image: require("../assets/images/landingpage/ecommerce.webp"),
    description:
      "We build scalable, secure, and user-friendly e-commerce platforms that enhance customer experience, streamline operations, and drive online sales growth.",
  },
  {
    id: 2,
    title: "Social Media Platforms",
    image: require("../assets/images/landingpage/socialmedia.webp"),
    description:
      "Engage and grow your audience with custom-built social media platforms designed for seamless interaction, real-time engagement, and brand expansion.",
  },
  {
    id: 3,
    title: "High-Converting Landing Pages",
    image: require("../assets/images/landingpage/landing.webp"),
    description:
      "Create impactful landing pages designed to capture attention, communicate your brand message effectively, and drive maximum conversions.",
  },
  {
    id: 4,
    title: "Custom Web Development",
    image: require("../assets/images/landingpage/customweb.webp"),
    description:
      "We develop fully customized websites tailored to your business goals, blending creativity and advanced functionality for a standout online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landingpage/ios.webp"),
    description:
      "We craft high-performance iOS apps using Swift and Objective-C, ensuring seamless functionality, optimal speed, and a flawless user experience across all Apple devices.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landingpage/android.webp"),
    description:
      "Leveraging Java and Kotlin, we build scalable and feature-rich Android applications tailored to your business needs, ensuring high performance and user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    image: require("../assets/images/landingpage/flutter.webp"),
    description:
      "With Flutter, we develop cross-platform apps for iOS and Android from a single codebase, ensuring a smooth, cost-effective, and consistent user experience.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    image: require("../assets/images/landingpage/hybrid.webp"),
    description:
      "Our hybrid app solutions offer seamless functionality across platforms, combining native performance with the flexibility of web technologies for maximum reach.",
  },
];

// testimonials
export const testimonials = [
  {
    name: "Sarah L.",
    position: "Marketing Director, SecureChain Innovations",
    desc: `"WaveGenX AI really took our online presence to the next level. From day one, they
understood our vision and designed a website that not only looks amazing but also works
seamlessly. We’ve seen a huge improvement in site performance and customer engagement.
They really went above and beyond, and we couldn’t be happier with the results."`,
    img: require("../assets/images/testimonials/1.jpg"),
  },
  {
    name: "James T.",
    position: "CEO, FinTech Group",
    desc: `"Working with WaveGenX AI was such a smooth and rewarding experience. They built a
fully customized website for us that aligned perfectly with our brand. It’s faster, easier to
navigate, and has greatly improved our search rankings. Their commitment to our project
didn’t end with launch—they’ve continued to support us with ongoing updates and
maintenance."`,
    img: require("../assets/images/testimonials/2.jpg"),
  },
  {
    name: "Emily R.",
    position: "Product Manager, PlayX Studios",
    desc: `"The mobile app WaveGenX AI developed for us has been a game-changer. They didn’t
just build an app—they created something that truly resonates with our users. It’s easy to use,
highly functional, and aligns perfectly with our business needs. Our customers love it, and
we’re already seeing the positive impact on our bottom line."`,
    img: require("../assets/images/testimonials/3.jpg"),
  },
  {
    name: "Michael K.",
    position: "Founder, TechFlow Solutions",
    desc: `"We had a pretty ambitious vision for our mobile app, and the team at WaveGenX AI
brought it to life better than we ever imagined. From the initial idea to the final product, they
delivered an app that’s reliable, user-friendly, and has improved the way we do business. I
highly recommend their team!"`,
    img: require("../assets/images/testimonials/4.jpg"),
  },
  {
    name: "Rachel P.",
    position: "Head of Design, Creative Minds Agency",
    desc: `"The team at WaveGenX AI really outdid themselves with our platform’s UI and UX.
They designed an experience that’s visually engaging and, most importantly, incredibly easy
to navigate. Our users have been raving about the changes, and we’ve seen a noticeable
increase in user satisfaction and retention."`,
    img: require("../assets/images/testimonials/4.jpg"),
  },
  {
    name: "David H.",
    position: "Lead Product Designer, Visionary Tech",
    desc: `"WaveGenX AI completely transformed our product with their expert UI/UX design. They
took the time to understand both our goals and our users' needs, crafting a solution that’s not
only beautiful but functional. Their attention to detail and user-centric approach have made a
world of difference."`,
    img: require("../assets/images/testimonials/4.jpg"),
  },
  {
    name: "Olivia S.",
    position: "CTO, AI Innovators",
    desc: `"Integrating AI into our business was a big step, but WaveGenX AI made it seamless.
Their team developed a powerful AI solution that has helped us automate key processes,
saving us time and boosting efficiency. Their expertise and ongoing support have been
invaluable, and we’re already looking forward to our next project together."`,
    img: require("../assets/images/testimonials/4.jpg"),
  },
  {
    name: "John M.",
    position: "Director of Operations, DataWave Analytics",
    desc: `"Thanks to WaveGenX AI, our business is now powered by AI in a way that’s already
delivering incredible results. The AI system they developed not only helps us make smarter
decisions but also improves our overall workflow. They’ve been fantastic throughout the
entire process, offering both guidance and hands-on support."`,
    img: require("../assets/images/testimonials/4.jpg"),
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const faqItems = [
  {
    id: 1,
    question: "How can I get in touch with WaveGenX AI Private Limited?",
    answer: `You can reach out to us through the contact form on this page, or by emailing us directly at ${companyDetails.email}. Alternatively, you can also call us at ${companyDetails.phone} for immediate assistance.`,
  },
  {
    id: 2,
    question: "How long will it take for someone to respond to my inquiry?",
    answer: `We aim to respond to all inquiries within 24–48 hours on business days. If you need urgent assistance, please indicate so in your message, and we’ll prioritize your request.`,
  },
  {
    id: 3,
    question: "What types of services does WaveGenX AI Private Limited offer?",
    answer: `WaveGenX AI Private Limited offers a wide range of services including:
      - Website Development
      - App Development
      - UI/UX Design
      - Artificial Intelligence (AI) Development

    For more detailed information, please visit our Services page.`,
  },
  {
    id: 4,
    question:
      "How do I schedule a consultation or meeting with WaveGenX AI Private Limited?",
    answer: `You can schedule a meeting by filling out the contact form on this page or by sending us an email at [email@example.com]. We’ll get back to you with available time slots.`,
  },
  {
    id: 5,
    question: "Do you offer support for ongoing projects?",
    answer: `Yes, we provide support for all ongoing projects. Whether you need help with updates, maintenance, or troubleshooting, our team is ready to assist you.`,
  },
  {
    id: 6,
    question: "Can I request a quote for a specific service?",
    answer: `Yes, we provide custom quotes based on your requirements. Please fill out the contact form with details about the service you need, and we’ll send you an estimate as soon as possible.`,
  },
  {
    id: 7,
    question: "Do you offer free consultations?",
    answer: `Yes, we offer a free initial consultation to better understand your needs and discuss potential solutions. Reach out to schedule your consultation!`,
  },
  {
    id: 8,
    question: "Where is WaveGenX AI Private Limited located?",
    answer: `WaveGenX AI Private Limited operates remotely, and our team works from various locations around the world. We’re fully capable of supporting clients globally.`,
  },
  {
    id: 9,
    question: "What industries do you specialize in?",
    answer: `WaveGenX AI Private Limited has worked with clients across multiple industries, including:
      - E-commerce
      - Healthcare
      - Education
      - Finance
    We tailor our solutions to fit the unique needs of each industry.`,
  },
  {
    id: 10,
    question: "Can I work with WaveGenX AI Private Limited from any country?",
    answer: `Absolutely! WaveGenX AI Private Limited works with clients globally. Thanks to our remote setup, we are able to serve businesses in different time zones and regions efficiently.`,
  },
  {
    id: 11,
    question:
      "How do I track the progress of my project with WaveGenX AI Private Limited?",
    answer: `We provide regular project updates through email, meetings, or our project management platform. You will have access to track the status and milestones of your project.`,
  },
  {
    id: 12,
    question:
      "What makes WaveGenX AI Private Limited different from other companies?",
    answer: `At WaveGenX AI Private Limited, we focus on delivering cutting-edge, custom solutions tailored to your business needs. Our approach combines deep industry expertise with a focus on innovation and customer satisfaction, ensuring we always exceed expectations.`,
  },
];
