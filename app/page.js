import Image from "next/image";

export default function Home() {
  const recommendedShops = [
    { src: '/shopimg/true-fit.jpg', name: 'Truefitt & Hill Kolkata', description: 'Lorem ipsum dolor sit amet' },
    { src: '/shopimg/sunflower.jpg', name: 'Sunflower Kolkata', description: 'Lorem ipsum dolor sit amet' },
    { src: '/shopimg/pink-tree.jpg', name: 'Pink Tree', description: 'Lorem ipsum dolor acoelit.' },
    { src: '/shopimg/PonyUp Salon.jpg', name: 'PonyUp Salon', description: 'Lorem ipsum dolor sit amet.' },
    { src: '/shopimg/Designer 4.png', name: 'SHOP NAME', description: 'Lorem ipsum dolor elit.' },
    { src: '/shopimg/Designer 1.png', name: 'SHOP NAME', description: 'Lorem ipsum dolor sit g elit.' },
    { src: '/shopimg/Designer 2.png', name: 'SHOP NAME', description: 'Lorem ipsum dolor sit g elit.' },
    { src: '/shopimg/Designer.png', name: 'SHOP NAME', description: 'Lorem ipsum dolor sit g elit.' },
  ];

  return (
    <div>
      <div className="border border-gray-200 my-2" ></div>
      <div className="py-4 px-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center border border-gray-400 rounded-md px-2 py-2">
            <div className="pr-2">
              <img src="/svgs/location.svg" alt="Location Icon" className="w-5 h-5" />
            </div>
            <input
              type="text"
              id="location"
              className="outline-none text-sm"
              placeholder="Enter Location"
            />
          </div>
          <div className="flex items-center border border-gray-400 rounded-md px-2 py-2">
            <div className="pr-2">
              <img src="/svgs/search.svg" alt="Search Icon" className="w-5 h-5" />
            </div>
            <input
              type="text"
              id="search"
              className="outline-none text-sm"
              placeholder="Search Services"
            />
          </div>
        </div>
      </div>
      <div className="bannerContainer relative w-full overflow-hidden bg-gray-100 my-14">
        <div className="frame flex items-center relative w-full max-w-4xl mx-auto">
          {/* Left Arrow */}
          <div className="ArrBox left cursor-pointer">
            <img src="/svgs/left arrow.svg" alt="Left Arrow" className="h-8 w-8" />
          </div>

          {/* Image Slider */}
          <div className="imgSlider flex w-full overflow-hidden">
            <div className="slideimg min-w-full">
              <img
                className="img w-full object-cover"
                src="/slide-img/Design 1.jpeg"
                alt="Design 1"
              />
            </div>
            <div className="slideimg min-w-full">
              <img
                className="img w-full object-cover"
                src="/slide-img/Design 2.3.jpg"
                alt="Design 2"
              />
            </div>
            <div className="slideimg min-w-full">
              <img
                className="img w-full object-cover"
                src="/slide-img/Design 3.1.jpg"
                alt="Design 3"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <div className="ArrBox right cursor-pointer">
            <img src="/svgs/right arrow.svg" alt="Right Arrow" className="h-8 w-8" />
          </div>

          {/* Dots for Navigation */}
          <div className="dots absolute bottom-4 flex w-full justify-center space-x-2">
            <span className="h-3 w-3 bg-gray-500 rounded-full"></span>
            <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
            <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="main-content mt-6">
        <h2 className="headline text-2xl font-semibold pl-6">Book Services</h2>
        <div className="wrapper-container flex justify-center items-center mt-3 px-8">
          <div className="wrapper max-w-5xl w-full relative">
            <div
              id="left"
              className="card-arrow arrow-left absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white shadow-md h-12 w-12 flex items-center justify-center rounded-full cursor-pointer"
            >
              <Image src="/svgs/left-arrow.svg" alt="Left Arrow" width={20} height={20} draggable="false" />
            </div>
            <ul className="carousel grid grid-flow-col auto-cols-[calc(100%/5-12px)] gap-4 overflow-hidden scroll-smooth">
              {[
                { src: '/svgs/hair.svg', title: 'HAIRCUT', description: 'Lorem ipsum dolor sit amet' },
                { src: '/svgs/hotshave.svg', title: 'HOT SHAVE', description: 'Lorem ipsum dolor sit amet' },
                { src: '/svgs/mustache-trim.svg', title: 'BEARD TRIM', description: 'Lorem ipsum dolor acoelit.' },
                { src: '/svgs/face-mask.svg', title: 'FACE MASK', description: 'Lorem ipsum dolor sit amet.' },
                { src: '/svgs/hair-color.svg', title: 'HAIR COLOR', description: 'Lorem ipsum dolor elit.' },
              ].map((service, index) => (
                <li
                  key={index}
                  className="services-card h-64 list-none bg-pink-200/40 rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-pink-300 transition-all duration-300"
                >
                  <div className="services-img">
                    <Image src={service.src} alt={service.title} width={80} height={80} draggable="false" />
                  </div>
                  <h2 className="text-lg font-semibold mt-4 mb-1">{service.title}</h2>
                  <span className="text-gray-700 text-sm">{service.description}</span>
                </li>
              ))}
            </ul>
            <div
              id="right"
              className="card-arrow arrow-right absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white shadow-md h-12 w-12 flex items-center justify-center rounded-full cursor-pointer"
            >
              <Image src="/svgs/right-arrow.svg" alt="Right Arrow" width={20} height={20} draggable="false" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold pl-6">Recommend</h2>
        <div className="flex justify-center items-center mt-3 px-8">
          <div className="relative max-w-5xl w-full">
            <div
              id="reLeft"
              className=" absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow-md h-12 w-12 flex items-center justify-center rounded-full cursor-pointer"
            >
              <Image src="/svgs/left-arrow.svg" alt="Left Arrow" width={20} height={20} draggable="false" />
            </div>
            <ul className="grid grid-flow-col auto-cols-[calc(100%/4-12px)] gap-4 overflow-hidden scroll-smooth">
              {recommendedShops.map((shop, index) => (
                <li
                  key={index}
                  className="h-72 bg-pink-200/40 rounded-t-lg flex flex-col items-center justify-center p-3 cursor-pointer hover:bg-pink-300 transition-all duration-300"
                >
                  <div className="rounded-t-lg overflow-hidden">
                    <Image
                      src={shop.src}
                      alt={shop.name}
                      width={296}
                      height={212}
                      className="object-cover"
                      draggable="false"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mt-5 mb-1">{shop.name}</h2>
                  <span className="text-gray-700 text-sm">{shop.description}</span>
                </li>
              ))}
            </ul>
            <div
              id="reRight"
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow-md h-12 w-12 flex items-center justify-center rounded-full cursor-pointer"
            >
              <Image src="/svgs/right-arrow.svg" alt="Right Arrow" width={20} height={20} draggable="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
