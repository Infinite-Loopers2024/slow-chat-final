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
      className={`btn ${style} w-full md:w-48 rounded-md`}
    >
      {text}
    </button>
  );
}
