import Image from "next/image";
import landing from "../assets/landing.png";

function Landing() {
  return (
    <section id="landing" className="grid grid-cols-1 px-6 py-1 bg-white-300 max-full">
      <div className="flex flex-1 mx-auto items-center px-4">
        <div className="flex flex-2 justify-between">
          <div className="flex m-auto " >
            <div className="justify-between gap-6">
              <div className="flex flex-1 text-6xl font-bold py-4 justify-start">
                Gain more knowledge <br className="whitespace-break-spaces" />
                in less time
              </div>
              <div className="text-3xl text-black/60 font-normal py-6 ">
                Great summaries for busy people,
                <br className="whitespace-break-spaces md:whitespace-normal"/>
                individuals who barely have time to read,
                <br className="whitespace-break-spaces md:whitespace-normal" />
                and even people who don’t like to read.
              </div>
              <div className="grid grid-col-1 max-w-300"  >
                <button className="max-w-300 flex items-center justify-center bg-brand-green rounded-sm text-2xl py-4" width={300} height={300}>Login</button>
              </div>
            </div>
            <div className="flex flex-1 justify-end">
              <Image src={landing} className="flex flex-1" alt="Landing image" width={600} height={400} />
            </div>
            
          </div>
        </div>
      </div>
      </section>
  );
}

export default Landing;