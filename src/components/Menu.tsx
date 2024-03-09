import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Menu({ children }: Props) {
  return <div className="h-flex">{children}</div>;
}

export default Menu;
