"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ThreeScene = dynamic(() => import("@/components/three-scene").then((m) => m.ThreeScene), {
  ssr: false,
  loading: () => <div className="scene-loading" aria-label="Loading 3D scene" />,
});

export function ScenePage() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 32, opacity: 0 }, {
          y: 0, opacity: 1, duration: .8, ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 84%", once: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <main ref={root}>
      <div className="scene-backdrop"><ThreeScene /></div>
      <div className="scene-vignette" />
      <section className="scene-section hero" id="home">
        <div className="copy" data-reveal>
          <div className="kicker">Fresh from the dum</div>
          <h1>Not just<br />a meal.<br /><em>A moment.</em></h1>
          <p className="lead">Fragrant rice. Slow-built masala. Tender chicken. A whole world of flavour, brought to life one grain at a time.</p>
          <div className="actions"><a className="pill" href="/menu">Find your biriyani ↗</a><a className="underlink" href="/story">Enter the flavour story</a></div>
          <div className="hero-meta"><div><strong>01</strong>Signature recipe</div><div><strong>Slow</strong>Cooked with care</div><div><strong>Full</strong>Of flavour</div></div>
        </div>
        <div className="drag-hint"><span>↔</span> Drag to rotate · Scroll to explore</div>
      </section>
      <section className="scene-section" data-reveal><div className="split"><div className="copy"><div className="kicker">Made layer by layer</div><h2 className="section-title">The magic is<br />in the <em>layers.</em></h2><p className="body-copy">Whole spices, slow-cooked masala and fragrant rice come together in a dish built around depth and aroma.</p><a className="underlink" href="/story">Read our story ↗</a></div><div className="copy"><div className="kicker">The flavour orchestra</div><h2 className="section-title">Every ingredient<br />has a <em>part.</em></h2><div className="ingredient-list"><div className="ingredient"><b>✦</b> Fragrant long-grain rice</div><div className="ingredient"><b>✦</b> Deep, toasted spice notes</div><div className="ingredient"><b>✦</b> Tender chicken pieces</div><div className="ingredient"><b>✦</b> Fresh herbs and a bright finish</div></div></div></div></section>
      <section className="scene-section menu-section" data-reveal><div style={{width:"100%"}}><div className="menu-top"><div><div className="kicker">Pick your kind of comfort</div><h2 className="section-title">Choose your <em>feast.</em></h2></div><p className="body-copy">Explore a few favourites, then open the full menu.</p></div><div className="dish-grid">{[{name:"Classic Chicken",price:"₹189",desc:"Tender chicken, fragrant rice and balanced masala."},{name:"Chicken Dum",price:"₹249",desc:"Sealed layers of rice and masala, gently finished."},{name:"Royal Special",price:"₹279",desc:"A richer plate with extra garnish."}].map((dish)=><article className="dish" key={dish.name}><div className="dish-head"><h3>{dish.name}</h3><span className="price">{dish.price}</span></div><p>{dish.desc}</p><div className="dish-foot"><span className="heat">House selection</span><a className="underlink" href="/menu">Explore ↗</a></div></article>)}</div><div className="actions"><a className="pill" href="/menu">View full menu ↗</a></div></div></section>
      <section className="scene-section interlude" data-reveal><div className="copy"><div className="kicker">From the first aroma</div><h2>Some things<br />should be <em>slow.</em></h2><p>Let the spices bloom. Let the rice breathe. Let the flavour find its way through every layer.</p><div className="actions" style={{justifyContent:"center"}}><a className="pill" href="/experience">Explore the experience ↗</a></div></div></section>
      <section className="scene-section order-section" data-reveal><div className="copy"><div className="kicker">The table is waiting</div><h2>Make room<br />for <em>one more bite.</em></h2><p>Choose your plate and make the next meal the one you remember.</p><a className="pill" href="/contact">Contact the restaurant ↗</a></div></section>
    </main>
  );
}
