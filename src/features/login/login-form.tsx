import { signIn } from "./actions";

export function LoginForm() {
  return (
    <form
      className="container mx-auto my-52 flex flex-col bg-base-300 p-3 rounded-md w-3/6 shadow-md"
      action={signIn}
    >
      <label htmlFor="user-name">Username</label>
      <input type="text" name="user-name" id="user-name" className="input" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" className="input" />
      <div>
        <button className="btn btn-accent my-2 px-6">Join</button>
      </div>
    </form>
  );
}
