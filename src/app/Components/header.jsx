import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-orange-600 text-center px-1 py-1">
      <div className="mb-1">
        <Image src="/Rvnlogo.png" alt="Description of image" width={1000} height={100} />
      </div>
      <div className="flex flex-row gap-1">
        <a href="https://forms.gle/xXAN1W5zPhgNR8MM9">
          <button className="hover:bg-cyan-600 px-4 py-1 bg-white text-black text-sm">Please Leave a Review</button>
        </a>
        <a href="https://photos.app.goo.gl/3Lq4qY2shEiCoxw69">
          <button className="hover:bg-cyan-600 px-4 py-1 bg-white text-black text-sm">Photo Library</button>
        </a>
        <a href="https://forms.gle/3vS4PChLoM8Ni87r5" className='items-center justify-center'>
          <button className="hover:bg-cyan-600 px-4 py-1 bg-white text-black text-sm">Schedule a Service</button>
        </a>
      </div>
    </main>
  );
}
