import { LogIn, LogOut, MessageSquare, Settings, User } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const handleLogout = async () => {
    await logout();
    window.location.href = "/login";
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl flex items-center">
          <MessageSquare className="size-6 text-primary" /> ChatYa
        </Link>
      </div>
      <div className="flex gap-1">
        {authUser == null ? (
          <div className="flex-none">
            <ul className="menu menu-horizontal flex gap-2 px-1">
              <Link
                to="/login"
                className="flex hover:bg-primary/20 p-2 rounded items-center gap-1"
              >
                <LogIn className="size-4" />{" "}
                <p className="hidden md:block">Login</p>
              </Link>
              <Link
                to="/settings"
                className="flex hover:bg-primary/20 p-2 rounded items-center gap-1"
              >
                <Settings className="size-4" />{" "}
                <p className="hidden md:block">Settings</p>
              </Link>
            </ul>
          </div>
        ) : (
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User" src={authUser?.profilePic || "/avatar.png"} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link
                    className="flex hover:bg-primary/20 p-2 rounded gap-1"
                    to="/profile"
                  >
                    <User className="size-4" />
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex hover:bg-primary/20 p-2 rounded gap-1"
                    to="/settings"
                  >
                    <Settings className="size-4" />
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex hover:bg-primary/20 p-2 rounded gap-1"
                    onClick={handleLogout}
                  >
                    <LogOut className="size-4" /> Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
