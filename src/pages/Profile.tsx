import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

function Profile() {
const {loading,data}  = useSelector((state:RootState)=>state.profile);
console.log(loading,data)
  return <div>Profile</div>;
}

export default Profile;
