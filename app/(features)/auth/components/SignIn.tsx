import { LockKeyhole, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

import Link from "next/link";

const SignIn = () => {
  return (
    <section className="flex justify-center items-center p-8">
      {/* Card  */}
      <div className="bg-card border border-border/60 rounded-3xl shadow-sm p-12">
        {/* Title */}
        <div>
          <h3 className="text-primary font-bold">Welcome back 👏</h3>
          <h1 className="text-3xl font-bold tracking-tight my-4 mb-6">
            Sign In to your account
          </h1>
          <p className="opacity-70">
            Enter your credentials to access your workspace
          </p>
        </div>
        {/* Credentials Sign In */}
        <div className="mt-12">
          {/* Email */}
          <div>
            <label htmlFor="email">Email address</label>

            <div className="relative mt-4">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-11 pl-10 rounded-xl border-border bg-background outline-none w-full"
              />
            </div>
          </div>
          {/* Password */}
          <div className="mt-12">
            <div className="flex justify-between items-center">
              <label htmlFor="password">Password</label>
              <Link className="text-primary font-medium text-[0.8rem]" href="/">
                Forgot password?
              </Link>
            </div>

            <div className="relative mt-4">
              <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="h-11 pl-10 rounded-xl border-border bg-background outline-none w-full"
              />
            </div>
          </div>
          {/* Remember Me */}
          <div className="flex my-8 gap-2">
            <input className="accent-primary" type="checkbox" />
            <p>Remember Me</p>
          </div>
          {/* Button */}
          <div>
            <button className="bg-primary w-full rounded-md text-white font-bold h-12 cursor-pointer">
              Sign In
            </button>
          </div>
        </div>
        <div className="my-12 flex justify-center items-center">
          <div className="h-px w-[45%] bg-black opacity-30"></div>
          <p className="mx-8 opacity-60">OR</p>
          <div className="h-px w-[45%] bg-black opacity-30"></div>
        </div>
        {/* Third Party Sign In */}
        <div className="space-y-6">
          <button className="bg-card border border-border/60 w-full rounded-md h-12 cursor-pointer font-medium flex justify-center items-center gap-6">
            <FcGoogle className="text-[1.6rem]" />
            <p>Continue with Google</p>
          </button>
          <button className="bg-card border border-border/60 w-full rounded-md h-12 cursor-pointer font-medium flex justify-center items-center gap-6">
            <SiGithub className="text-[1.6rem]" />
            <p>Continue with GitHub</p>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 mt-12">
          <p className="opacity-70">Don't have an account?</p>
          <Link className="text-primary font-medium" href={"/"}>
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
