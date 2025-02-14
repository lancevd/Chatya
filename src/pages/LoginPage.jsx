import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthimagePattern from "../components/AuthimagePattern";
import { MessageSquare, User, Mail, Lock, Eye, Loader2 } from "lucide-react";
import { Link } from "react-router";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { login, isLoggingIn } = useAuthStore();

  const validateForm = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();

    login(formData);
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
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Log in to your account</p>
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
            disabled={isLoggingIn}
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="size-4 animate-spin" />
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <br />
        <div className="text-center">
          <p className="text-base-content/60">
            Don't have an account?
            <Link to="/register" className="text-primary">
              &nbsp;Register
            </Link>
          </p>
        </div>
      </div>
      {/* Right side */}
      <AuthimagePattern
        title="Welcome Back!"
        subtitle="Login to your ChatYa account."
      />
    </div>
  );
};

export default LoginPage;
