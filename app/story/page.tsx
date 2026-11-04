
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Story" };

export default function StoryPage() {
  return (
    <main>
      <section className="page-intro">
        <div className="kicker">01 / The story</div>
        <h1>Made layer by<br /><em>layer.</em></h1>
        <p>Our story is built around the details: fragrant rice, slow-cooked masala, roasted chicken and the patience required to bring them together.</p>
      </section>

      <section className="content-wrap">
        <div className="two-col">
          <article className="content-panel">
            <div className="kicker">The foundation</div>
            <h2>Flavour takes time.</h2>
            <p>Whole spices create the first aroma. Chicken and masala build the centre. Rice carries the flavour through every layer, with herbs adding a fresh finish.</p>
          </article>

          <article className="content-panel">
            <div className="kicker">The result</div>
            <h2>A complete plate.</h2>
            <p>Each component has a job: texture, aroma, warmth and balance. The goal is a biryani that feels considered from the first spoonful to the last.</p>
          </article>
        </div>

        <div className="content-panel">
          <h2>What goes into the experience</h2>
          <div className="feature-list">
            <div className="feature"><b>01</b><span>Long-grain rice with a light, separate texture.</span></div>
            <div className="feature"><b>02</b><span>Layered masala built from aromatic spices.</span></div>
            <div className="feature"><b>03</b><span>Chicken cooked until tender and richly coated.</span></div>
          </div>
        </div>

        <div className="content-panel">
          <h2>See it in 3D</h2>
          <p>Return to the home page to rotate the bowl and explore the interactive food scene.</p>
          <Link className="pill" href="/">Open the 3D experience ↗</Link>
        </div>
      </section>
    </main>
  );
}
