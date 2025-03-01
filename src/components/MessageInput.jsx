import React, { useRef, useState } from 'react'

const MessageInput = () => {
    const [text, setText] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const handleInputRef = useRef(null);
  return (
    <div>MessageInput</div>
  )
}

export default MessageInput