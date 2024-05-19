export default function Home() {
    return (
      <main> 
        <div className="grid grid-cols-3 gap-4 text-left align-baseline bg-orange-600">
            <div className="">
              <h2>RVN Services</h2>
              <p className="text-sm">Site designed and maintained by RVN Services.</p>
              <p className="text-sm">For site related inquiries, contact jgoonan24@gmail.com</p>
            </div>
            <div id = "block2">
              <h2>Contact</h2>
              <p className="text-sm">1117 Edison Ave.,</p>
              <p className="text-sm">Bronx, N.Y. 10461</p>
              <p>                         </p>
              <p className="text-sm">Email: jgoonan24@gmail.com</p>
              <p className="text-sm">Phone: (347) 261-2903</p>
            </div>
            <div>
                <h2>Other Links</h2>
                <p>Instagram</p>
                <p>Customer Review</p>
                <p>Instagram</p>
            </div>
        </div>
       
    </main>
    );
  }