import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  isAllow: boolean;
  path: string;
  children: ReactNode;
}
function ProtectRoute({ isAllow, path, children }: IProps) {
  if (!isAllow) return <Navigate to={path} />;
  return children;
}

export default ProtectRoute;
