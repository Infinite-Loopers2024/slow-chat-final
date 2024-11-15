import Link from "next/link";

export default function LoginForm() {
  return (
    <form
      action="submit"
      className="container mx-auto my-52 flex flex-col bg-base-300 p-3 rounded-md w-3/6"
    >
      <label htmlFor="user-name">Username</label>
      <input type="text" name="" id="user-name" required className="input" />
      <label htmlFor="password">Password</label>
      <input type="text" name="" id="password" required className="input" />
      <div>
        <button className="btn my-2 px-6 bg-base-300">
          <Link href="/chat">Join</Link>
        </button>
      </div>
    </form>
  );
}
