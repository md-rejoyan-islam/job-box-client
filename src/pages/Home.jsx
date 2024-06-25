import hero1 from "../assets/hero-01.jpg";
import hero2 from "../assets/hero-02.jpg";
import hero3 from "../assets/hero-03.jpg";
import { BiSearchAlt } from "react-icons/bi";
import { gsap } from "gsap";
import Badge from "../components/reusable/Badge";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const keywords = [
    "Web Developer",
    "Web Designer",
    "Writer",
    "Fullstack",
    "Senior",
    "Team Lead",
    "Administration",
    "SQA",
    "Tester",
  ];

  useGSAP(() => {
    gsap
      .timeline()
      .from("#hero-title", { delay: 0.2, y: 50, opacity: 0, duration: 0.3 })
      .from("#hero-subtitle", { y: 50, opacity: 0, duration: 0.3 })
      .from("#search-container", { y: 50, opacity: 0, duration: 0.3 })
      .from("#search-button", {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2",
      })
      .from(".badge-container", { opacity: 0 })
      .from(".badge-btn", { opacity: 0, y: 50, stagger: 0.1 });

    const cards = gsap.utils.toArray(".statCard");

    gsap
      .timeline({ repeat: -1 })
      .to("#hero1", { opacity: 1, duration: 2 })
      .to("#hero1", { opacity: 0, display: "none", duration: 2, delay: 1 })
      .to("#hero2", { opacity: 1, duration: 2 })
      .to("#hero2", { opacity: 0, display: "none", duration: 2, delay: 1 })
      .to("#hero3", { opacity: 1, duration: 2 })
      .to("#hero3", { opacity: 0, display: "none", duration: 2, delay: 1 });

    const movement = (e) => {
      cards.forEach((card, index) => {
        const depth = 90;
        const moveX = (e.pageX - window.innerWidth / 2) / depth;
        const moveY = (e.pageY - window.innerHeight / 2) / depth;
        index++;
        gsap.to(card, { x: moveX * index, y: moveY * index });
      });
    };

    document.addEventListener("mousemove", movement);

    return () => {
      document.removeEventListener("mousemove", movement);
    };
  });

  return (
    <div className="min-h-screen ">
      <div className="max-w-2xl w-[80vw] h-[60vh] sm:h-[80vh] min-h-[420px] rounded-b-full absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden z-0">
        <img
          id="hero1"
          src={hero1}
          alt=""
          className="object-cover h-full w-full opacity-0"
        />
        <img
          id="hero2"
          src={hero2}
          alt=""
          className="object-cover h-full w-full opacity-0"
        />
        <img
          id="hero3"
          src={hero3}
          alt=""
          className="object-cover h-full w-full opacity-0"
        />
      </div>
      <div className="min-h-screen py-32 w-full flex  items-center z-10 relative">
        <div className="flex w-full lg:flex-row flex-col-reverse gap-y-20">
          <div className="lg:w-1/2 flex flex-col items-start">
            <div className="max-w-[600px] lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
              <h1
                id="hero-title"
                className="heroElement font-bold text-3xl sm:text-4xl  md:text-[55px] md:leading-[60px] lg:text-[65px]  lg:leading-[65px]  xl:text-7xl "
              >
                Find the perfect <br className="hidden lg:block" /> job for you
              </h1>
              <p id="hero-subtitle" className="mt-5 text-lg">
                Search your career opportunity through 12,800 jobs
              </p>
            </div>
            <div
              id="search-container"
              className="bg-white rounded-full p-3 flex w-full max-w-xl mx-auto lg:mx-0 overflow-hidden mt-5  shadow-lg"
            >
              <input
                className="flex-auto text-lg p-2 border-none outline-none focus:ring-0"
                type="text"
                name="search"
                id="search"
                placeholder="Job title or Keyword"
              />
              <button
                id="search-button"
                className="p-2 rounded-full bg-primary  h-14 w-14 grid place-items-center"
              >
                <BiSearchAlt size="23" color="white" />
              </button>
            </div>
            <div className="mt-16 max-w-[600px] lg:max-w-full mx-auto lg:mx-0">
              <h2 className="badge-container font-semibold">Popular Search</h2>
              <div className="max-w-xl  flex flex-wrap  gap-3">
                {keywords?.map((item) => (
                  <Badge key={item} className="badge-btn">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="flex relative flex-col gap-y-3 justify-between box-border   ">
            <div className="statCard rounded-3xl w-fit shadow-2xl p-4 sm:p-7   bg-white relative  lg:top-[-10%] left-[5%] lg:left-[80%]">
              <div>
                <span className="text-2xl font-bold">319 </span>
                <span>Job offers</span>
              </div>
              <p className="font-light text-gray-500">
                In Business Development
              </p>
            </div>
            <div className="statCard w-fit rounded-3xl shadow-2xl p-4 sm:p-7 bg-white relative lg:top-[-12%] left-[30%] sm:right-[-50%] sm:left-[56%] md:left-[60%]">
              <div>
                <span className="text-2xl font-bold">265 </span>
                <span>Job offers</span>
              </div>
              <p className="font-light text-gray-500">
                In Marketing & Communication
              </p>
            </div>
            <div className="statCard w-fit rounded-3xl shadow-2xl p-4 sm:p-7 bg-white relative lg:top-[-15%] left-[7%] sm:left-[12%] lg:left-[40%]">
              <div>
                <span className="text-2xl font-bold">324 </span>
                <span>Job offers</span>
              </div>
              <p className="font-light text-gray-500">In Project Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
