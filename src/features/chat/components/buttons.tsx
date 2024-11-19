import { ReactNode } from "react";

type Props = {
  color: string;
  text: string;
  type?: ReactNode;
};

export function Button({ color, text, type }: Props) {
  return (
    <button
      className={`btn ${color} m-1 w-full mb-4 md:mb-0 md:w-4/12`}
      type={type}
    >
      {text}
    </button>
  );
}
