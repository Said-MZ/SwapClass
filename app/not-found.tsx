import "@/app/globals.css";
import Btn from "@/components/Btn";
const NotFound = () => {
  return (
    <section className="relative bg-neutral-950 text-neutral-50 antialiased overflow-x-hidden w-screen h-screen grid place-items-center overflow-hidden">
      <div className="absolute font-extrabold text-[40vw] z-10 opacity-10">
        <h2>404</h2>
      </div>

      <div className="z-20">
        <h1 className="text-3xl sm:text-6xl font-bold text-center">
          Page Not Found{" "}
        </h1>
        <Btn
          isLink={true}
          dark={true}
          text="Home"
          href="/"
          style="bg-transparent block mt-4 border-none underline"
        />
      </div>
    </section>
  );
};

export default NotFound;
