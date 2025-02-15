// all services
import web from "../assets/images/web-dev-vector.png";
export const services = [
  {
    title: "Website Development",
    image: web,
    shortDesc:
      "Building responsive, scalable, and modern websites tailored to your business needs.",
    technologies: ["React", "Angular", "Node", "Express", "MongoDB"],
    detailsPageImages: {
      first: require("../assets/images/services/webdevelopment1.jpg"),
      second: require("../assets/images/services/webdevelopment2.png"),
      third: require("../assets/images/services/webdevelopment3.png"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
              Create a Strong Online Presence with Our Tailored Web Solutions
            </h2>
            <p class="mb-10">
              Your website is more than just an online presence—it’s the face of your brand. At
              <span class="font-semibold">WaveGenX AI Private Limited</span>, we build websites that not only look great but also drive results. We take the time to understand your business goals and create a solution that works for you.
            </p>
  
            <h2 class="text-xl font-semibold mb-4">
              Our Website Development Offerings:
            </h2>
            <ul class="list-disc pl-6">
              <li class="mb-3">
                <span class="font-semibold">Custom Websites:</span> From the ground up, we design and develop websites tailored to your brand and audience.
              </li>
              <li class="mb-3">
                <span class="font-semibold">Responsive & Mobile-Friendly:</span> We ensure that your website looks and functions seamlessly on any device—mobile, tablet, or desktop.
              </li>
              <li class="mb-3">
                <span class="font-semibold">E-commerce Platforms:</span> Whether you’re selling products or services, we create secure and user-friendly online stores that turn visitors into loyal customers.
              </li>
              <li class="mb-3">
                <span class="font-semibold">SEO Optimized:</span> We build websites with SEO in mind, helping you increase visibility and rank higher in search engine results.
              </li>
              <li class="mb-3">
                <span class="font-semibold">Ongoing Support:</span> Our relationship doesn’t end with launch. We provide continuous support and updates to keep your website running smoothly.
              </li>
            </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
                  Our Development Process:
                </h2>
                <ul class="list-decimal pl-6 mb-6">
                  <li class="mb-3">
                    <span class="font-semibold">Discovery:</span> We start by learning about your business, your goals, and your challenges. Understanding your unique needs helps us craft the best possible solution.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Design & Build:</span> With a clear direction, we begin designing and developing your website, keeping you involved throughout to ensure we’re on the right track.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Testing & Refining:</span> Quality is key. We rigorously test every solution to ensure it works seamlessly and provides the best user experience possible.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Launch & Beyond:</span> Once your website is live, we continue to provide support to ensure smooth operation and ongoing success.
                  </li>
                </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Choose Us?</h2>
                <ul class="list-disc pl-6 mb-6">
                  <li class="mb-3">
                    <span class="font-semibold">Expert Team:</span> Our team is made up of experienced developers, designers, and AI specialists who are passionate about delivering top-notch solutions.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Tailored Solutions:</span> We work closely with you to understand your unique challenges and goals, providing solutions that fit your needs.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Cutting-Edge Technology:</span> We stay ahead of the curve by using the latest tools and techniques, ensuring your solutions are not only effective but future-proof.
                  </li>
                </ul>`,
    },
  },
  {
    title: "App Development",
    image: require("../assets/images/app-dev-vector.png"),
    shortDesc:
      "Creating intuitive and high-performing mobile apps for Android and iOS platforms.",
    technologies: ["Swift", "React Native", "Flutter", "Java", "Kotlin"],
    detailsPageImages: {
      first: require("../assets/images/services/appdevelopment1.jpg"),
      second: require("../assets/images/services/appdevelopment2.png"),
      third: require("../assets/images/services/appdevelopment3.png"),
    },
    html: {
      firstSection: ` <h2 class="text-xl font-semibold mb-4">
        Powering Your Mobile Experience
      </h2>
      <p class="mb-10">
        In a mobile-first world, having an app that is functional and user-friendly is essential. At
        <span class="font-semibold">WaveGenX AI Private Limited</span>, we specialize in creating apps that engage users and simplify your business operations.
      </p>
      
      <h2 class="text-xl font-semibold mb-4">Our App Development Expertise:</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3">
          <span class="font-semibold">Native & Cross-Platform Apps:</span> Whether you need a native app for performance or a cross-platform solution for broader reach, we’ve got you covered.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Enterprise Solutions:</span> We create mobile apps designed to streamline business processes, improve efficiency, and boost productivity.
        </li>
        <li class="mb-3">
          <span class="font-semibold">App Maintenance & Support:</span> Our commitment doesn’t end with launch. We offer continuous support and updates to keep your app running smoothly.
        </li>
        <li class="mb-3">
          <span class="font-semibold">User-Centric Design:</span> We focus on developing intuitive, easy-to-navigate apps that your users will love.
        </li>
      </ul>
  `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
    Our Development Process
  </h2>
  <ul class="list-decimal pl-6 mb-6">
    <li class="mb-3">
      <span class="font-semibold">Discovery:</span> We start by learning about your business, your goals, and your challenges. Understanding your unique needs helps us craft the best possible solution.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Design & Build:</span> With a clear direction, we begin designing and developing your app, keeping you involved throughout to ensure we’re on the right track.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Testing & Refining:</span> Quality is key. We rigorously test every solution to ensure it works seamlessly and provides the best user experience possible.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Launch & Beyond:</span> Once your app is live, we continue to provide support to ensure smooth operation and ongoing success.
    </li>
  </ul>
  `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
    Why Choose Us for App Development?
  </h2>
  <ul class="list-disc pl-6 mb-6">
    <li class="mb-3">
      <span class="font-semibold">Expert Team:</span> Our team is made up of experienced developers, designers, and AI specialists who are passionate about delivering top-notch solutions.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Tailored Solutions:</span> We work closely with you to understand your unique challenges and goals, providing solutions that fit your needs.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Cutting-Edge Technology:</span> We stay ahead of the curve by using the latest tools and techniques, ensuring your solutions are not only effective but future-proof.
    </li>
  </ul>
  `,
    },
  },
  {
    title: "UI UX Design",
    image: require("../assets/images/uiux-dev-vector.png"),
    shortDesc:
      "Designing user-friendly interfaces that enhance user experiences and engagement.",
    technologies: ["Figma", "Adobe XD", "Sketch", "Canva"],
    detailsPageImages: {
      first: require("../assets/images/services/uiux1.jpg"),
      second: require("../assets/images/services/uiux2.png"),
      third: require("../assets/images/services/uiux3.png"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
    Creating Experiences That Matter
  </h2>
  <p class="mb-10">
    A great product starts with great design. At
    <span class="font-semibold">WaveGenX AI Private Limited</span>, our UI/UX team crafts designs that aren’t just visually stunning but are also designed to maximize usability and engagement.
  </p>
  
  <h2 class="text-xl font-semibold mb-4">Our UI/UX Design Expertise:</h2>
  <ul class="list-disc pl-6">
    <li class="mb-3">
      <span class="font-semibold">User-Focused Approach:</span> We begin by understanding your audience to create designs that are meaningful and intuitive.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Interactive Prototypes:</span> Before development, we build prototypes so you can see exactly how the final product will function.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Usability Testing:</span> We rigorously test designs to ensure that every touchpoint is easy to use, improving user satisfaction and retention.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Brand Consistency:</span> Our designs align with your brand’s values, creating a unified experience across all platforms.
    </li>
  </ul>
  `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
    Our Design Process
  </h2>
  <ul class="list-decimal pl-6 mb-6">
    <li class="mb-3">
      <span class="font-semibold">Discovery:</span> We start by learning about your business, your goals, and your challenges. Understanding your unique needs helps us craft the best possible solution.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Design & Prototyping:</span> With a clear direction, we begin designing and prototyping your solution, keeping you involved throughout to ensure we’re on the right track.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Testing & Refining:</span> Quality is key. We rigorously test every solution to ensure it works seamlessly and provides the best user experience possible.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Launch & Beyond:</span> Once your design is implemented, we continue to provide support to ensure smooth operation and ongoing success.
    </li>
  </ul>
  `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
    Why Choose Us for UI/UX Design?
  </h2>
  <ul class="list-disc pl-6 mb-6">
    <li class="mb-3">
      <span class="font-semibold">Expert Team:</span> Our team is made up of experienced developers, designers, and AI specialists who are passionate about delivering top-notch solutions.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Tailored Solutions:</span> We work closely with you to understand your unique challenges and goals, providing solutions that fit your needs.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Cutting-Edge Technology:</span> We stay ahead of the curve by using the latest tools and techniques, ensuring your solutions are not only effective but future-proof.
    </li>
  </ul>
  `,
    },
  },
  {
    title: "Artificial Intelligence",
    image: require("../assets/images/ai-dev-vector.png"),
    shortDesc:
      "Developing secure and decentralized blockchain solutions for various industries.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Keras", "OpenCV"],
    detailsPageImages: {
      first: require("../assets/images/services/ai1.jpg"),
      second: require("../assets/images/services/ai2.jpg"),
      third: require("../assets/images/services/ai3.jpg"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
    Unlocking the Future with AI
  </h2>
  <p class="mb-10">
    AI is a powerful tool that can transform how you operate. At
    <span class="font-semibold">WaveGenX AI Private Limited</span>, we help you harness the power of Artificial Intelligence to automate tasks, gain insights, and improve decision-making.
  </p>
  
  <h2 class="text-xl font-semibold mb-4">Our AI Development Expertise:</h2>
  <ul class="list-disc pl-6">
    <li class="mb-3">
      <span class="font-semibold">Custom AI Solutions:</span> Whether it’s machine learning, natural language processing, or advanced analytics, we create AI models tailored to your business needs.
    </li>
    <li class="mb-3">
      <span class="font-semibold">AI for Automation:</span> From reducing manual tasks to increasing efficiency, our AI solutions help you automate complex business processes.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Data Insights:</span> We turn your data into actionable insights, helping you make smarter, more informed decisions.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Seamless Integration:</span> We integrate AI into your existing systems, ensuring a smooth transition and improved performance.
    </li>
  </ul>
  `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
    Our AI Development Process
  </h2>
  <ul class="list-decimal pl-6 mb-6">
    <li class="mb-3">
      <span class="font-semibold">Discovery:</span> We start by learning about your business, your goals, and your challenges. Understanding your unique needs helps us craft the best possible solution.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Design & Build:</span> With a clear direction, we begin designing and developing your AI solution, keeping you involved throughout to ensure we’re on the right track.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Testing & Refining:</span> Quality is key. We rigorously test every solution to ensure it works seamlessly and provides the best user experience possible.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Launch & Beyond:</span> Once your AI solution is live, we continue to provide support to ensure smooth operation and ongoing success.
    </li>
  </ul>
  `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
    Why Choose Us for AI Development?
  </h2>
  <ul class="list-disc pl-6 mb-6">
    <li class="mb-3">
      <span class="font-semibold">Expert Team:</span> Our team is made up of experienced developers, designers, and AI specialists who are passionate about delivering top-notch solutions.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Tailored Solutions:</span> We work closely with you to understand your unique challenges and goals, providing solutions that fit your needs.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Cutting-Edge Technology:</span> We stay ahead of the curve by using the latest tools and techniques, ensuring your solutions are not only effective but future-proof.
    </li>
  </ul>
  `,
    },
  },
];
