import DashBoard from "./_components/_Dashboard/page";
import SearchBar from "./_components/_SearchBar/page";
import SideBar from "./_components/_SideBar/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[url('../../public/hero-image-wr.jpg')] bg-[#1B1D1F] bg-contain bg-no-repeat">
      <img src="/Logo.svg" alt="Logo" className="pt-32"/>
        <div className="flex flex-col bg-[#1C1D1F] rounded-2xl w-[1200px] h-[870px] mt-24 border-[0.1px] border-[#6C727F]">
          <SearchBar/>
          <div className="flex mt-12">
            <SideBar/>
            <DashBoard/>
          </div>
        </div>
    </main>
  );
}
