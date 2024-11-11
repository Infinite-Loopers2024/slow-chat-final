export default function LoginPage() {
  return (
    <div>
      <form action="submit">
        <label htmlFor="user-name">Username</label>
        <input type="text" name="" id="user-name" />
        <label htmlFor="password">Password</label>
        <input type="text" name="" id="password" />
        <div>
          <button className="btn ">Join</button>
        </div>
      </form>
    </div>
  );
}
