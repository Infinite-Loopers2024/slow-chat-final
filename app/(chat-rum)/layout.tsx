export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <nav>
          <a href=".">logo</a>
          <ul>
            <li>
              <a href="\chat\">Chat</a>
            </li>
            <li>
              <a href="\statistics\">Statistcs</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
}
