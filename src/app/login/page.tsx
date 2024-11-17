import { LoginForm } from "@/src/features/login/login-form";

export default function LoginPage() {
  return (
    <>
      <div className=" items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <LoginForm />
      </div>
    </>
  );
}
