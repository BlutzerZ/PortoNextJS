import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#2D2E32]">
      <nav className="px-28 py-5">
        <div className="flex justify-between items-center">
          <a href="" className="font-bold text-2xl">BluterZ</a>
          {/* menu */}
          <div className="flex gap-6">
            <a href="">About</a>
            <a href="">About</a>
            <a href="">About</a>
            <a href="">About</a>
          </div>
          <div className="flex flex-row gap-10">
            <a href="">Twitter</a>
            <a href="">Github</a>
          </div>
        </div>
      </nav>

      <section className="px-32 py-28">
        <div className="flex justify-between">
          <div className="flex flex-col gap-16">
            <div className="pl-28">
              <span className="py-1 px-4 bg-green-400 text-black rounded-lg text-sm font-bold">
                Full Stack Developer
              </span>
              <p className="text-6xl mt-6">Talk is cheap. Show me the code</p>
              
              <p className="text-gray-400 mt-6">
                Born to be great. 
                Born to be great. 
                Born to be great. 
                Born to be great. 
                Born to be great. 
              </p>
              <button className="text-left text-xl text-green-400 mt-20">
                LET'S CHAT
              </button>    
            </div>
            <div className="flex flex-row gap-20 pr-32">
              <div className="flex jsutify-between gap-2 items-center">
                <p className="text-4xl">5</p>
                <div className="text-gray-400 text-sm">
                  <p>YEAR</p>
                  <p>EXPERIENCE</p>
                </div>
              </div>
              <div className="flex jsutify-between gap-2 items-center">
                <p className="text-4xl">5</p>
                <div className="text-gray-400 text-sm">
                  <p>PROJECT COMPLETE</p>
                  <p>IN 10 COUNTRIES</p>
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

      <section className="p-20 bg-[#242427]">
        <div className="flex justify-between gap-6">
          
          <div className="w-full flex flex-col gap-2">

            <div className="bg-[#2D2E32] p-8 rounded w-full">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-green-400 text-xl">
                    Design
                  </p>
                  <p className="text-gray-400 text-sm">
                    Create digital product with unique ideas
                  </p>
                </div>
              <p className="text-gray-200 font-bold">20 Projects</p>
              </div>
            </div>

            <div className="bg-[#2D2E32] p-8 rounded w-full">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-green-400 text-xl">
                    Design
                  </p>
                  <p className="text-gray-400 text-sm">
                    Create digital product with unique ideas
                  </p>
                </div>
              <p className="text-gray-200 font-bold">20 Projects</p>
              </div>
            </div>

            <div className="bg-[#2D2E32] p-8 rounded w-full">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-green-400 text-xl">
                    Design
                  </p>
                  <p className="text-gray-400 text-sm">
                    Create digital product with unique ideas
                  </p>
                </div>
              <p className="text-gray-200 font-bold">20 Projects</p>
              </div>
            </div>

          </div>
          
          <div className="w-full flex flex-col gap-8 px-20">
            <p className="text-gray-400 text-sm">
              Introduce
            </p>
            <p className="text-white text-4xl">
              Hello! I'm BluterZ
            </p>

            <p className="text-white text-xl italic">
              Every great design begin with an even better story
            </p>

            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ab, cumque tempora minima consequuntur excepturi voluptatem odio ut perspiciatis ducimus sequi, assumenda ipsam asperiores magni praesentium delectus voluptatibus. Error, deserunt?
            </p>
          </div>
        </div>

      </section>

      <section className="px-28 py-20 flex flex-col gap-8">
        <h2 className="text-4xl text-center font-bold">Projects</h2>
        
        <div className="grid grid-cols-1 gap-5">
          <div className="w-full rounded-xl overflow-hidden flex flex-row gap-8 items-center">
            <Image
                className="rounded-b-3xl h-full w-[130vh]"
                src="/assets/img/binomo.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="pl-2 w-1/2 flex flex-col gap-4">
                <p className="text-green-400 text-2xl">Binomo Auto Trader</p>
                <p className="text-gray-400 italic">2022</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae minima, laboriosam sapiente quae provident deleniti doloremque, architecto voluptatem qui impedit placeat facilis aut illo consequatur doloribus temporibus esse autem. Molestias?</p>
                <p className="text-gray-400">Python, PyQT5</p>
              </div>
            </div>
        </div>

        <div className="grid grid-cols-5 gap-5">
          
          <div className="w-full rounded-xl overflow-hidden flex flex-col gap-1">
            <Image
              src="/assets/img/binomo.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            
            <p className="pl-2">Binomo Auto Trader</p>
          </div>

          <div className="w-full rounded-xl overflow-hidden flex flex-col gap-1">
            <Image
              src="/assets/img/ytb.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <p className="pl-2">Youtube Boosting Tools</p>
          </div>

          <div className="w-full rounded-xl overflow-hidden flex flex-col gap-1">
            <div className="bg-[#242427] w-full h-32"></div>
            <p className="pl-2">Biro Mahasiswa</p>
          </div>

          <div className="w-full rounded-xl overflow-hidden flex flex-col gap-1">
            <div className="bg-[#242427] w-full h-32"></div>
            <p className="pl-2">Biro Mahasiswa</p>
          </div>

          <div className="w-full rounded-xl overflow-hidden flex flex-col gap-1">
            <div className="bg-[#242427] w-full h-32"></div>
            <p className="pl-2">Biro Mahasiswa</p>
          </div>

          <div className="w-full rounded-xl overflow-hidden flex flex-col gap-1">
            <div className="bg-[#242427] w-full h-32"></div>
            <p className="pl-2">Biro Mahasiswa</p>
          </div>

          <div className="w-full rounded-xl overflow-hidden flex flex-col gap-1">
            <div className="bg-[#242427] w-full h-32"></div>
            <p className="pl-2">Biro Mahasiswa</p>
          </div>
          
          <div className="w-full rounded-xl overflow-hidden flex flex-col gap-1">
            <div className="bg-[#242427] w-full h-32"></div>
            <p className="pl-2">Biro Mahasiswa</p>
          </div>

          <div className="w-full rounded-xl overflow-hidden flex flex-col gap-1">
            <div className="bg-[#242427] w-full h-32"></div>
            <p className="pl-2">Biro Mahasiswa</p>
          </div>

          <div className="w-full rounded-xl overflow-hidden flex flex-col gap-1">
            <div className="bg-[#242427] w-full h-32"></div>
            <p className="pl-2">Biro Mahasiswa</p>
          </div>

        </div>
        
        
      </section>

      <section className="px-48 py-28 bg-[#242427]">
        <h2 className="text-center text-4xl font-bold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-4 gap-4">
          
          <div className="bg-[#2D2E32] text-center p-6 rounded-xl">
            <p className="font-bold mt-48">
              Python
            </p>
          </div>

          <div className="bg-[#2D2E32] text-center p-6 rounded-xl">
            <p className="font-bold mt-48">
              Python
            </p>
          </div>

          <div className="bg-[#2D2E32] text-center p-6 rounded-xl">
            <p className="font-bold mt-48">
              Python
            </p>
          </div>

          <div className="bg-[#2D2E32] text-center p-6 rounded-xl">
            <p className="font-bold mt-48">
              Python
            </p>
          </div>

          <div className="bg-[#2D2E32] text-center p-6 rounded-xl">
            <p className="font-bold mt-48">
              Python
            </p>
          </div>

          <div className="bg-[#2D2E32] text-center p-6 rounded-xl">
            <p className="font-bold mt-48">
              Python
            </p>
          </div>

          <div className="bg-[#2D2E32] text-center p-6 rounded-xl">
            <p className="font-bold mt-48">
              Python
            </p>
          </div>

          <div className="bg-[#2D2E32] text-center p-6 rounded-xl">
            <p className="font-bold mt-48">
              Python
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
