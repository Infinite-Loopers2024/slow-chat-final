"use client";

import { redirect } from "next/navigation";

export default function Home() {
  function onClick() {
    redirect("/login");
  }
  return (
    <>
      <main className="main">
        <section className="hero p-8">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">ChatChill</h1>
              <p className="py-6">
                Take it easy! Fetch new messages daily or twice a
                week—stress-free chatting at its finest.
              </p>
              <button className="btn btn-accent my-2 px-6" onClick={onClick}>
                Log in
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
