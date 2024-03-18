import PropTypes from "prop-types";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-cyan-600 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-cyan-600" : ""}
      `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-x1">{emoji}</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
Conversation.propTypes = {
  conversation: PropTypes.shape({
    profilePic: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    // Add other properties here as needed
  }).isRequired,
  lastIdx: PropTypes.bool.isRequired,
  emoji: PropTypes.string.isRequired,
};
export default Conversation;
