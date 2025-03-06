import React, { useEffect } from "react";
import { useChartStore } from "../store/useChartStore";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChartStore();
  const { authUser } = useAuthStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [getMessages, selectedUser._id]);

  if (!isMessagesLoading) {
    return (
      <div className="flex flex-1 flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
      </div>
    );
  }
  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${
              message.sender._id === authUser._id ? "chat-end" : "chat-start"
            } `}
          >
            <div className="size-10 rounded-full border">
              <img
                src={
                  message.sender._id === authUser._id
                    ? authUser.profilePic
                    : selectedUser.profilePic
                }
                alt="profile pci"
              />
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {new Date(message.createdAt).toLocaleString()}
              </time>
            </div>
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
