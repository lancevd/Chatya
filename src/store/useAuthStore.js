import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const response = await axiosInstance.get("/auth/check");

      set({ authUser: response.data });
    } catch (error) {
      console.log("Error checking auth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });

    try {
      const response = await axiosInstance.post("/auth/register", data);
      set({ authUser: response.data });
      toast.success("Account created successfully!")
      console.log(response.data);
    } catch (error) {
      toast.error(error.response.data.message)
      console.log("Error signing up:", error);
    } finally {
      set({ isSigningUp: false });
    }
  },

}));
