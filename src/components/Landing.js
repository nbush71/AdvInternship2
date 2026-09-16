import Image from "next/image";
import landing from "../assets/landing.png";

function Landing() {
  return (
    <section id="landing" className="w-full bg-white px-4 py-4 md:px-6 md:py-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex w-full gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <div className="max-w-175">
              <div className="text-5xl font-black text-brand-darkteal sm:text-2xl md:text-4xl xl:text-6xl">
                Gain more knowledge in less time
              </div>

              <div className="mt-8 max-w-155 text-2xl font-light leading-relaxed text-brand-gray md:text-2xl text-wrap">
                Great summaries for busy people, individuals who barely have time to read, and even people who don’t like to read.
              </div>

              <div className="grid grid-cols-1 place-items-center mt-8">
                <button className="inline-flex w-full mx-w-160 items-center justify-center rounded-md bg-brand-green px-6 py-4 text-lg font-medium text-brand-darkteal shadow-sm transition hover:brightness-95 md:text-xl">
                  Login
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-center lg:justify-end">
            <div className="relative w-full max-w-140  bg-white p-4 md:p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="ml-6 h-1.5 w-28 rounded-full bg-white" />
              </div>

              <Image
                src={landing}
                alt="Landing image"
                width={600}
                height={400}
                className="h-auto w-full" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;