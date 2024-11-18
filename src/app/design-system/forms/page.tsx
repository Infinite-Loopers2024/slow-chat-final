export default function Forms() {
  return (
    <>
      <input
        className="input input-border input-accent w-full max-w-xs m-3 rounded"
        placeholder="type here"
      />
      <input
        className="input input-border input-primary w-full max-w-xs m-3 rounded"
        placeholder="type here"
      />
      <div className=" flex flex-col">
        <input
          className="input input-border focus:border-pink-300 focus:outline-pink-500 w-full max-w-xs m-3 rounded border-pink-500 text-pink-600 "
          placeholder="Invalid password"
          id="password"
          name="password"
        />
        <p className="mt-2 text-pink-600 text-sm pl-4">
          Please provide a valid password
        </p>
      </div>
    </>
  );
}
