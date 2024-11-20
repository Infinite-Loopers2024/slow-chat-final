import { signIn } from "../actions";
import { Button } from "@/src/features";

export function LoginForm() {
  return (
    <form
      className="container mx-auto flex flex-col justify-center items-center rounded-lg w-10/12 md:w-4/12 shadow-md p-8 border-2 border-primary bg-white"
      action={signIn}
    >
      <label htmlFor="user-name">Username</label>
      <input
        type="text"
        name="name"
        id="name"
        className="input input-bordered input-primary w-10/12 m-3 mb-6 rounded-md"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        className="input input-bordered input-primary w-10/12 m-3 rounded-md"
      />
      <div className="flex justify-center items-center">
        <Button style="btn-accent px-6 my-6" text="Join" type="submit" />
      </div>
    </form>
  );
}
