import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useChartStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const response = await axiosInstance.get("/messages/users");
      set({ users: response.data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
    set({ isUsersLoading: false });
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const response = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: response.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  // sendMessage: async (messageData) => {
  //   const { selectedUser, messages } = get();
  //   console.log(messageData);
  //   try {
  //     const response = await axiosInstance.post(
  //       `/messages/send/${selectedUser._id}`,
  //       messageData
  //     );
  //     set({ messages: [...messages, response.data] });
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   }
  // },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();

    // Add this check
    if (!selectedUser) {
      toast.error("Please select a contact first");
      return;
    }

    try {
      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );
      set({ messages: [...messages, res.data] });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message");
    }
  },

  // todo: optimize this one later
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
