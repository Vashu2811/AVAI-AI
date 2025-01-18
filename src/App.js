


import React, { useState } from "react";
import {
  Menu,
  Scissors,
  Stethoscope,
  UtensilsCrossed,
  Globe2,
  Building2,
  Shield,
  Mic,
  User,
  Zap,
  MessageSquare,
  Target,
  Phone,
  FunctionSquare as Function,
  Video,
  Server,
  Languages,
  Globe,
} from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("inbound");
  const features2 = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cb43b09ac2dd4cf13415c5f406806cb5ec7247b03b46dd01c7565d69e3acd41?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749",
      text: "NO hideen costs"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cb43b09ac2dd4cf13415c5f406806cb5ec7247b03b46dd01c7565d69e3acd41?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749",
      text: "Bring your own API keys"
    }
  ];
  
  const buttons = [
    {
      text: "Contact Sales",
      variant: "primary",
      href: "#contact",
      ariaLabel: "Contact our sales team"
    },
    {
      text: "Get $10 free credit",
      variant: "secondary",
      href: "#credit",
      ariaLabel: "Get your free credit"
    }
  ];
  
  function PricingFeature({ icon, text }) {
    return (
      <>
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <div className="grow shrink self-stretch my-auto">{text}</div>
      </>
    );
  }
  
  function PricingButton({ text, variant, href, ariaLabel }) {
    const baseStyles = "flex gap-3 px-4 py-3 rounded-xl";
    const variantStyles = {
      primary: "bg-purple-800",
      secondary: "border border-white border-solid px-5"
    };
  
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]}`}
        role="button"
        aria-label={ariaLabel}
        tabIndex="0"
      >
        <div className="grow">{text}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7dc83a91bbc886806423824e38a59f120a35e0019762fc6462a5293a49e1eb4?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
          alt=""
          className="object-contain shrink-0 my-auto aspect-[0.58] w-[7px]"
        />
      </a>
    );
  }

  const tabs = [
    { id: "inbound", label: "Inbound calls" },
    { id: "outbound", label: "Outbound calls" },
    { id: "voice-products", label: "Voice products" },
    { id: "voice-lot", label: "Voice lot" },
  ];

  const services = [
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Barbershop",
      description: "Availability, bookings, inquiries",
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Dentist Office",
      description: "Schedule appointments, patient FAQs",
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: "Restaurant",
      description: "Reservations, menu inquiries",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "SaaS Website",
      description: "Support, product information, troubleshooting",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Realtor Office",
      description: "Property inquiries, viewings",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Insurance Companies",
      description: "Claims, policy help, support",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const testimonials = [
    {
      text: "The @Aiva_Ai team were an early partner to Grog and have a great quality of product. Definitely check them out.",
      author: "Mark Heaps",
      role: "Chief Evangelist, Grog",
      features: [],
    },
    {
      text: "@Aiva_Ai thank you for making my end to end journey easier by:",
      author: "Mark Heaps",
      role: "Chief Evangelist, Grog",
      features: [
        "1. Optimizing streaming and colocating servers that shave off every possible millisecond of latency",
        "2. Customizing by allowing to connect to WebRTC stream through Web, iOS and Python clients",
        "3. Easy Scaling",
      ],
    },
    {
      text: "I used Aiva to build a Shopify app to help recover abandonment checkouts and it made the entire process extremely simple. If you've tried to build a voice system before you know you need to connect a bunch of APIs and then still have to face the latency issue and make it sound natural, specifically when the speaker is cut off, etc. ",
      author: "Mark Heaps",
      role: "Chief Evangelist, Grog",
      features: [],
    },
    {
      text: "These guys care about building something great which is awesome to see! They even went out of their way to open a direct line of communication for support and feedback. Keep killing it Jordan, Niki, and the Aiva team!",
      author: "Mark Heaps",
      role: "Chief Evangelist, Grog",
      features: [],
    },
  ];
  const features = [
    {
      icon: Zap,
      title: "Turbo latency optimizations",
      description:
        "Optimized GPU inference, intelligent caching, low-latency audio streaming.",
    },
    {
      icon: MessageSquare,
      title: "Interruptions",
      description:
        "A person knows when to stop speaking, your voicebot should too.",
    },
    {
      icon: Target,
      title: "Proprietary endpointing model",
      description:
        "With great speed comes great responsibility, your users shouldn't be interrupted when they pause.",
    },
    {
      icon: Phone,
      title: "Scale to 1M+ concurrent calls",
      description:
        "Carefully designed Kubernetes cluster, with scalability, and high availability built-in.",
    },
    {
      icon: Function,
      title: "Function calling",
      description:
        "Give your voicebot superpowers-booking appointments, data lookup, form-filling, and so much more.",
    },
    {
      icon: Video,
      title: "WebRTC streaming",
      description:
        "Same protocol used by Google Meets and Microsoft Teams for the lowest latency and highest fault tolerance.",
    },
    {
      icon: Server,
      title: "Onprem provider deployments",
      description:
        "Avoid the latency spikes and unreliability of shared infrastructure.",
    },
    {
      icon: Languages,
      title: "Multilingual support",
      description:
        "Create voice agents in your users' tongues-English, Spanish, German, Hindi, Portuguese, and 100+ others.",
    },
    {
      icon: Globe,
      title: "Private internet backbone",
      description:
        "Avoid network congestion on the public internet for your users around the world.",
    },
  ];
  const codeSnippet = `import Aiva from "@Aiva-ai/web";
import { useState, useEffect } from "react";

export const Aiva = new Aiva("your-public-token"); // Get Public Token from Dashboard > Accounts Page

function AivaAssistant() {
  const [callStatus, setCallStatus] = useState("inactive");
  const start = async () => {
    setCallStatus("loading");
    const response = Aiva.start("your-assistant-id");
  };
  const stop = () => {
    setCallStatus("loading");
    Aiva.stop();
  };
  useEffect(() => {
    Aiva.on("call-start", () => setCallStatus("active"));
    Aiva.on("call-end", () => setCallStatus("inactive"));
    
    return () => Aiva.removeAllListeners();
  }, [])
  return (
    <div>
      {callStatus === "inactive" ? <button onClick={start}>Start</button> : null}
      {callStatus === "loading" ? <i>Loading...</i> : null}
      {callStatus === "active" ? <button onClick={stop}>Stop</button> : null}
    </div>
  );
}`;

  function FeatureCard({ icon: Icon, title, description }) {
    return (
      <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm ">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 " />
        <div className="relative p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-800/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
              {title}
            </h3>
          </div>
          <p className="text-zinc-400 leading-relaxed">{description}</p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform translate-y-px group-hover:translate-y-0 transition-transform duration-300" />
      </div>
    );
  }

  return (

    <div>
      
<div className="bg-[#000000]  font-montserratAlternates">
      <div className=" min-h-screen  text-white relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("./assest/background.png"), url("./assest/bg-color.png")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        />

        <nav className="relative z-10 px-6 py-4 bg-transparent flex items-center justify-between">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="hidden md:flex space-x-8 bg-[#b5a0cd7a] p-4 rounded-xl">
              <div className="text-white cursor-pointer hover:text-gray-300">
                Dashboards
              </div>
              <div className="text-white cursor-pointer hover:text-gray-300">
                Careers
              </div>
              <div className="text-white cursor-pointer hover:text-gray-300">
                Affiliates
              </div>
              <div className="text-white cursor-pointer hover:text-gray-300">
                Docs
              </div>
              <div className="text-white cursor-pointer hover:text-gray-300">
                Pricing
              </div>
              <div className="text-white cursor-pointer hover:text-gray-300">
                Security
              </div>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-zinc-800 p-4 rounded-xl mt-4 space-y-4 text-center">
              <div className="text-white cursor-pointer hover:text-gray-300">
                Dashboards
              </div>
              <div className="text-white cursor-pointer hover:text-gray-300">
                Careers
              </div>
              <div className="text-white cursor-pointer hover:text-gray-300">
                Affiliates
              </div>
              <div className="text-white cursor-pointer hover:text-gray-300">
                Docs
              </div>
              <div className="text-white cursor-pointer hover:text-gray-300">
                Pricing
              </div>
              <div className="text-white cursor-pointer hover:text-gray-300">
                Security
              </div>
            </div>
          )}
        </nav>

        <main className="relative z-10 px-6 pt-20 pb-32">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-b from-white to-[#592393] bg-clip-text text-transparent">
              Voice AI for developers
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Aiva lets developers build, test and deploy voice agents in
              minutes rather than months.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-semibold transition-colors">
                Try for free
              </button>
              <button className="px-8 py-4 border-2 border-purple-500  bg-gray-800 hover:bg-gray-700 rounded-lg text-lg font-semibold transition-colors">
                Get in touch
              </button>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="w-28 h-28 bg-purple-900/40 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(128,0,255,0.5)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-14 h-14 text-purple-400"
              >
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3s-3 1.34-3 3v6c0 1.66 1.34 3 3 3zm4.5-3c0 2.48-2.02 4.5-4.5 4.5S7.5 13.48 7.5 11H6c0 3.06 2.44 5.57 5.5 5.93V20h-3v2h8v-2h-3v-3.07c3.06-.36 5.5-2.87 5.5-5.93h-1.5z" />
              </svg>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="px-6 py-3 border-2 border-purple-500  bg-gray-800 shadow-[0_0_30px_rgba(128,0,255,0.5)]   hover:bg-gray-700 rounded-lg font-medium transition-colors">
              Give it a try!
            </button>
          </div>
        </main>
      </div>
      <div></div>

      <div className="bg-[#000000] p-2">
        <p className="text-center text-[#736A7D] text-lg mb-8">
          Trusted by companies big and small
        </p>

        <div className="flex items-center justify-center">
          <img
            className="max-w-full h-auto"
            src="./assest/logos-img.png"
            alt="Company Logos"
          />
        </div>
      </div>

      <div
        className="bg-[#1E1E1E]"
        style={{
          backgroundImage: `url("./assest/Groupimg.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className=" relative min-h-screen  flex items-center justify-center px-4">
          <div className="relative z-10 max-w-4xl mx-auto text-center p-1">
            <h3 className="text-6xl font-bold  bg-gradient-to-b from-white to-[#592393] bg-clip-text text-transparent">
              Solutions for everyting.
            </h3>
            <p className="text-sm text-gray-400  max-w-3xl mx-auto p-3">
              Customer support, front desk, outbound sales, lead generation,
              telehealth, food ordering, transportation logistics, employee
              training, roleplay, or whatever else you want to build.
            </p>
          </div>
        </section>
      </div>

      <div className="min-h-screen  bg-[#0A0818] text-white p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl flex justify-center items-center mx-auto mb-12">
          <div className="inline-flex bg-[#13101F] rounded-2xl p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#1E1934] text-white"
                    : "text-[#6C6B7F] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#13101F] rounded-[24px] p-7 transition-all duration-300 hover:bg-[#15122A] cursor-pointer border border-[#533F64]"
            >
              <div className="bg-[#1E1934] w-9 h-9 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#221F3C]">
                {service.icon}
              </div>
              <h3 className="text-[17px] font-semibold mb-1.5">
                {service.title}
              </h3>
              <p className="text-sm text-[#6C6B7F] font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-[200px] shadow-[0_0_30px_rgba(128,0,255,0.5)] ">
          <img src="./assest/Group35.png" className="w-[75%]" alt="" />
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-[40px] text-center font-bold  bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#532189] bg-clip-text text-transparent">
            We’re making voice AI’s as simple, reliable, and
          </h1>
          <h1 className="text-[40px] text-center font-bold bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#532189] bg-clip-text text-transparent">
            accessible as any other API in your stack.
          </h1>
        </div>
        <div className="flex justify-center items-center mt-[100px] gap-5 ">
          <div className="group bg-[#13101F] rounded-[26px] p-7 transition-all duration-300 hover:bg-[#15122A] cursor-pointer border border-[#533F64]">
            <div className="bg-[#1E1934] w-9 h-9 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#221F3C]">
              <Mic className="w-5 h-5 text-[#EABFFF]" />
            </div>
            <h3 className="text-[19px] pt-5 text-white font-semibold mb-1.5">
              The status quo
            </h3>
            <h5 className="text-[13px]  text-white  mb-1.5">
              Months to work to production, continued DevOps and R&D investment.
            </h5>
            <div className=" flex gap-5 text-sm text-[#6C6B7F] pt-3 font-medium">
              <div>
                <p>Response time</p>
                <p className="pt-2">2,500+ms</p>
              </div>
              <div>
                <p>Live by</p>
                <p className="pt-2">September?</p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url("./assest/Rectangle12.png")`,
              backgroundSize: "cover",
            }}
            className="group   rounded-[26px] p-7 transition-all duration-300 hover:bg-[#15122A] cursor-pointer border border-[#533F64]"
          >
            <div className="bg-[#4F286A] border-2 border-[#B684CF] w-9 h-9 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#221F3C]">
              <p className="font-extrabold text-[#D9A8FF] ">A</p>
            </div>
            <h3 className="text-[19px] pt-5 text-white font-semibold mb-1.5">
              Using AIVA
            </h3>
            <h5 className="text-[13px]  text-white  mb-1.5">
              In production tonight, world-class pushing DevOps and R&D.
            </h5>
            <div className=" flex gap-5 text-sm text-[#D5C8DC] pt-3 font-medium">
              <div>
                <p>Response time</p>
                <p className="text-[#D9A8FF] pt-2">500 ms</p>
              </div>
              <div>
                <p>Live by</p>
                <p className="text-[#D9A8FF] pt-2">Tonight</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-[200px] shadow-[0_0_30px_rgba(128,0,255,0.5)] ">
          <img src="./assest/Group35.png" className="w-[75%]" alt="" />
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("./assest/Ellipse3.png")`,
          backgroundSize: "cover",
        }}
        className="min-h-screen  text-white p-4 md:p-8 lg:p-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What people are saying about us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto ">
          {testimonials.map((testimonial, index) => (
            <div
              style={{
                backgroundImage: `url("./assest/Rectangle5.png")`,
                backgroundSize: "cover",
              }}
              key={index}
              className=" rounded-3xl p-6 flex flex-col  border border-[#545454]"
            >
              <p className="text-[#D5C8DC] text-sm mb-4 flex-grow">
                {testimonial.text}
              </p>

              {testimonial.features.length > 0 && (
                <ul className="space-y-3 mb-4">
                  {testimonial.features.map((feature, idx) => (
                    <li key={idx} className="text-[#D5C8DC] text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex items-center mt-4">
                <div className="w-10 h-10 bg-[#1E1934] rounded-full flex items-center justify-center mr-3">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-[#6C6B7F] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-[200px]">
          <img src="./assest/Group24.png" className="w-[75%]" alt="" />
        </div>
      </div>
      <div className="min-h-screen  text-white p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Everything built-in to make your voice Bot feel as
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-purple-400">
              natural, responsive and reliable as a person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        onContextMenu={(e) => e.preventDefault()}
        style={{ userSelect: "none" }}
      >
        <img
          src="./assest/scnsjncsnj.png"
          className="w-[100%]"
          alt=""
          draggable="false"
        />
      </div>
      <section className="bg-[#000000] relative min-h-screen   items-center justify-center px-4">
        <div className="bg-[#000000] px-5 md:px-[100px] lg:px-[200px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-[50px]">
          <div className="group rounded-[24px] p-7 transition-all duration-300 hover:bg-[#15122A] cursor-pointer border border-[#3E3848]">
            <div className="flex rounded-lg justify-around mb-5 transition-all duration-300">
              <img
                src="./assest/gpt.png"
                className="w-16"
                alt=""
                draggable="false"
              />
              <img
                src="./assest/aiai.png"
                className="w-16"
                alt=""
                draggable="false"
              />
            </div>
            <h3 className="text-[17px] mt-10 text-[#FFFFFF] font-semibold mb-1.5">
              Bring your own models.
            </h3>
            <p className="text-[15px] text-[#D5C8DC] font-medium">
              Or, use any platform we support built-in: OpenAI, Groq, Mistral,
              OpenRouter, Together, Anyscale.
            </p>
          </div>

          <div className="group rounded-[24px] p-7 transition-all duration-300 hover:bg-[#15122A] cursor-pointer border border-[#3E3848]">
            <div className="flex rounded-lg justify-around mb-5 transition-all duration-300">
              <img
                src="./assest/gpt.png"
                className="w-16"
                alt=""
                draggable="false"
              />
            </div>
            <h3 className="text-[17px] mt-10 text-[#FFFFFF] font-semibold mb-1.5">
              Bring your own models.
            </h3>
            <p className="text-[15px] text-[#D5C8DC] font-medium">
              Or, use any platform we support built-in: OpenAI, Groq, Mistral,
              OpenRouter, Together, Anyscale.
            </p>
          </div>

          <div className="group rounded-[24px] p-7 transition-all duration-300 hover:bg-[#15122A] cursor-pointer border border-[#3E3848]">
            <div className="flex rounded-lg justify-around mb-5 transition-all duration-300">
              <img
                src="./assest/node.png"
                className="w-16"
                alt=""
                draggable="false"
              />
              <img
                src="./assest/pythone.png"
                className="w-16"
                alt=""
                draggable="false"
              />
            </div>
            <h3 className="text-[17px] mt-10 text-[#FFFFFF] font-semibold mb-1.5">
              Bring your own models.
            </h3>
            <p className="text-[15px] text-[#D5C8DC] font-medium">
              Or, use any platform we support built-in: OpenAI, Groq, Mistral,
              OpenRouter, Together, Anyscale.
            </p>
          </div>

          <div className="group rounded-[24px] p-7 transition-all duration-300 hover:bg-[#15122A] cursor-pointer border border-[#3E3848]">
            <div className="flex rounded-lg justify-around mb-5 transition-all duration-300">
              <img
                src="./assest/react.png"
                className="w-16"
                alt=""
                draggable="false"
              />
              <img
                src="./assest/aiai.png"
                className="w-16"
                alt=""
                draggable="false"
              />
            </div>
            <h3 className="text-[17px] mt-10 text-[#FFFFFF] font-semibold mb-1.5">
              Bring your own models.
            </h3>
            <p className="text-[15px] text-[#D5C8DC] font-medium">
              Or, use any platform we support built-in: OpenAI, Groq, Mistral,
              OpenRouter, Together, Anyscale.
            </p>
          </div>
        </div>
      </section>

      <div>
        <section className="bg-[#000000] relative min-h-screen   items-center justify-center px-4">
          <div className="relative z-10 max-w-4xl mx-auto text-center p-1">
            <h1 className="text-[38px] text-center font-bold  bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#532189] bg-clip-text text-transparent">
              Let’s get you integrated right now.
            </h1>
            <p className="text-[14px] text-gray-400  max-w-3xl mx-auto p-3">
              Here's the code to get you started.
            </p>
          </div>

          <div className="min-h-screen  text-white p-4 md:p-8">
            <div
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: "none" }}
            >
              <img
                src="./assest/Group-4333.png"
                className="w-[100%]"
                alt=""
                draggable="false"
              />
            </div>
            <div className="relative top-[-170px] rounded-2xl max-w-5xl mx-auto bg-black">
              <div className="rounded-lg shadow-xl overflow-hidden p-2 ">
                <div className="flex items-center justify-center space-x-6 py-4">
                  <button className="px-4 py-2 bg-white text-black font-medium rounded-full shadow-sm">
                    ReactJS
                  </button>
                  <span className="text-zinc-300">|</span>
                  <a
                    href="#"
                    className="text-white hover:text-purple-400 transition"
                  >
                    Node.js
                  </a>
                  <span className="text-zinc-300">|</span>
                  <a
                    href="#"
                    className="text-white hover:text-purple-400 transition"
                  >
                    Serverless
                  </a>
                  <span className="text-zinc-300">|</span>
                  <a
                    href="#"
                    className="text-white hover:text-purple-400 transition"
                  >
                    Python
                  </a>
                  <span className="text-zinc-300">|</span>
                  <a
                    href="#"
                    className="text-white hover:text-purple-400 transition"
                  >
                    PHP
                  </a>
                  <span className="text-zinc-300">|</span>
                  <a
                    href="#"
                    className="text-white hover:text-purple-400 transition"
                  >
                    Ruby
                  </a>
                  <span className="text-zinc-300">|</span>
                  <a
                    href="#"
                    className="text-white hover:text-purple-400 transition"
                  >
                    Go
                  </a>
                </div>
                <div className="p-4 rounded-2xl overflow-x-auto border border-[#3E3848]">
                  <pre className="font-mono text-sm leading-relaxed">
                    <code>{codeSnippet}</code>
                  </pre>
                </div>

                <div className="flex justify-between rounded-lg  border border-[#3E3848] p-2">
                  <div className="flex justify-start bg-[#1C1B1B]  rounded-md">
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-md transition-colors">
                      <span>View on Github</span>
                    </button>
                    <span className="text-zinc-300 flex items-center space-x-2 px-4 py-2 rounded-md transition-colors">
                      |
                    </span>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-md transition-colors">
                      <span>Download Zip</span>
                    </button>
                  </div>
                  <button className="flex justify-end space-x-2 px-4 py-2 bg-[#1C1B1B] rounded-md transition-colors  ">
                    <span>copy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        style={{
          backgroundImage: `url("./assest/background55.png")`,
          backgroundSize: "cover",
        }}
      >
        <div className="relative text-center py-16 px-6 md:px-12 lg:px-24">
          <div className="relative z-10 max-w-4xl mx-auto mt-[100px]">
            <h1 className="text-[38px]  font-extrabold  leading-tight  bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#532189] bg-clip-text text-transparent">
              We’re an <span className="text-purple-400">engineer-led</span>
              <span className="text-[#C4B3D6]"> team</span> <br />
              making computers talk like people.
            </h1>
            <p className="mt-[60px] text-[14px] text-zinc-300  pr-8 pl-8">
              We’ve been talking for thousands of years, and so we believe voice
              is the best interface. We’re making it easy for anyone to add
              human-level conversational voice experiences anywhere.
            </p>
            <div className="flex justify-center mt-[60px]">
              <button className="px-6 py-3 bg-[#D7CAE8] hover:bg-purple-700 text-[#191A1B] font-medium rounded-full transition flex items-center space-x-2">
                <span>See all open roles</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="text-[#D5C8DC] mt-[100px] ">
              <p className="text-left ml-[110px]">Find us in the news</p>

              <div className="flex justify-center gap-8">
                <div className="bg-black rounded-xl shadow-md overflow-hidden max-w-xs  border border-[#3E3848]">
                  <div className="relative pt-6 pr-6 pl-6">
                    <img
                      src="./assest/phots1.png"
                      alt="Card"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-white text-[20px] text-left font-semibold leading-relaxed">
                      YC-backed productivity app Superpowered pivots to become a
                      voice API platform for bots
                    </p>
                    <div className="mt-4 text-[26px] text-[#D5C8DC] text-left font-bold">
                        LOGO
                    </div>
                  </div>
                </div>
                <div className="bg-black rounded-xl shadow-md overflow-hidden max-w-xs  border border-[#3E3848]">
                  <div className="relative pt-6 pr-6 pl-6">
                    <img
                      src="./assest/photos2.png"
                      alt="Card"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-white text-[20px] text-left font-semibold leading-relaxed">
                      YC-backed productivity app Superpowered pivots to become a
                      voice API platform for bots
                    </p>
                    <div className="mt-4 text-[26px] text-[#D5C8DC] text-left font-bold">
                        LOGO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="flex flex-col text-base font-semibold text-center text-white rounded-none" aria-label="Pricing information">
      <div className="flex relative flex-col justify-center items-center px-20 py-96 w-full min-h-[1138px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4878473120da93894210b48d8fb697ec24f914eb649d4c2f94d4e2e76fa4fcc5?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
          alt="Pricing background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mb-0 ml-3.5 max-w-full w-[580px] max-md:mb-2.5 bg-gradient-to-br from-[] to-[]">
          <h1 className="text-4xl max-md:max-w-full">
            <span className="font-bold">AIVA costs </span>
            <span className="font-bold text-purple-800">$0.05 per minute.</span>
          </h1>
          <p className="mt-6 text-lg leading-7 text-slate-300 max-md:mr-1 max-md:max-w-full">
            Bring your own keys for the underlying providers like Elevenlabs
            <br />
            and OpenAI, or we can pass through the costs to you.
          </p>
          <div className="flex gap-4 items-center self-center px-4 py-3 mt-12 max-w-full rounded-xl bg-stone-900 w-[461px] max-md:mt-10">
            {features2.map((feature, index) => (
              <React.Fragment key={index}>
                <PricingFeature icon={feature.icon} text={feature.text} />
                {index < features2.length - 1 && (
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b2688fe20af44dbeb671a667d3b92c2ba6e4fc7529ee6a4544cbd946075b94d?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
                    alt=""
                    className="object-contain shrink-0 self-stretch w-px aspect-[0.04]"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex gap-3 self-center mt-12 max-w-full font-medium w-[364px] max-md:mt-10">
            {buttons.map((button, index) => (
              <PricingButton
                key={index}
                text={button.text}
                variant={button.variant}
                href={button.href}
                ariaLabel={button.ariaLabel}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
 
  );
}

export default App;
