import { ReactNode } from "react";

interface Props {
  children?: ReactNode[];
}

function Calendar({ children }: Props) {
  return (
    <>
      <a></a>
      <table>{children}</table>
    </>
  );
}

export default Calendar;
