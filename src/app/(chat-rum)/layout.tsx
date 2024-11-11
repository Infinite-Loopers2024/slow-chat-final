import Navbar from "@/src/ui/chat/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
