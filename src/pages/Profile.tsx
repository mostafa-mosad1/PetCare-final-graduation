import Addpet from "@/components/Addpet";
import ChangeImage from "@/components/ChangeImage";
import UpdateProfile from "@/components/UpdateProfile";
import { Ipet } from "@/interface";
import {
  useDeletePetsUserMutation,
  useGetPetsUserQuery,
} from "@/redux/features/Pet/PetSlice";
import { RootState } from "@/redux/store";
import { Contact, MapPin, Phone, Trash2, Type } from "lucide-react";
import { useSelector } from "react-redux";
import BeatLoader from "react-spinners/esm/BeatLoader";

function Profile() {
  const { profileData } = useSelector((state: RootState) => state.profile);
  const { isLoading, data } = useGetPetsUserQuery("");
  const [deletePet] = useDeletePetsUserMutation();
  const parsedData = localStorage.getItem("UserProfileData");
  const userProfileData = parsedData ? JSON.parse(parsedData) : null;

  return (
    <>
      <div className="flex my-4 flex-col md:flex-row">
        <div className="w-full md:w-2/5 relative text-foreground mx-auto text-center bg-mains/50 rounded-md  py-10 ">
          <div className="mx-auto w-52 h-52 rounded-full overflow-hidden bg-red-400">
            <img
              className="w-full"
              src={`http://127.0.0.1:8000/assets/images/${
                profileData ? profileData?.user.img : userProfileData.img
              }`}
              alt=""
            />
          </div>
          <h2 className="capitalize text-2xl">
            {profileData
              ? profileData?.user.firstname
              : userProfileData.firstname}
            {profileData
              ? profileData?.user.lastname
              : userProfileData.lastname}
          </h2>
          <p>ID : {profileData ? profileData?.user.id : userProfileData.id}</p>
          <p className="m-9 mx-auto w-3/4 h-1 bg-foreground "></p>
          <div className="flex w-2/5 mx-auto text-center  my-5 justify-start gap-4 ">
            <MapPin />
            {profileData ? profileData?.user.address : userProfileData.address}
          </div>
          <div className="flex w-2/5 mx-auto text-center  my-5 justify-start gap-4 ">
            <Contact />
            <p>
              {profileData
                ? profileData?.user.username
                : userProfileData.username}
            </p>
          </div>
          <div className="flex w-2/5 mx-auto text-center  my-5 justify-start gap-4 ">
            <Phone />
            <p>
              {profileData
                ? profileData?.user.contact_number
                : userProfileData.contact_number}
            </p>
          </div>
          <div className="flex w-2/5 mx-auto text-center  my-5 justify-start gap-4 ">
            <Type />
            <p>{profileData ? profileData?.user.type : userProfileData.type}</p>
            <UpdateProfile
              firstName={
                profileData
                  ? profileData?.user.firstname
                  : userProfileData.firstname
              }
              lastName={
                profileData
                  ? profileData?.user.lastname
                  : userProfileData.lastname
              }
              Address={
                profileData
                  ? profileData?.user.address
                  : userProfileData.address
              }
            />
            <ChangeImage />
          </div>
        </div>
        <div className="flex-1 relative text-4xl p-4 bg--400">
          <div className="absolute cursor-pointer top-4 right-4 text-foreground">
            <Addpet userId={profileData?.user.id} />
          </div>{" "}
          <h2 className="capitalize text-4xl text-center pt-4 font-bold">
            My Animals
          </h2>
          <p className="w-[8%] mx-auto h-1 bg-foreground my-2"></p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2  my-8">
            {data?.pets?.length == 0 ? (
              <p className="text-center text-2xl mx-auto">No Animals </p>
            ) : isLoading ? (
              <div className="flex justify-center m-20 items-center gap-4">
                <BeatLoader color="#0e305b" size={30} />
              
              </div>
            ) : (
              data?.pets?.map((pet: Ipet) => (
                <div
                  key={pet.id}
                  className=" overflow-hidden text-center border-2 rounded-md border-blue-200 hover:-translate-y-4 transition-all duration-200  "
                >
                  <div className="relative">
                    <Trash2
                      onClick={() => {
                        deletePet(pet.id);
                      }}
                      size={"30px"}
                      className="absolute z-10 cursor-pointer top-4 right-4  text-red-400"
                    />
                    <img
                      src={`http://127.0.0.1:8000/assets/images/${pet.img}`}
                      className=" object-cover w-full h-52"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black opacity-10 " />
                  </div>
                  <div className="p-2 ">
                    <h2 className="font-semibold text-lg capitalize">
                      Name : {pet.name}
                    </h2>
                    <h2 className="font-semibold text-lg capitalize">
                      Vaccines : {pet.vaccines}
                    </h2>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
