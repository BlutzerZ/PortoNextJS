import Image from "next/image";

const IntroFirst = () => {
  return (
    <section className="px-6 py-4 lg:px-32 lg:py-20">
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-16">
          <div className="">
            <span className="py-1 px-4 bg-green-400 text-black rounded-lg text-sm font-bold">
              Full Stack Developer
            </span>
            <p className="text-6xl mt-6">From Zero to Unknown</p>

            <p className="text-gray-400 mt-6">
              Born to be great. great to be born
            </p>
            <button className="text-left text-xl text-green-400 mt-20">
              LET'S CHAT
            </button>
          </div>
          <div className="flex flex-row gap-20 lg:pr-32">
            <div className="flex justify-between gap-2 items-center">
              <p className="text-4xl">5</p>
              <div className="text-gray-400 text-sm">
                <p>YEAR</p>
                <p>EXPERIENCE</p>
              </div>
            </div>
            <div className="flex justify-between gap-2 items-center">
              <p className="text-4xl">10+</p>
              <div className="text-gray-400 text-sm">
                <p>PROJECT</p>
                <p>COMPLETE</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="rounded-b-3xl h-full w-[130vh]"
            src="/assets/img/photo.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroFirst;
