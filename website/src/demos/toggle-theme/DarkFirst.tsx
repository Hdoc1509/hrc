import ThemeToggle from "./Toggle.tsx";
import './Dark.css';

export function DarkFirst() {
  return (
    <section className="dark-paragraph">
      <ThemeToggle />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi
        voluptate hic asperiores necessitatibus aspernatur ea molestias ab
        voluptatibus magnam.
      </p>
    </section>
  );
}
