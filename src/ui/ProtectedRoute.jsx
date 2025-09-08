import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/Authentication/useUser";
import Spinner from "./Spinner";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLogin, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLogin) navigate("/login");
    },
    [isAuthenticated, isLogin, navigate]
  );

  if (isLogin)
    return (
      <div className="flex justify-center items-center bg-[#F2F3F7] h-screen">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
}
