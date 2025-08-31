import { useLogout } from "../Authentication/useLogout";
import Spinner from "../Spinner";

export default function AuthenticationLogout() {
  const { logout, isLogout, errorLogout } = useLogout();

  if (errorLogout) return <Error errorMessage={errorLogout} />;

  return (
    <>
      {isLogout ? (
        <Spinner />
      ) : (
        <button
          className="font-myFontBold text-[32px]"
          disabled={isLogout}
          onClick={logout}
        >
          Logout
        </button>
      )}
    </>
  );
}
