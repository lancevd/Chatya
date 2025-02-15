import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    await updateProfile(formData);
  };
  return (
    <div className="h-screen pt-20">
      <div className="max-w-2l mx-auto p-4 space-y-8">
        <div className="bg-base-300 rounded-xl p-6 w-4/5 lg:w-3/5 mx-auto space-y-8">
          <div className="text-center">
            <div className="text-2xl font-semibold">Profile</div>
            <p className="mt-2">Your Profile Information</p>
          </div>
          {/* Avatar */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src={authUser?.profilePic || "/avatar.png"}
                alt="User Profile"
                className="size-32 object-cover border-4 rounded-full"
              />
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-300 ${
                  isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                }`}
              >
                <Camera className="size-5 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
          </div>
          <p className="text-sm text-center text-zinc-400">
            {isUpdatingProfile
              ? "Uploading..."
              : "Click the camera icon to upload your profile picture"}
          </p>

          {/* User Info */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex gap-2 items-center">
                <User className="size-4" />
                Full Name
              </span>
            </div>
            <div className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" value={authUser.fullName} disabled />
            </div>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text flex gap-2 items-center">
                <Mail className="size-4" />
                Email Address
              </span>
            </div>
            <div className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" value={authUser.email} disabled />
            </div>
          </label>
          <br />
          <div className="w-[95%] mx-auto">
            <p className="font-bold">Account Information</p>
            <br />
            <label className="label">
              <p>Sember Since</p>
              <p>{authUser.createdAt}</p>
            </label>
            <hr />
            <label className="label">
              <p>Account Status</p>
              <p>{authUser.createdAt} Active</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
