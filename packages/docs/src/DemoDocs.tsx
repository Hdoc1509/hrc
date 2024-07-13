import clsx from "clsx";
import "./DemoDocs.scss";

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
  withDisabled?: boolean;
  componentName?: string;
};

const createStyle = (props: object | Props) =>
  ({
    "--demo-columns": "cols" in props ? props.cols : "",
  }) as React.CSSProperties;

export const DemoDocs = ({
  layout,
  children,
  className,
  withDisabled,
  componentName,
  ...props
}: Props) => {
  const sectionClassName = clsx(
    "demo-docs",
    {
      [`demo-docs--${layout}`]: layout,
      "demo-docs--with-disabled": withDisabled,
    },
    className,
  );

  return (
    <section style={createStyle(props)} className={sectionClassName}>
      {componentName && <h2>{`<${componentName} /> Demo`}</h2>}
      {children}
    </section>
  );
};
