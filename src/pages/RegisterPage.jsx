import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { MessageSquare, User, Mail, Eye, Lock, Loader2 } from "lucide-react";
import { Link } from "react-router";
import AuthimagePattern from "../components/AuthimagePattern";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();
  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) return toast.error("Invalid email address");
    if (!formData.password.trim()) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters long");

    return true;
  
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();
    if (success) 
    signup(formData);
  };
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
          className="space-y-6 w-4/5 lg:w-2/3"
          action="POST"
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Full Name</span>
            </div>
            <div className="input input-bordered flex w-full items-center gap-2">
              <User className="size-4" />
              <input
                type="text"
                className="grow"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password </span>
            </div>
            <div className="input input-bordered flex items-center gap-2">
              <Lock className="size-4" />
              <input
                type={showPassword ? "text" : "password"}
                className="grow"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <Eye
                className="size-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </label>
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isSigningUp}
          >
            {isSigningUp ? (
              <>
                <Loader2 className="size-4 animate-spin" />
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="text-center">
          <p className="text-base-content/60">
            Already have an account?
            <Link to="/login" className="text-primary">
              &nbsp;Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right side */}
      <AuthimagePattern
        title="Create Account"
        subtitle="Get started with your free account"
      />
    </div>
  );
};

export default RegisterPage;
