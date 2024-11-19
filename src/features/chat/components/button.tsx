import { MouseEventHandler } from "react";

type Props = {
  color: string;
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({ color, text, type = "button", onClick }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${color} m-1 w-full mb-4 md:mb-0 md:w-4/12`}
    >
      {text}
    </button>
  );
}
