import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar bg-purple-50">
      <div className="flex-1">
        <Link className="btn btn-ghost text-lg p-1 font-bold" href=".">
          ChatChill
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="px-2">
            <Link href="\chat\">Chat</Link>
          </li>
          <li>
            <Link href="\statistics\">Statistics</Link>
          </li>
          <li>
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
