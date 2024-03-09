import { ReactNode } from "react";

interface Props {
  header: string;
  children?: ReactNode[];
}

function MenuItem({ header, children }: Props) {
  return (
    <>
      <button>{header}</button>
      <ul className="dropdown-menu">
        {children?.length != undefined &&
          children.map((item) => <li className="dropdown-item">{item}</li>)}
      </ul>
    </>
  );
}

export default MenuItem;
