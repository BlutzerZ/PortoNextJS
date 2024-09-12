import RootLayout from "@/app/layout";
import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import ProjectList from "@/components/project/projectlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BlutzerZ | Project",
  description: "BlutzerZ Project",
};

const Home = async () => {
  return (
    <RootLayout>
      <main className="bg-[#2D2E32]">
        <Navbar />
        <section className="px-6 lg:px-28 py-10 flex flex-col gap-8 bg-[#242427]">
          <ProjectList />
        </section>
        <Footer />
      </main>
    </RootLayout>
  );
};

export default Home;
