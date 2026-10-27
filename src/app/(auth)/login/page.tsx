import LoginForm from "@/features/auth/components/LoginForm";
import { Metadata } from "next";

export const instant = false;

export const metadata: Metadata = {
  title: "Login Page",
};

export default function LoginPage() {
  return <LoginForm />;
}
