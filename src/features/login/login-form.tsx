export default function LoginForm() {
  return (
    <form
      action="submit"
      className="container mx-auto my-52 flex flex-col bg-base-200 p-3 rounded-md"
    >
      <label htmlFor="user-name">Username</label>
      <input type="text" name="" id="user-name" required className="input" />
      <label htmlFor="password">Password</label>
      <input type="text" name="" id="password" required className="input" />
      <div>
        <button className="btn my-2 bg-base-300">Join</button>
      </div>
    </form>
  );
}
