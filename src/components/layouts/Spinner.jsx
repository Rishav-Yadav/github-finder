import spinner from "../assets/spinner.png";
function Spinner() {
  return (
    <div className="mt-20 text-center mx-auto w-100 block">
      <img
        className="text-center mx-auto block"
        width={100}
        src={spinner}
        alt="Spinner"
      ></img>
    </div>
  );
}
export default Spinner;
