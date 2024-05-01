import SearchBar from "./_components/_SearchBar/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[url('../../public/hero-image-wr.jpg')] bg-[#1B1D1F] bg-contain bg-no-repeat">
      <img src="/Logo.svg" alt="Logo" className="pt-32"/>
        <div className="flex justify-center bg-[#282B30] rounded-2xl w-[1200px] h-[870px] mt-24 border-[0.1px] border-[#6C727F]">
          <SearchBar/>
        </div>
    </main>
  );
}
