import { DocumentData } from 'firebase/firestore'
import Image from 'next/image';
import React from 'react'

type Props = {
    message: DocumentData;
}

function Message({
    message
}: Props) {
  
  const isChatGpt = message.user.name === "ChatGPT Clone";

  return (
    <div className={`py-5 text-white ${isChatGpt && `bd-[#434654]`}`}>
        <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
        <img src={message.user.avatar} alt="" className="w-8 h-8" />
        <p className='pt-1 text-sm'>
            {message.text}
        </p>
    </div>
    </div>
  )
}

export default Message