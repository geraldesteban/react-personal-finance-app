import LogoutIcon from "../../assets/icon-logout.svg?react";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../ui/Spinner";
import { useLogout } from "./useLogout";

export default function AuthenticationLogout() {
  const { logout, isLogout, errorLogout } = useLogout();

  if (errorLogout) return <ErrorMessage errorMessage={errorLogout} />;

  return (
    <>
      {isLogout ? (
        <Spinner />
      ) : (
        <button disabled={isLogout} onClick={logout}>
          <LogoutIcon className="h-14 w-14 text-grey-500 hover:text-green" />
        </button>
      )}
    </>
  );
}
