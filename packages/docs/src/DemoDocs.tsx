import clsx from "clsx";
import "./DemoDocs.scss";

const TitleComponent = ({ name }: { name: string }) => {
  return <h2>&lt;{name} /&gt; Demo</h2>;
};

type Props = (
  | {
      layout?: "row";
    }
  | {
      layout: "grid";
      cols?: number;
    }
) & {
  className?: string;
  children: React.ReactNode;
};

export const DemoDocs = ({
  layout,
  children,
  className,
  ...props
}: React.PropsWithChildren<Props>) => {
  const sectionClassName = clsx(
    "demo-docs",
    {
      [`demo-docs--${layout}`]: layout,
    },
    className,
  );

  return (
    <section
      style={
        {
          "--demo-columns": "cols" in props ? props.cols : "",
        } as React.CSSProperties
      }
      className={sectionClassName}
    >
      {children}
    </section>
  );
};

DemoDocs.TitleComponent = TitleComponent;
