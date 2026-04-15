import ReadMore from "../components/ReadText";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const products = [
  {
    id: 1,
    name: "E-commmerce ",
    gitHub: "https://github.com/ahmed-codex/ecommerce-vite-react.git",
    href: "https://ecommerce-vite-react-mu.vercel.app/",
    imageSrc: [
      "/heroPage.jpeg",
      "/home.jpeg",
      "/cart.jpeg",
      "/connect.jpeg",
      "/about.jpeg",
    ],

    imageAlt: "Front of men's Basic Tee in black.",
    description:
      "A modern E-Commerce web application built with React and Vite. It features product browsing with category filtering, search functionality, product details pages, and a fully functional shopping cart and wishlist system. The app provides smooth navigation using React Router and is designed for high performance and a clean, user-friendly experience, powered by a mock API",
  },
  {
    id: 2,
    name: "Prayer Time ",
    gitHub: "https://github.com/ahmed-codex/prayer-time-react.git",
    href: "https://prayer-time-react.vercel.app/",
    imageSrc: ["/Prayer.png"],
    imageAlt: "Front of men's Basic Tee in black.",
    description:
      "A responsive web application that displays daily Islamic prayer times based on the selected Egyptian governorate. The app fetches real-time data from an external API and presents it in a clean, modern UI",
  },
];

const Project = () => {
  return (
    <div id="projects" className="h-auto pt-16 md:pt-10 md:mb-0">
      <div className="mx-auto flex items-center justify-center flex-col  bg-black/20 sm:px-6 py-5 md:py-12   lg:px-8">
        <h2 className="text-4xl capitalize font-bold tracking-wide text-gray-200">
          Projects
        </h2>

        <div className="my-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-slate-900 shadow-[0_0_20px_rgba(59,130,246,0.7)] relative w-60 md:w-70 border rounded-2xl  p-3"
            >
              <div>
                <img
                  alt={product.imageSrc[0]}
                  src={product.imageSrc[0]}
                  id={product.id}
                  className=" w-full rounded-md bg-gray-200 mb-2 object-contain  transition-all duration-300 h-25 md:h-50"
                />
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  slidesPerView={3}
                  className="mySwiper"
                >
                  <div className="grid grid-cols-3  gap-2">
                    {product.imageSrc.map((item, index) => (
                      <SwiperSlide>
                        <img
                          alt={item}
                          src={item}
                          className=" w-16 md:w-18 rounded-md  bg-gray-200 cursor-pointer object-cover transition-all duration-300 h-15 md:h-15"
                          onClick={() =>
                            (document.getElementById(product.id).src = item)
                          }
                        />
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>

              <div className="mt-4 flex flex-col gap-2 justify-between">
                <div>
                  <h3 className="text-lg font-bold capitalize text-gray-300">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0  pointer-events-none"
                    />
                    {product.name}
                  </h3>
                  <div className="text-sm font-normal text-gray-400">
                    <ReadMore text={product.description} />
                  </div>
                </div>

                <div className="flex items-center capitalize justify-between">
                  <a
                    href={product.href}
                    target="_blank"
                    className="cursor-pointer text-md text-blue-400"
                  >
                    LiveDemo
                  </a>
                  <a
                    href={product.gitHub}
                    target="_blank"
                    className="cursor-pointer text-md text-blue-400"
                  >
                    gitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Project;
