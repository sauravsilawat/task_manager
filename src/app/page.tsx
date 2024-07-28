import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="w-[85%] bg-blue-500 h-screen">
        <h1 className=" text-3xl">Good morning, Joe</h1>
      </div>
    </main>
  );
}
