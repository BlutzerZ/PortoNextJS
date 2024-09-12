import IntroFirst from "@/components/mainPage/intro1";
import IntroSecond from "@/components/mainPage/intro2";
import Projects from "@/components/mainPage/project";
import TechStack from "@/components/mainPage/techstack";
import Navbar from "@/components/nav";
import RootLayout from "./layout";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <RootLayout>
      <main className="bg-[#2D2E32]">
        <Navbar />
        <IntroFirst />
        <IntroSecond />
        <Projects />
        <TechStack />
        <Footer />
      </main>
    </RootLayout>
  );
};

export default Home;
