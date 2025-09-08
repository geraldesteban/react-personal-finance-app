import { useUser } from "../Authentication/useUser";

export default function AuthenticationUsername() {
  const { user } = useUser();
  const { display_name } = user.user_metadata;

  return <h2 className="font-myFontBold text-grey-900">{display_name}</h2>;
}
