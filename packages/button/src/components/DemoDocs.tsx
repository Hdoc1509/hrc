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
      cols?: 3 | 4 | 5 | 6 | 7 | 8 | 9;
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
    "cols" in props && `demo-docs--columns-${props.cols}`,
    className,
  );

  return <section className={sectionClassName}>{children}</section>;
};

DemoDocs.TitleComponent = TitleComponent;
