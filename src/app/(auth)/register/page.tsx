import { AuthLayout } from "@/components/auth/layout/AuthLayout";
import { RegisterForm } from "@/components/auth/RegisterForm";
import React from "react";

export default function Register() {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join our community of travelers"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
