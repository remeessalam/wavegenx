import React, { lazy } from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vids/banner.mp4";
import {
  Ambulance,
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
import howWeBuildCover from "../assets/images/how-we-build.jpeg";
import whyWorkWithUs1 from "../assets/images/whyworkwithus1.png";
import whyWorkWithUs2 from "../assets/images/whyworkwithus2.png";
import whyWorkWithUs3 from "../assets/images/whyworkwithus3.png";
import whyWorkWithUs4 from "../assets/images/whyworkwithus4.png";
import LandingServices from "../components/landingPage/LandingServices";
import { ArrowScrollButton } from "../components/ArrowButtons";
import Portfolio from "../components/Portfolio";

const ContactForm = lazy(() => import("../components/ContactForm"));
const Testimonials = lazy(() => import("../components/Testimonials"));

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

const LandingPage = ({ page }) => {
  const isWeb = page === "web";
  return (
    <>
      <section id="banner" className="relative min-h-screen bg-black/50">
        <div className="pt-[13rem] pb-[5rem]">
          <div className="wrapper flex flex-col gap-7 justify-center h-full">
            <div
              data-aos="fade-up"
              className="flex items-center text-start self-start text-white px-3 py-2 rounded-full border border-white"
            >
              <CodeXml className="inline mr-2" />
              <span>{isWeb ? "Web Development" : "App Development"}</span>
            </div>
            <h1 data-aos="fade-up" className="heading text-gray-400">
              Elevating Your Business with{" "}
              <span className="gradient-text">
                {isWeb ? "Dynamic Web Solutions" : "Innovative App Solutions"}
              </span>
            </h1>
            <p data-aos="fade-up" className="text-white text-lg">
              {isWeb
                ? `We create high-performance, visually stunning websites that drive engagement and 
        enhance user experiences. Our solutions are designed to be responsive, secure, 
        and optimized for seamless interaction across all devices.`
                : `From concept to deployment, we build powerful mobile applications tailored to your 
        business needs. Whether it's iOS, Android, or cross-platform, we deliver intuitive, 
        feature-rich apps that captivate users and enhance digital experiences.`}
            </p>
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

      <ContactForm headline="Book A Free Consultation" />
      <section className="bg-[#F7F7F9]">
        <Testimonials />
      </section>
      <LandingServices isWeb={isWeb} />
      <Portfolio page={page} />
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
          How Our AI Solutions Drive Success
        </h2>
        <div
          data-aos="fade-up"
          className="wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-[3rem] mt-10"
        >
          {[
            {
              title: "Strategic Collaboration",
              desc: "We work closely with you to align our AI solutions with your business objectives, ensuring measurable impact and long-term success.",
              styles: "bg-[#ddb36f] lg:rotate-[-18deg] lg:translate-y-[8rem]",
            },
            {
              title: "Agile & Future-Ready",
              desc: "Our adaptive approach enables us to quickly respond to industry shifts, ensuring your AI solutions stay ahead of evolving trends.",
              styles: "bg-[#ddb36f] lg:rotate-[-10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Excellence in Execution",
              desc: "From ideation to deployment, we prioritize precision and innovation, delivering AI solutions that enhance efficiency and scalability.",
              styles: "bg-[#ddb36f]",
            },
            {
              title: "Client-Centric Approach",
              desc: "Your success is our priority. We tailor AI-driven strategies to optimize performance, enhance customer experience, and maximize ROI.",
              styles: "bg-[#ddb36f] lg:rotate-[10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Transparency & Reliability",
              desc: "We uphold integrity by maintaining clear communication, regular progress updates, and accountability in every phase of development.",
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
              <ArrowScrollButton to="contact">Let's Chat</ArrowScrollButton>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[4rem] wrapper space-y-3">
        <h2
          data-aos="fade-up"
          className="section-heading text-center md:mb-[2rem]"
        >
          Why Choose Us?
        </h2>
        <div className="flex flex-col gap-5">
          {[
            {
              title: "Expertise & Innovation",
              desc: "Our team blends creativity with cutting-edge technology to bring your ideas to life. With a client-first approach, we ensure every project meets your unique goals, delivering impactful and lasting solutions.",
              bgColor: "bg-[#c82b93]",
              imgSrc: whyWorkWithUs1,
            },
            {
              title: "Comprehensive Digital Solutions",
              desc: "From web and app development to UI/UX design, AI, and blockchain solutions, we deliver scalable, future-ready products tailored to your business needs, ensuring innovation at every step.",
              bgColor: "bg-[#236a99]",
              imgSrc: whyWorkWithUs2,
            },
            {
              title: "Seamless Performance & Design",
              desc: "We build high-performance, feature-rich websites and mobile apps designed for superior user experiences. Our focus on functionality and aesthetics ensures a seamless digital presence.",
              bgColor: "bg-[#ddb36f]",
              imgSrc: whyWorkWithUs3,
            },
            {
              title: "Tailored Solutions Across Industries",
              desc: "We cater to diverse industries, from Healthcare and E-commerce to Finance and Tech, delivering customized solutions that drive growth, efficiency, and digital transformation.",
              bgColor: "bg-[#507FD7]",
              imgSrc: whyWorkWithUs4,
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`${item.bgColor} min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden`}
            >
              <div className="flex flex-col md:w-8/12 lg:w-9/12">
                <div className="md:px-[2.5rem]">
                  <p className="md:text-lg text-white font-semibold">
                    {item.desc}
                  </p>
                  <Quote
                    className="size-10 fill-white/20 self-end mt-3"
                    strokeWidth={0}
                  />
                </div>
              </div>
              <img
                src={item.imgSrc}
                alt={item.title}
                className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[24rem] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <ContactForm id="contact" />
    </>
  );
};

export default LandingPage;
