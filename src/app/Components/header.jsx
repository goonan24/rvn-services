export default function Home() {
    return (
      
        <main>
          <div className="text-2xl text-center bg-blue-500">
            <h1 is-upgraded="" className="title">
              <a href="https://homecoming.psu.edu/">Homecoming OPP Inventory</a>
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <button className="hover:bg-cyan-600">Add To Inventory</button>
            <button className="hover:bg-cyan-600">Request</button>
            <button className="hover:bg-cyan-600">Search</button>
          </div>
        </main>
  
    );
  }