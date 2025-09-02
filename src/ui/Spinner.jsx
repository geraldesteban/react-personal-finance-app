export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-[40px] aspect-square rounded-full animate-spin"
        style={{
          background: `radial-gradient(farthest-side, #277C78 94%, #0000) top/10px 10px no-repeat,
                       conic-gradient(#0000 30%, #277C78)`,
          WebkitMask:
            "radial-gradient(farthest-side, #0000 calc(100% - 5px), #000 0)",
        }}
      ></div>
    </div>
  );
}
