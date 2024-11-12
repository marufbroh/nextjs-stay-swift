"use client";

import { login } from "@/app/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const res = await login(formData);

      router.push("/bookings");
    } catch (error) {
      toast.error("Email or Password maybe wrong!");
    }
  };
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit" className="btn-primary w-full mt-4">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
