import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar bg-base-300">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href=".">
          logo
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
        </ul>
      </div>
    </nav>
  );
}
