import { AuthLayout } from "@/components/auth/layout/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import React from "react";

export default function Login() {
  return (
    <AuthLayout
      title="Welcome back!"
      subtitle="Sign in to continue your travel journey"
    >
      <LoginForm />
    </AuthLayout>
  );
}
