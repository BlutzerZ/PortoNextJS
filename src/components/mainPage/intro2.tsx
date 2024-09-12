const IntroSecond = () => {
  return (
    <section className="px-8 py-4 lg:p-20 bg-[#242427]">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-6">
        <div className="w-full flex flex-col gap-2">
          <div className="bg-[#2D2E32] p-8 rounded w-full">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <p className="text-green-400 text-xl">Web Development</p>
                <p className="text-gray-400 text-sm">
                  Create digital product with unique ideas
                </p>
              </div>
              <p className="text-gray-200 font-bold">10+ Projects</p>
            </div>
          </div>

          <div className="bg-[#2D2E32] p-8 rounded w-full">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <p className="text-green-400 text-xl">Desktop Development</p>
                <p className="text-gray-400 text-sm">
                  Create digital product with unique ideas
                </p>
              </div>
              <p className="text-gray-200 font-bold">5+ Projects</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 lg:gap-2 lg:px-20 ">
          <p className="text-gray-400 text-sm">Introduce</p>
          <p className="text-white text-4xl">
            Hello! I'm Nurudin Wafiq Mustaqim
          </p>

          <p className="text-white text-xl italic">
            Every great design begin with an even better story
          </p>

          <p className="text-gray-400">
            I am a highly curious and dedicated individual with a deep passion
            for IT and programming. My journey in coding began at the age of 14
            during my junior high school years, and since then, I have been
            continually seeking to expand my knowledge and skills in the field.
            I am particularly enthusiastic about developing innovative solutions
            and exploring new technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSecond;
