import Image from "next/image";
import HeaderComponent from "/Users/josephgoonan/Documents/GitHub/rvn-services/src/app/Components/header.jsx"
import InfoComponent from "/Users/josephgoonan/Documents/GitHub/rvn-services/src/app/Components/header.jsx"
import FooterComponent from "/Users/josephgoonan/Documents/GitHub/rvn-services/src/app/Components/footer.jsx"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeaderComponent />
      <InfoComponent />
      <FooterComponent />
    </main>
  );
}
