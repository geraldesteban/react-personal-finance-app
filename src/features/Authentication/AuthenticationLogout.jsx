import { useLogout } from "./useLogout";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";

export default function AuthenticationLogout() {
  const { logout, isLogout, errorLogout } = useLogout();

  if (errorLogout) return <ErrorMessage errorMessage={errorLogout} />;

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
