import { useRef, useState } from "react";

import { gigs } from "../../utils/data";
import GigCard from "./GigCard";
import "./Gigs.style.scss";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const apply = () => {};
  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <section className="gigs">
      <div className="container">
        <span className="breadcrumbs">Fiverr {">"} Graphics & Design</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverrs AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>

          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          {gigs?.length > 0 &&
            gigs.map((item) => <GigCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export default Gigs;
