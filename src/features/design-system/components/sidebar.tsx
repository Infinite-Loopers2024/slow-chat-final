import Link from "next/link";

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input
        type="checkbox"
        name="my-drawer"
        id="my-drawer"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-btn lg:hidden"
        >
          open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer"
          aria-label="close-sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <Link href="\design-system\buttons">Butttons</Link>
            <Link href="\design-system\forms">Forms</Link>
            <Link href="\design-system\colors">Colors</Link>
            <Link href="/layout">Layout</Link>
            <Link href="\design-system\typography">Typography</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
