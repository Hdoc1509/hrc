import clsx from "clsx";
import "./DemoDocs.scss";

const TitleComponent = ({ name }: { name: string }) => {
  return <h2>{`<${name} /> Demo`}</h2>;
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
  withDisabled?: boolean;
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
      {children}
    </section>
  );
};

DemoDocs.TitleComponent = TitleComponent;
