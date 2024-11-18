export default function Buttons() {
  return (
    <>
      <div className="container">
        <button className="btn btn-accent rounded-lg m-1 w-full mb-4 md:mb-0 md:w-4/12 w">
          Primar
        </button>
        <button className="btn btn-secondary rounded-md m-1 w-full mb-4 md:mb-0 md:w-4/12">
          Secondary
        </button>
        <button className="btn btn-primary rounded-lg m-1 w-full mb-4 md:mb-0 md:w-4/12">
          Accent
        </button>
        <button className="btn btn-disabled rounded-md m-1 w-full mb-4 md:mb-0 md:w-4/12">
          Disabled
        </button>
      </div>
    </>
  );
}
