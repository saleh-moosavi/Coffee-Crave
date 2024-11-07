export default function Banner(props: any) {
  if (props.second) {
    return (
      <div className="flex justify-between items-center bg-amber-300/20 xl:max-w-7xl xl:mx-auto">
        <img
          className="w-32 object-cover"
          src="https://imgs.search.brave.com/YdNsLOPmCGP72pB5P3ex-bfs8HdlNZC1oDbKPZcwtb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b25seWdmeC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDUvY3VwLWNvZmZl/ZS1zdGFpbi0xLTMw/MHgyODMucG5n"
        />
        <div>
          {/* detail in the center */}
          <div className="text-center">
            <h2 className="text-lg font-bold text-amber-950">
              Join in and get 15% Off!
            </h2>
            <p className="text-xs font-semibold text-amber-950">
              Subscribe to our Channel and get 15% off discount code
            </p>
            <form className="mt-5 flex justify-between gap-x-3">
              <input
                className="px-2 py-1 rounded-full placeholder:text-xs hover:shadow-[0_0_5px_2px_#451a03] transition-all duration-300"
                type="email"
                placeholder="Email Address"
              />
              <button className="bg-amber-950 px-2 py-1 rounded-full text-white font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <img
          className="w-32 object-cover"
          src="https://imgs.search.brave.com/d32rPG0XJSF3kKGNSBZoVQAAkh4UAr8NTmQmrLSv-Io/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NS9Db2ZmZWUtUE5H/LUhELnBuZw"
          alt=""
        />
      </div>
    );
  } else {
    return (
      <div className="flex justify-between items-center bg-amber-300/20 xl:max-w-7xl xl:mx-auto">
        <img
          className="w-32 object-cover"
          src="https://imgs.search.brave.com/YdNsLOPmCGP72pB5P3ex-bfs8HdlNZC1oDbKPZcwtb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b25seWdmeC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDUvY3VwLWNvZmZl/ZS1zdGFpbi0xLTMw/MHgyODMucG5n"
          alt=""
        />
        {/* detail in the center */}
        <div className="text-center">
          <h2 className="text-lg font-bold text-amber-950">
            Check Out Our Bestbr <br /> Coffee Betans
          </h2>
          <button className="bg-amber-950 text-white text-xs font-bold px-5 py-2 rounded-full mt-3">
            Explor Our Products »
          </button>
        </div>
        <img
          className="w-32 object-cover"
          src="https://imgs.search.brave.com/d32rPG0XJSF3kKGNSBZoVQAAkh4UAr8NTmQmrLSv-Io/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NS9Db2ZmZWUtUE5H/LUhELnBuZw"
          alt=""
        />
      </div>
    );
  }
}
