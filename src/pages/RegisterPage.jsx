import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { MessageSquare, User, Mail, Eye } from "lucide-react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigninUp } = useAuthStore();
  const validateForm = () => {};
  const handleSubmit = (e) => {};
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">
                Get started with your free account
              </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-2/3"
          action="POST"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Full Name</span>
            </div>
            <div className="input input-bordered flex w-full items-center gap-2">
              <User className="size-4" />
              <input type="text" className="grow" placeholder="John Doe" />
            </div>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <div className="input input-bordered flex items-center gap-2">
              <Mail className="size-4" />
              <input
                type="text"
                className="grow"
                placeholder="example@mail.com"
              />
            </div>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password </span>
            </div>
            <div className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={`${showPassword} ? 'text' : password`}
                className="grow"
                value="password"
              />
              <Eye
                className="size-4"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
