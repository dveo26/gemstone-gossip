import { BsSend } from "react-icons/bs"
import { useState } from "react"
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, SetMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const handleSubmit =async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    SetMessage("");
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input
            
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 bg-[#1B4965] border-[#BEE9E8] text-white'
          placeholder='Send a message'
          value={message}
          onChange={(e) => SetMessage(e.target.value)}
        />
        <button type='submit' className="absolute inset-y-0 end-0 flex items-center pe-3 " style={{color:'#5FA8D3'}} >
          {loading ? <div className='loading loading-spinner'></div> :< BsSend />}
        </button>

      </div>
    </form>
  )
}
export default MessageInput;
