import About from "@/components/Homepage/About";
import styles from "./page.module.css";

import Hero from "@/components/Homepage/Hero";
import ButtonLink from "@/components/Link/ButtonLink";
import Mission from "@/components/Homepage/Mission";
import Testimonials from "@/components/Homepage/Testimonials";
import Contact from "@/components/Homepage/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Mission />
      <Testimonials />
      <Contact />
    </main>
  );
}
