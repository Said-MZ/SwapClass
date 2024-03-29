import Hero from "@/components/Hero";

const LandingPage = async () => {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Hero />
      <div>
        <h2 className="text-xl lg:text-3xl font-bold !leading-tight mx-auto max-w-[920px] text-center mb-12">
          How it works
        </h2>
        <iframe
          className="aspect-video max-w-[90vw] max-h-96 sm:max-w-screen-sm sm:max-h-96 rounded-md border-2"
          width="1676"
          height="766"
          src="https://www.youtube.com/embed/neMPlk3G5C8"
          title="How to use swap class"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LandingPage;
