import Link from "next/link";

export function LoginForm() {
  return (
    <form className="container mx-auto my-52 flex flex-col bg-base-300 p-3 rounded-md w-3/6 shadow-md">
      <label htmlFor="user-name">Username</label>
      <input type="text" name="" id="user-name" className="input" />
      <label htmlFor="password">Password</label>
      <input type="text" name="" id="password" className="input" />
      <div>
        <button className="btn btn-accent my-2 px-6">
          <Link href="/chat">Join</Link>
        </button>
      </div>
    </form>
  );
}
