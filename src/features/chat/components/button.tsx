import { MouseEventHandler } from "react";

type Props = {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: string;
};

export function Button({ style, text, type = "button", onClick }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${style} m-1 w-full mb-4 md:mb-0 md:w-4/12`}
    >
      {text}
    </button>
  );
}
