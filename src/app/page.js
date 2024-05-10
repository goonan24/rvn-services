import Image from "next/image";
import HeaderComponent from "/Users/josephgoonan/Documents/GitHub/rvn-services/src/app/Components/header.jsx"
import InfoComponent from "/Users/josephgoonan/Documents/GitHub/rvn-services/src/app/Components/Info.jsx"
import FooterComponent from "/Users/josephgoonan/Documents/GitHub/rvn-services/src/app/Components/footer.jsx"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent className="bg-gray-800 text-white p-4" />
      <main className="flex-grow flex flex-col items-center p-24">
        <InfoComponent className="bg-gray-100 p-8 rounded-lg shadow-md" />
      </main>
      <FooterComponent className="bg-gray-800 text-white p-4" />
    </div>
  );
}

