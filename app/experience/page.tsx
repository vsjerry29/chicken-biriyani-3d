
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Craft" };

export default function ExperiencePage() {
  return (
    <main>
      <section className="page-intro">
        <div className="kicker">03 / Our craft</div>
        <h1>A feast for<br />the <em>senses.</em></h1>
        <p>The site combines procedural 3D food with camera controls, atmospheric lighting and responsive interactions.</p>
      </section>

      <section className="content-wrap">
        <div className="content-panel">
          <h2>Four parts of the craft</h2>
          <div className="steps">
            <div className="step"><strong>01</strong><div><h3>Build the aroma</h3><p>Whole spices establish the first layer of flavour.</p></div></div>
            <div className="step"><strong>02</strong><div><h3>Layer with care</h3><p>Rice and masala meet in a deliberate balance.</p></div></div>
            <div className="step"><strong>03</strong><div><h3>Let it settle</h3><p>Gentle heat gives the ingredients time to come together.</p></div></div>
            <div className="step"><strong>04</strong><div><h3>Serve the moment</h3><p>Fresh garnish and a hot plate finish the experience.</p></div></div>
          </div>
        </div>

        <div className="feature-list">
          <div className="feature"><b>Real-time 3D</b><span>Procedural bowl, rice, chicken and garnish rendered with Three.js.</span></div>
          <div className="feature"><b>WebGL</b><span>GPU-powered rendering through the React Three Fiber Canvas.</span></div>
          <div className="feature"><b>Interaction</b><span>Orbit controls let visitors drag to rotate the 3D food scene.</span></div>
        </div>

        <div className="content-panel" style={{ marginTop: 16 }}>
          <h2>Explore the scene</h2>
          <p>The 3D bowl is on the home page. Drag to rotate and scroll to explore the layout.</p>
          <Link className="pill" href="/">Return to home ↗</Link>
        </div>
      </section>
    </main>
  );
}
