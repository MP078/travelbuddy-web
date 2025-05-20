"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import Image from "next/image";
import { auth } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { FormInput } from "../FormInput";
import { useUserStore } from "@/store/useUserStore";

type AuthFormState = {
  email: string;
  password: string;
  isLoading: boolean;
};

export function LoginForm() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const [formData, setFormData] = useState<AuthFormState>({
    email: "",
    password: "",
    isLoading: false,
  });
  const [errors, setErrors] = useState<Partial<AuthFormState>>({});
  const [authError, setAuthError] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Partial<AuthFormState> = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    if (!validateForm()) return;

    setFormData((prev) => ({ ...prev, isLoading: true }));

    try {
      const { email, password } = formData;
      const data = await auth.login(email, password);

      setUser({
        email: data.email,
        name: data.name,
        image_url: "",
        verified: false,
        total_trips: 0,
        travel_days: 0,
        connections: 0,
        member_since: "",
        interests: [],
        languages: [],
        website: "",
        certifications: [],
        bio: "",
        about: "",
        location: "",
        phone: "",
      });

      router.push("/dashboard");
    } catch (error: unknown) {
      const err = error as { status?: number; response?: { status?: number } };
      if (err?.status === 401 || err?.response?.status === 401) {
        setAuthError("Incorrect email or password.");
      } else {
        setAuthError("Login failed. Please try again.");
      }
      console.error("Login failed:", error);
    } finally {
      setFormData((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof AuthFormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {authError && (
        <div className="text-red-600 text-center text-sm font-medium">
          {authError}
        </div>
      )}
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
        placeholder="Enter your password"
        icon={<Lock className="w-5 h-5 text-gray-400" />}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 text-brand-orange focus:ring-brand-orange border-gray-300 rounded"
          />
          <label
            htmlFor="remember"
            className="ml-2 block text-sm text-gray-700"
          >
            Remember me
          </label>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm text-brand-orange hover:text-brand-orange/90"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" className="w-full" disabled={formData.isLoading}>
        {formData.isLoading ? "Signing in..." : "Sign In"}
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
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-brand-orange hover:text-brand-orange/90 font-medium"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
