export default function Error({ error }) {
  return (
    <div className="flex justify-center items-center">
      <p className="text-red">{error}</p>
    </div>
  );
}
