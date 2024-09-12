import Image from "next/image";

const Projects = () => {
  return (
    <section className="px-6 lg:px-28 py-10 flex flex-col gap-8 bg-[#242427]">
      <h2 className="text-4xl text-center font-semibold text-green-400">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-5">
        <div className="w-full rounded-xl overflow-hidden flex flex-col lg:flex-row gap-8 items-center">
          <Image
            className="rounded-b-3xl h-full w-[130vh]"
            src="/assets/img/bat.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="pl-2 lg:w-1/2 flex flex-col gap-4">
            <div className="">
              <p className="text-green-400 text-2xl">Bot Auto Trader</p>
              <p className="text-gray-400">Python, PyQT5</p>
            </div>
            <p>
              Bot Auto Trader is a desktop software designed to automate the
              opening of BUY/SELL positions on a Web Trading platform.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5">
        <div className="w-full flex flex-col gap-1">
          <Image
            src="/assets/img/educa.png"
            className="h-24 lg:h-40 object-cover rounded-xl overflow-hidden"
            width={500}
            height={500}
            alt="Picture of the author"
          />

          <p className="pl-2">Educa</p>
        </div>

        <div className="w-full flex flex-col gap-1">
          <Image
            src="/assets/img/ytb.png"
            className="h-24 lg:h-40 object-cover rounded-xl overflow-hidden"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <p className="pl-2">Youtube Boosting Tools</p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <Image
            src="/assets/img/musterm.png"
            className="h-24 lg:h-40 object-cover rounded-xl overflow-hidden"
            width={500}
            height={500}
            alt="Picture of the author"
          />

          <p className="pl-2">Musterm (API)</p>
        </div>

        <div className="w-full flex flex-col gap-1">
          <Image
            src="/assets/img/s-data-healthcare.png"
            className="h-24 lg:h-40 object-cover rounded-xl overflow-hidden"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <p className="pl-2">S-DataHealthCare</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
