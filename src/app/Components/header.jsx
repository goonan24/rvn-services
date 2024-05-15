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
          <div className="text-center bg-orange-600">
            <a href="https://forms.gle/xXAN1W5zPhgNR8MM9">
            <button className="hover:bg-cyan-600 px-2">Please Leave a Review</button>
            </a>
            <a href="https://forms.gle/14NRyWUkZSNk8E8S8">
            <button className="hover:bg-cyan-600 px-2">Schedule a Service</button>
            </a>
            <a href="https://photos.app.goo.gl/9jPL6HWqYnpxLbNe8">
            <button className="hover:bg-cyan-600 px-2">Photo Library</button>
            </a>
          </div>
        </main>
  
    );
  }