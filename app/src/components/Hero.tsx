import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const img = "/ux-design.png";
  return (
    <section
      className="bg-gray-900 text-white"
      style={{ borderBottomLeftRadius: "5%", borderBottomRightRadius: "5%" }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-left lg:ml-auto">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Understand User Flow.
            <span className="sm:block"> Increase Conversion. </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
            <Link
              className="block w-full rounded-md border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 sm:w-auto transition duration-300 ease-in-out"
              href="/auth"
            >
              Get Started
            </Link>
            <Link
              className="block w-full rounded-md border border-blue-600 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 sm:w-auto transition duration-300 ease-in-out"
              href="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:ml-16 lg:mr-0 lg:w-1/2">
          <Image
            className="mx-auto lg:mr-0"
            src={img}
            alt="ux-design"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
