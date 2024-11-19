"use client";

import { redirect } from "next/navigation";
import Image from "next/image";

export default function Home() {
  function onClick() {
    redirect("/login");
  }
  return (
    <main className="main h-screen bg-primary flex justify-center items-center">
      <section className="hero p-8">
        <div className="hero-content flex flex-col text-center md:flex-row">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">ChatChill</h1>
            <p className="py-6">
              Take it easy! Fetch new messages daily or twice a week—stress-free
              chatting at its finest.
            </p>
            <button className="btn btn-accent my-2 px-6" onClick={onClick}>
              Log in
            </button>
          </div>
          <Image
            src="/chat.png"
            width={400}
            height={400}
            alt="Picture of the slow chat application"
            className="md:ml-10 pt-0 mt-6 md:mt-0 shadow-2xl rounded-lg"
          />
        </div>
      </section>
    </main>
  );
}
