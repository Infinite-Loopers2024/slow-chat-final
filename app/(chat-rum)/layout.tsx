import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <nav>
          <Link href=".">logo</Link>
          <ul>
            <li>
              <Link href="\chat\">Chat</Link>
            </li>
            <li>
              <Link href="\statistics\">Statistics</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
}
