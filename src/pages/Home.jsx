import React, { lazy } from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vids/banner.mp4";
import {
  Ambulance,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Cloudy,
  CodeXml,
  Cpu,
  Quote,
  StickyNote,
  Store,
  Tv,
} from "lucide-react";
import { ReactComponent as icon1 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as icon2 } from "../assets/svg/services/App Development.svg";
import { Link } from "react-router-dom";
import howWeBuildCover from "../assets/images/how-we-build.jpeg";
import whyWorkWithUs1 from "../assets/images/whyworkwithus1.png";
import whyWorkWithUs2 from "../assets/images/whyworkwithus2.png";
import whyWorkWithUs3 from "../assets/images/whyworkwithus3.png";
import whyWorkWithUs4 from "../assets/images/whyworkwithus4.png";
import { ArrowLinkButton } from "../components/ArrowButtons";
import aboutImg2 from "../assets/images/why-ai-matters.webp";
import aboutImg from "../assets/images/aboutus-3.webp";
const ContactForm = lazy(() => import("../components/ContactForm"));
const BlogsSection = lazy(() => import("../components/website/BlogsSection"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const ServicesWeProvide = lazy(() =>
  import("../components/website/ServicesWeProvide")
);

const bannerServices = [
  {
    id: 1,
    title: "Web Development",
    icon: icon1,
    desc: "Web development is the process of building, designing, and maintaining dynamic, user-friendly websites and web applications.",
    landingPageLink: "/web-development",
  },
  {
    id: 2,
    title: "App Development",
    icon: icon2,
    desc: "Mobile app development involves creating innovative, user-friendly apps for smartphones and tablets across various platforms.",
    landingPageLink: "/app-development",
  },
  // {
  //   id: 3,
  //   title: "Blockchain",
  //   icon: icon3,
  //   desc: "Blockchain development focuses on building secure, decentralized applications and systems using blockchain technology for transparency and efficiency.",
  // },
];

const industries = [
  {
    icon: Ambulance,
    title: "Healthcare",
  },
  {
    icon: BriefcaseBusiness,
    title: "Finance",
  },
  {
    icon: Cpu,
    title: "Technology",
  },
  {
    icon: Store,
    title: "Retail &\n E-commerce",
  },
  {
    icon: Cloudy,
    title: "SaaS",
  },
  {
    icon: StickyNote,
    title: "Business Services",
  },
  {
    icon: Tv,
    title: "Media & Entertainment",
  },
  {
    icon: BrainCircuit,
    title: "AI",
  },
];

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen bg-black/50">
        <div className="pt-[12rem] pb-[5rem]">
          <div className="wrapper flex flex-col gap-7 justify-center h-full">
            <div
              data-aos="fade-up"
              className="flex items-center text-start self-start text-white px-3 py-2 rounded-full border border-white"
            >
              <CodeXml className="inline mr-2" /> <span>IT & AI Services</span>
            </div>
            <h1 data-aos="fade-up" className="heading text-white">
              Welcome to <span className="gradient-text">AI Company – </span>
              <br />
              <span className="text-[#FFC200]">
                Empowering Your Digital Growth
              </span>
            </h1>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 gap-5 md:gap-14 mt-5"
            >
              {bannerServices.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-primary/60 backdrop-blur-md lg:hover:bg-primary/60 text-white space-y-4 transition-all duration-300"
                >
                  <p className="text-xl font-medium">{item.title}</p>
                  <p className="min-h-[6rem]">{item.desc}</p>
                  <div className="flex justify-between items-center gap-5">
                    <item.icon className="w-14 h-14 fill-white" />
                    <Link
                      to={item.landingPageLink}
                      className="bg-white/20 p-3 rounded-full"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <ReactPlayer
            url={bannerVid}
            playing
            muted
            loop
            playsinline
            width="100%"
            height="100%"
            className="react-player"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  },
                },
              },
            }}
          />
        </div>
      </section>
      <section id="about-us" className="relative pt-[5rem] pb-[3rem]">
        <div className="wrapper">
          <p
            data-aos="fade-down"
            className="gradient-text uppercase text-center mb-5 md:mb-7"
          >
            About Us
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div className="flex flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">
                Innovation to transform your organization.
              </h3>
              <p className="description">
                At AI Company, we are at the forefront of revolutionizing the
                digital landscape. Our cutting-edge AI solutions, combined with
                unmatched expertise in web and mobile development, cloud
                computing, data analytics, and beyond, are designed to propel
                your business into the future. Discover a world where technology
                meets innovation, tailored to meet your unique needs. Let’s
                build the future, together. <br />
                <br /> At AI Company, we are at the forefront of AI innovation,
                leveraging cutting-edge technologies to transform businesses and
                enhance user experiences. Our AI-driven solutions are designed
                to empower organizations with the tools they need to thrive in
                an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesWeProvide />
      <section className="relative py-[3rem]">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">Why AI Matters</h3>
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="about"
                className="md:hidden h-full w-full aspect-video rounded-xl object-cover"
              />
              <p className="description">
                Artificial Intelligence is revolutionizing the way we interact
                with technology. By harnessing the power of AI, businesses can
                streamline operations, enhance decision-making, and deliver
                personalized experiences to their customers. With advanced
                algorithms and machine learning capabilities, we help our
                clients unlock new opportunities and achieve their strategic
                goals.
              </p>
            </div>
            <div className="md:flex hidden flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[4rem] bg-[#D8D8D8A3]">
        <div className="wrapper space-y-3">
          <h2 data-aos="fade-up" className="section-heading text-center">
            Industries We Serve
          </h2>
          <p data-aos="fade-up" className="text-center">
            Using powerful, industry-specific software solutions, our team can
            help you achieve your business goals.
          </p>
          <div className="pt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {industries.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  data-aos="fade-up"
                  key={item.title}
                  className="text-center p-5 bg-white rounded-xl space-y-3"
                >
                  <IconComponent className="w-8 h-8 mx-auto text-secondary" />
                  <p className="font-medium text-[.9rem] whitespace-pre-line">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pt-[4rem]">
        <h2 data-aos="fade-up" className="wrapper section-heading text-center">
          How WaveGenX AI Private Limited Helps You Deliver the Best Results
        </h2>
        <div
          data-aos="fade-up"
          className="wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-[3rem] mt-10"
        >
          {[
            {
              title: "Collaborative Partnerships",
              desc: "We work closely with you at every stage to ensure we’re aligned with your vision and deliver solutions that exceed your expectations.",
              styles: "bg-[#ddb36f] lg:rotate-[-18deg] lg:translate-y-[8rem]",
            },
            {
              title: "Innovation and Creativity",
              desc: "We thrive on solving complex problems and creating innovative solutions that blend technical expertise with creative thinking.",
              styles: "bg-[#ddb36f] lg:rotate-[-10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Commitment to Excellence",
              desc: "We set high standards for ourselves, delivering quality work on time, every time, to ensure your solutions are built to last.",
              styles: "bg-[#ddb36f]",
            },
            {
              title: "Tailored Solutions",
              desc: "We treat every project with the attention it deserves, crafting custom solutions that align with your unique business goals.",
              styles: "bg-[#ddb36f] lg:rotate-[10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Transparency and Adaptability",
              desc: "We believe in open communication and stay flexible to adapt to the latest trends, ensuring your business remains ahead of the curve.",
              styles:
                "bg-[#ddb36f] col-span-2 md:col-span-1 w-1/2 mx-auto md:w-full lg:rotate-[18deg] lg:translate-y-[8rem]",
            },
          ].map((item) => (
            <div
              className={`p-5 ${item.styles} h-full w-full flex items-center hover:rotate-[180deg] group text-center rounded-xl transition-all duration-300`}
              key={item.title}
            >
              <div className="space-y-3 group-hover:scale-y-[-1] group-hover:scale-x-[-1] transition-all duration-300">
                <p className="md:text-lg font-bold leading-tight">
                  {item.title}
                </p>
                <p className="text-[.9rem]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="wrapper pt-[4rem] lg:mt-[9rem]">
        <div
          data-aos="fade-up"
          className="relative min-h-[40vh] rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-[-1]"></div>
          <img
            loading="lazy"
            src={howWeBuildCover}
            alt="hero banner"
            className="w-full h-full object-cover absolute inset-0 z-[-2]"
          />
          <div className="p-10 text-white text-start space-y-3">
            <h3 className="text-2xl font-semibold">How we build</h3>
            <p className="max-w-xs">
              We prioritize your success, understand your unique needs, and
              deliver tailored solutions that drive your business growth.
            </p>
            <div className="pt-7">
              <ArrowLinkButton to="/contact">Let's Chat</ArrowLinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[4rem] wrapper space-y-3">
        <h2
          data-aos="fade-up"
          className="section-heading text-center md:mb-[2rem]"
        >
          Why Work With Us?
        </h2>
        <div className="flex flex-col gap-5">
          <div
            data-aos="fade-up"
            className="bg-[#6B308C] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  At WaveGenX AI Private Limited, we combine creativity,
                  technical expertise, and a passion for excellence to bring
                  your vision to life. With a focus on quality and a
                  client-first approach, we ensure every project meets your
                  unique requirements and delivers lasting results.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs1}
              alt=""
              className="md:absolute right-0 top-1/2 md:-translate-y-1/2 max-h-[16rem] md:max-h-[25rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#FE7624] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  At WaveGenX AI Private Limited, we deliver excellence across
                  website development, app development, UI/UX design, and AI
                  solutions. Our expertise ensures innovative, scalable results
                  tailored to your business goals.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs2}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[24rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#F45C7B] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  Transform your digital presence with our robust web and app
                  solutions. From feature-rich websites to high-performing
                  mobile apps, we ensure seamless functionality and cutting-edge
                  design to achieve your business goals.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs3}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#507FD7] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  At WaveGenX AI Private Limited, we deliver tailored solutions
                  across industries. From enhancing patient care in healthcare
                  to empowering e-commerce and driving innovation in technology,
                  we cater to diverse business needs with precision.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs4}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>
        </div>
      </section>
      <BlogsSection />
      <section className="bg-[#F7F7F9]">
        <Testimonials />
      </section>
      <ContactForm />
    </>
  );
};

export default Home;
