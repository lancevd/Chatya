import React from 'react'

const AuthimagePattern = ({title, subtitle}) => {
  return (
    <div className="hidden items-center justify-center bg-base-200 p-12 lg:flex">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
          alt=""
        />
        <h1 className="text-2xl font-bold mt-2">{title}</h1>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
}

export default AuthimagePattern