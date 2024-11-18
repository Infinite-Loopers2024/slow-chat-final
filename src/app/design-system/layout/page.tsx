export default function Page() {
  return (
    <div className="flex flex-col justify-center">
      <section className="w-8/12 md:w-4/12 flex flex-col items-center justify-center flex-wrap">
        <div className="stats stats-vertical shadow w-60 border-2 border-accent">
          <div>
            <div className="stat shadow place-items-center">
              <div className="stat-title">Fetch date</div>{" "}
              <div className="stat-value text-sm">2024-11-18 12:10:13</div>
              <h3 className="stat-title">Fetch count</h3>{" "}
              <p className="stat-value text-sm">3</p>
              <h3 className="stat-title">Messages on cooldown</h3>{" "}
              <p className="stat-value text-sm">1</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-8/12 md:w-4/12 flex flex-col items-center justify-center pt-4 flex-wrap">
        <div className="stats stats-vertical shadow mb-14 mt-4 w-60 border-2 border-accent md:mt-0">
          <div className="stat shadow place-items-center">
            <p className="stat-value text-sm">Peter</p>
            <p className="stat-title">Message count</p>{" "}
            <p className="stat-value text-sm">3</p>
          </div>
        </div>
      </section>
      <section className="chat chat-start">
        <div className="chat-header">
          Peter
          <div className="chat-bubble chat-bubble-primary">
            <p>Hej, jag heter Peter!</p>
          </div>
          <p>12:34</p>
        </div>
      </section>
      <section className="chat chat-end">
        <div className="chat-header">
          Ann-Marie
          <div className="chat-bubble chat-bubble-secondary">
            <p>Hej, jag heter Ann-Marie!</p>
          </div>
          <p>12:34</p>
        </div>
      </section>
    </div>
  );
}
