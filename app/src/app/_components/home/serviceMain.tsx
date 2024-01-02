import ServiceCard from "./serviceCard";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "We create beautiful, modern, and responsive websites that make your brand stand out.",
      icon: (
        <svg
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 0 36 36"
          version="1.1"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>design-solid</title>
          <path
            className="clr-i-solid clr-i-solid-path-1"
            d="M34.87,32.21,30,27.37V8.75L27.7,4.52a2,2,0,0,0-3.54,0L22,8.76V19.41L3.71,1.21A1,1,0,0,0,2,1.92V10H4.17v1.6H2V18H4.17v1.6H2v6.65H4.17v1.6H2v5.07a1,1,0,0,0,1,1H34.16a1,1,0,0,0,.71-1.71ZM10,26V16.94L19.07,26Zm18,2.11H24V25.68h4Zm0-4H24V9.25l1.94-3.77L28,9.26Z"
          ></path>
          <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
        </svg>
      ),
    },
    {
      title: "Web Development",
      description:
        "We build custom web applications that are scalable and performant, using the latest technologies.",
      icon: (
        <svg
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 -32 576 576"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>web</title>
          <path d="M288 32Q350 32 402 63 453 93 483 145 512 196 512 256 512 318 482 370 451 421 400 451 348 480 288 480 226 480 175 450 123 419 94 368 64 316 64 256 64 194 95 143 125 91 177 62 228 32 288 32ZM272 83Q235 95 218 151 245 158 272 160L272 83ZM304 160Q331 158 358 151 341 95 304 83L304 160ZM367 98Q380 118 387 141 403 133 411 128 392 111 367 98ZM189 141Q197 117 209 98 185 110 166 129L189 141ZM463 240Q460 193 432 153 412 166 396 172 403 205 404 240L463 240ZM180 172Q165 166 145 153 118 191 113 240L172 240Q173 205 180 172ZM272 192Q238 189 210 182 205 208 204 240L272 240 272 192ZM372 240Q371 208 366 182 338 189 304 192L304 240 372 240ZM113 272Q118 321 145 359 159 349 180 340 173 307 172 272L113 272ZM204 272Q205 304 210 330 238 323 272 320L272 272 204 272ZM304 320Q338 323 366 330 371 304 372 272L304 272 304 320ZM396 340Q411 346 431 359 458 321 463 272L404 272Q403 307 396 340ZM304 429Q341 417 358 361 331 354 304 352L304 429ZM272 352Q245 354 218 361 235 417 272 429L272 352ZM189 371Q176 376 166 383 185 401 208 413 195 391 189 371ZM387 371Q380 394 367 413 390 403 410 383L387 371Z" />
        </svg>
      ),
    },
    {
      title: "SEO",
      description:
        "We optimize your website to improve its visibility on search engines and drive more traffic.",
      icon: (
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="8"
            width="40"
            height="32"
            rx="1.63265"
            fill="#2F88FF"
            stroke="#000000"
            strokeWidth="4"
          />
          <path
            d="M16 18.948C14 16 10.4978 17.9376 10.7489 20.9688C11 24 15 24 15.2498 27.0312C15.4997 30.0625 12 32 10 29.052"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 18H22V31H26"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 25H26"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="32"
            y="18"
            width="6"
            height="13"
            rx="3"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Softaware Development",
      description:
        "We build custom web applications that are scalable and performant, using the latest technologies.",
      icon: (
        <svg
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 0 14 14"
          role="img"
          focusable="false"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m 11.8,10.6 0,-7.2035638 C 11.8,2.7367083 11.264337,2.2 10.603564,2.2 l -7.2071278,0 C 2.7367083,2.2 2.2,2.7356627 2.2,3.3964362 L 2.2,10.6 1,10.6 1,11.2 c 0,0.333681 0.2664272,0.6 0.5950819,0.6 l 10.8098361,0 C 12.726816,11.8 13,11.531371 13,11.2 l 0,-0.6 -1.2,0 z m -8.4,-7.2 7.2,0 0,5.4 -7.2,0 0,-5.4 z m 2.4,6.6 2.4,0 0,0.6 -2.4,0 0,-0.6 z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-12 bg-white">
      <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
      <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
