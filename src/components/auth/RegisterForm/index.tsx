"use client";

import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/api";
import { FormInput } from "../FormInput";
type RegisterFormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  isLoading: boolean;
  error?: string;
};

export function RegisterForm() {
  const [formData, setFormData] = useState<RegisterFormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    isLoading: false,
  });
  const [errors, setErrors] = useState<Partial<RegisterFormState>>({});

  const validateForm = () => {
    const newErrors: Partial<RegisterFormState> = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.acceptTerms) {
      newErrors.error = "You must accept the terms and conditions";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormData((prev) => ({ ...prev, isLoading: true }));
    try {
      const { email, password, name } = formData;
      const data = await auth.register({ email, password, name });

      console.log("Registration successful:", data);
      window.location.reload(); // or use router.refresh() if you want to refresh
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setFormData((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof RegisterFormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        id="name"
        name="name"
        label="Full Name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Enter your full name"
        icon={<User className="w-5 h-5 text-gray-400" />}
      />

      <FormInput
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Enter your email"
        icon={<Mail className="w-5 h-5 text-gray-400" />}
      />

      <FormInput
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        placeholder="Create a password"
        icon={<Lock className="w-5 h-5 text-gray-400" />}
      />

      <FormInput
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        placeholder="Confirm your password"
        icon={<Lock className="w-5 h-5 text-gray-400" />}
      />

      <div className="flex items-center">
        <input
          id="acceptTerms"
          name="acceptTerms"
          type="checkbox"
          checked={formData.acceptTerms}
          onChange={handleChange}
          className="h-4 w-4 text-brand-orange focus:ring-brand-orange border-gray-300 rounded"
        />
        <label
          htmlFor="acceptTerms"
          className="ml-2 block text-sm text-gray-700"
        >
          I agree to the{" "}
          <Link
            href="/termspage"
            className="text-brand-orange hover:text-brand-orange/90"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacypage"
            className="text-brand-orange hover:text-brand-orange/90"
          >
            Privacy Policy
          </Link>
        </label>
      </div>

      {errors.error && (
        <p className="text-sm text-red-600 text-center">{errors.error}</p>
      )}

      <Button type="submit" className="w-full" disabled={formData.isLoading}>
        {formData.isLoading ? "Creating account..." : "Create Account"}
      </Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <button
          type="button"
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width={20}
            height={20}
            className="w-5 h-5 mr-2"
          />
          Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg"
        >
          <Image
            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
            alt="Facebook"
            width={20}
            height={20}
            className="w-5 h-5 mr-2"
          />
          Facebook
        </button>
      </div>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-brand-orange hover:text-brand-orange/90 font-medium"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
