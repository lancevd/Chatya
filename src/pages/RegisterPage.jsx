import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

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
  return <div>RegisterPage</div>;
};

export default RegisterPage;
