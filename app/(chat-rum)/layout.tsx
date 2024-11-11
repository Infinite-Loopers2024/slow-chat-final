import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <nav className="navbar bg-base-100">
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
      </div>
      <div>{children}</div>
    </div>
  );
}
