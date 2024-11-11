export default function LoginForm() {
  return (
    <form action="submit">
      <label htmlFor="user-name">Username</label>
      <input type="text" name="" id="user-name" />
      <label htmlFor="password">Password</label>
      <input type="text" name="" id="password" />
      <div>
        <button className="btn ">Join</button>
      </div>
    </form>
  );
}
