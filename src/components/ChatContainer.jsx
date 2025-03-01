import React, { useEffect } from "react";
import { useChartStore } from "../store/useChartStore";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChartStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [getMessages, selectedUser._id]);

//   if (isMessagesLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <ChatHeader />
      <p>Messages...</p>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
