"use client";

import { useMemo, useState } from "react";

const dishes = [
  { id:"classic", type:"chicken", name:"Classic Chicken", price:189, desc:"Tender chicken, fragrant rice and balanced masala.", heat:"Medium warmth" },
  { id:"fire", type:"chicken", name:"Firecracker Chicken", price:219, desc:"A bolder masala, extra heat and a lingering finish.", heat:"Extra heat" },
  { id:"dum", type:"special", name:"Chicken Dum", price:249, desc:"Sealed layers of rice and masala, gently finished.", heat:"Deep & aromatic" },
  { id:"royal", type:"special", name:"Royal Special", price:279, desc:"A generous plate with richer spice and extra garnish.", heat:"House favourite" },
  { id:"veg", type:"veg", name:"Garden Veg", price:159, desc:"Vegetables, fragrant rice and a warm spice blend.", heat:"Gentle warmth" },
  { id:"feast", type:"special", name:"Feast for Two", price:399, desc:"Two generous servings, made for sharing.", heat:"Shareable" },
];
type Filter = "all" | "chicken" | "special" | "veg";

export function MenuClient() {
  const [filter, setFilter] = useState<Filter>("all");
  const [picks, setPicks] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const filtered = useMemo(() => dishes.filter(d => filter === "all" || d.type === filter), [filter]);
  const total = picks.reduce((sum, id) => sum + (dishes.find(d => d.id === id)?.price ?? 0), 0);
  return (
    <>
      <div className="menu-controls" role="group" aria-label="Filter biryani types">
        {(["all","chicken","special","veg"] as Filter[]).map(value => <button key={value} className={`filter ${filter === value ? "active" : ""}`} onClick={() => setFilter(value)}>{({all:"All favourites",chicken:"Chicken",special:"House specials",veg:"Veg"})[value]}</button>)}
      </div>
      <div className="dish-grid">{filtered.map(dish => <article className="dish" key={dish.id}>
        <div className="dish-head"><h3>{dish.name}</h3><span className="price">₹{dish.price}</span></div><p>{dish.desc}</p>
        <div className="dish-foot"><span className="heat">{dish.heat}</span><button aria-label={`Add ${dish.name}`} onClick={() => {setPicks(old => [...old, dish.id]);setNotice(`${dish.name} added to your picks.`);}}>+</button></div>
      </article>)}</div>
      <p className="menu-note">Demo menu and prices — confirm items, availability and pricing before launch.</p>
      {picks.length > 0 && <aside className="content-panel order-summary"><div><div className="kicker">Your selection</div><h2>{picks.length} item{picks.length === 1 ? "" : "s"} selected</h2><p>{picks.map((id, i) => `${i+1}. ${dishes.find(d => d.id === id)?.name}`).join(" · ")}</p><strong className="price">Demo total: ₹{total}</strong></div><button className="filter" onClick={() => {setPicks([]);setNotice("Selection cleared.");}}>Clear selection</button></aside>}
      {notice && <div className="toast show inline-toast" role="status">{notice}</div>}
    </>
  );
}
