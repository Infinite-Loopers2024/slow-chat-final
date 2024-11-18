import { signIn } from "./actions";

export function LoginForm() {
  return (
    <div className="flex min-h-full flex-col justify-center items-center h-screen bg-slate-100">
      <h1 className="pb-12 text-xl font-bold">Log in to your chat </h1>
      <form
        className="container mx-auto flex flex-col justify-center items-center rounded-lg w-10/12 md:w-4/12 shadow-md p-8 border-2 border-primary bg-white"
        action={signIn}
      >
        <label htmlFor="user-name">Username</label>
        <input
          type="text"
          name="name"
          id="name"
          className="input input-bordered input-primary w-10/12 m-3 mb-6"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="input input-bordered input-primary w-10/12 m-3"
        />
        <div className="flex justify-center items-center">
          <button className="btn btn-accent px-6 my-6">Join</button>
        </div>
      </form>
    </div>
  );
}
