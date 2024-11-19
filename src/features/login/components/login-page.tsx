import { LoginForm } from "./login-form";

export function LoginPage() {
  return (
    <div className="flex min-h-full flex-col justify-center items-center h-screen bg-slate-100">
      <h1 className="pb-12 text-xl font-bold">Log in to your chat </h1>
      <LoginForm />
    </div>
  );
}
