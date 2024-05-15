import HeaderComponent from "./components/header.jsx"
import InfoComponent from "./components/Info.jsx"
import FooterComponent from "./components/footer.jsx"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent className="bg-gray-800 text-white p-1" />
      <main className="flex-grow flex flex-col items-center p-10">
        <InfoComponent className="bg-gray-100 p-8 rounded-lg shadow-md" />
      </main>
      <FooterComponent className="bg-gray-800 text-white p-1" />
    </div>
  );
}


// use npx vercel --prod after you make a change to redeploy it

