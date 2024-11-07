import { Contact, MapPin, Phone, Type } from "lucide-react";

function Profile() {
  // const { profileData } = useSelector((state: RootState) => state.profile);
  // console.log(profileData);
  return (
    <>
      <div className="flex">
        <div className="w-2/5 relative text-foreground mx-auto text-center bg-mains/50 py-10 border border-foreground">
          <div className="mx-auto w-52 h-52 rounded-full overflow-hidden bg-red-400">
            <img className="w-full" src="" alt="" />
          </div>
          <h2 className="capitalize text-2xl">mohamed rady</h2>
          <p>ID : 46346874</p>
          <p className="m-9 mx-auto w-3/4 h-1 bg-foreground "></p>
          <div className="flex w-2/5 mx-auto text-center  my-5 justify-start gap-4 ">
            <MapPin />
            25 main street cairo
          </div>
          <div className="flex w-2/5 mx-auto text-center  my-5 justify-start gap-4 ">
            <Contact /> 
            <p>rahgh2556</p>
          </div>
          <div className="flex w-2/5 mx-auto text-center  my-5 justify-start gap-4 ">
            <Phone />
            <p>768376767/8</p>
          </div>
          <div className="flex w-2/5 mx-auto text-center  my-5 justify-start gap-4 ">
          <Type />
          <p>customer</p>
          </div>
        </div>
        <div className="flex-1 text-4xl ps-4 bg-cyan-400">pets</div>
      </div>
    </>
  );
}

export default Profile;
