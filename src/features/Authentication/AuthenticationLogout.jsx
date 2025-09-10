import LogoutIcon from "../../assets/icon-logout.svg?react";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useLogout } from "./useLogout";

export default function AuthenticationLogout() {
  const { logout, isLogout } = useLogout();

  return (
    <>
      {isLogout ? (
        <Spinner />
      ) : (
        <Button onClick={logout}>
          <LogoutIcon className="h-14 w-14 text-grey-500 hover:text-green" />
        </Button>
      )}
    </>
  );
}
