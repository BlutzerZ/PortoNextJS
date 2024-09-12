import Image from "next/image";

const TechStack = () => {
  return (
    <section className="px-12 lg:px-48 py-10 bg-[#242427]">
      <h2 className="text-center text-4xl font-semibold mb-8 text-green-400">
        Tech Stack
      </h2>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-6">
        <div className="bg-[#2D2E32] text-center p-4 rounded-xl flex flex-col justify-between gap-2">
          <div className="p-1 lg:p-4 my-auto flex justify-center">
            <Image
              src="/assets/img/tech/php.png"
              className="w-28"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </div>
          <p className="font-bold">PHP</p>
        </div>

        <div className="bg-[#2D2E32] text-center p-4 rounded-xl flex flex-col justify-between gap-2">
          <div className="p-1 lg:p-4 my-auto flex justify-center">
            <Image
              src="/assets/img/tech/php-laravel.png"
              className="w-28"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </div>
          <p className="font-bold">Laravel</p>
        </div>

        <div className="bg-[#2D2E32] text-center p-4 rounded-xl flex flex-col justify-between gap-2">
          <div className="p-1 lg:p-4 my-auto flex justify-center">
            <Image
              src="/assets/img/tech/py.png"
              className="w-28"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </div>
          <p className="font-bold">Python</p>
        </div>

        <div className="bg-[#2D2E32] text-center p-4 rounded-xl flex flex-col justify-between gap-2">
          <div className="p-1 lg:p-4 my-auto flex justify-center">
            <Image
              src="/assets/img/tech/py-django.png"
              className="w-28"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </div>
          <p className="font-bold">Django</p>
        </div>

        <div className="bg-[#2D2E32] text-center p-4 rounded-xl flex flex-col justify-between gap-2">
          <div className="p-1 lg:p-4 my-auto flex justify-center">
            <Image
              src="/assets/img/tech/py-fastapi.png"
              className="w-28"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </div>
          <p className="font-bold">FastAPI</p>
        </div>

        <div className="bg-[#2D2E32] text-center p-4 rounded-xl flex flex-col justify-between gap-2">
          <div className="p-1 lg:p-4 my-auto flex justify-center">
            <Image
              src="/assets/img/tech/js-node.png"
              className="w-28"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </div>
          <p className="font-bold">Node.js</p>
        </div>

        <div className="bg-[#2D2E32] text-center p-4 rounded-xl flex flex-col justify-between gap-2">
          <div className="p-1 lg:p-4 my-auto flex justify-center">
            <Image
              src="/assets/img/tech/js-vue.png"
              className="w-28"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </div>
          <p className="font-bold">Vue.js</p>
        </div>

        <div className="bg-[#2D2E32] text-center p-4 rounded-xl flex flex-col justify-between gap-2">
          <div className="p-1 lg:p-4 my-auto flex justify-center">
            <Image
              src="/assets/img/tech/js-nextjs.png"
              className="w-28"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </div>
          <p className="font-bold">Next.js</p>
        </div>
        <div className="bg-[#2D2E32] text-center p-4 rounded-xl flex flex-col justify-between gap-2">
          <div className="p-1 lg:p-4 my-auto flex justify-center">
            <Image
              src="/assets/img/tech/go.png"
              className="w-28"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </div>
          <p className="font-bold">Go</p>
        </div>
        <div className="bg-[#2D2E32] text-center p-4 rounded-xl flex flex-col justify-between gap-2">
          <div className="p-1 lg:p-4 my-auto flex justify-center">
            <Image
              src="/assets/img/tech/go-gin.png"
              className="w-28 p-2"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </div>
          <p className="font-bold">Gin</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
