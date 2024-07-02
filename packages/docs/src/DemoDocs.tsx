import clsx from "clsx";
import "./DemoDocs.scss";

const TitleComponent = ({ name }: { name: string }) => {
  return <h2>{`<${name} /> Demo`}</h2>;
};

type Props = (
  | {
      layout?: "row";
      rowFlow?: "column";
    }
  | {
      layout: "grid";
      cols?: number;
      innerCols?: number;
      innerFlow?: "row";
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
          "--demo-inner-columns": "innerCols" in props ? props.innerCols : "",
          "--demo-inner-flow": "innerFlow" in props ? props.innerFlow : "",
          "--demo-row-flow": "rowFlow" in props ? props.rowFlow : "",
        } as React.CSSProperties
      }
      className={sectionClassName}
    >
      {children}
    </section>
  );
};

DemoDocs.TitleComponent = TitleComponent;
