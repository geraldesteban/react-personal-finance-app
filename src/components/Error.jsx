export default function Error({ errorMessage }) {
  return (
    <div className="flex justify-center items-center">
      <p className="text-red">{errorMessage}</p>
    </div>
  );
}
