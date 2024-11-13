import { Navbar } from "@/src/features";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
