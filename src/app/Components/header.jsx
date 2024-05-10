export default function Home() {
    return (
      
        <main>
          <div className="text-center bg-orange-600">
            <h1 className="text-2xl">
              <a href="https://homecoming.psu.edu/">RVN Services</a>
            </h1>
            <h2 className="text-xl">
              <a>24/7 Service for the Tri-State Area</a>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <button className="hover:bg-cyan-600">Add To Inventory</button>
            <button className="hover:bg-cyan-600">Request</button>
            <button className="hover:bg-cyan-600">Search</button>
          </div>
        </main>
  
    );
  }