export default function Buttons() {
  return (
    <>
      <h2 className="text-3xl text-center font-bold justify-self-start ">
        Buttons
      </h2>
      <div className="flex justify-center items-center h-screen flex-col">
        <button className="btn btn-accent rounded-lg m-1 w-full mb-4 md:mb-0 md:w-10/12 w">
          Primary
        </button>
        <button className="btn btn-secondary rounded-md m-1 w-full mb-4 md:mb-0 md:w-10/12">
          Secondary
        </button>
        <button className="btn btn-primary rounded-lg m-1 w-full mb-4 md:mb-0 md:w-10/12">
          Accent
        </button>
        <button className="btn btn-disabled rounded-md m-1 w-full mb-4 md:mb-0 md:w-10/12">
          Disabled
        </button>
      </div>
    </>
  );
}
