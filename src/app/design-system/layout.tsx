import { Sidebar } from "@/src/features/design-system/components/sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar>
        <div>{children}</div>
      </Sidebar>
    </div>
  );
}
