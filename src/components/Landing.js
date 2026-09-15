import Image from "next/image";
import landing from "../assets/landing.png";

function Landing() {
  return (
    <section id="landing" className="flex-base flex px-6 py-1 bg-white-300 max-full">
      <div className="flex flex-1 mx-auto items-center px-4">
        <div className="flex flex-1 justify-between">
          <div className="flex m-auto " >
            <div className="flex flex-col ">
              <div className="text-5xl font-bold py-4 justify-start gap-6">
                Gain more knowledge <br className="whitespace-break-spaces" />
                in less time
              </div>
              <div className="text-2xl text-black/60 font-normal py-6 ">
                Great summaries for busy people,
                <br className="whitespace-break-spaces md:whitespace-normal"/>
                individuals who barely have time to read,
                <br className="whitespace-break-spaces md:whitespace-normal" />
                and even people who don’t like to read.
              </div>
              <button className="max-w-100 flex items-center justify-center content-center bg-brand-green rounded-sm text-lg px-6 py-2" width={500} height={300} >Login</button>
            </div>
            <div className="flex justify-end">
              <Image src={landing} className="flex flex-1" alt="Landing image" width={500} height={500} />
            </div>
            
          </div>
        </div>
      </div>
      </section>
  );
}

export default Landing;