import ThemeToggle from "./Toggle.tsx";
import "./Light.scss";

export function LightFirst() {
  return (
    <section className="light-paragraph">
      <ThemeToggle />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi
        voluptate hic asperiores necessitatibus aspernatur ea molestias ab
        voluptatibus magnam.
      </p>
    </section>
  );
}
