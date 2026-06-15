"use client";

import {
  ChartNoAxesCombined,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex-1 bg-primary/10 p-12">
      <nav>
        <Image src={"/logo.png"} alt="logo" width={150} height={150} />
      </nav>
      {/* Container */}
      <div className="flex gap-12">
        {/* Left */}
        <div className="w-[50%] mt-20">
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            Create your account
          </h1>
          <p className="w-[55%]">
            Start managing your projects and tasks in minutes.
          </p>
          <div className="my-20">
            <Image
              src="/app-sample-image.png"
              alt="app sample"
              width={500}
              height={500}
            />
          </div>
          {/* Feature List */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-primary/10 w-fit h-fit">
                <UsersRound className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Collaborate effortlessly</h3>
                <p className="w-[75%] mt-2">
                  Invite your team and work together in real-time.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-primary/10 w-fit h-fit">
                <ChartNoAxesCombined className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Track progress</h3>
                <p className="w-[75%] mt-2">
                  Monitor tasks,projects, and sprint progress in one place.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-primary/10 w-fit h-fit">
                <ShieldCheck className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Secure & reliable</h3>
                <p className="w-[75%] mt-2">
                  Your data is protected with enterprise-grade security.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-16">
            <p>Already have an account?</p>
            <Link href={"/"} className="text-primary font-medium">
              Sign in
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="w-[70%]">
          <div className="bg-card border border-border/60 rounded-3xl shadow-sm p-12">
            {/* Title */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight my-4 mb-6">
                Create your account
              </h1>
              <p className="opacity-70">
                Fill in the details below to get started
              </p>
            </div>
            {/* Credentials Sign Up */}
            <div className="mt-12">
              {/* Name */}
              <div>
                <label htmlFor="name">Full name</label>

                <div className="relative mt-4">
                  <UserRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

                  <input
                    id="name"
                    type="text"
                    placeholder="Wein"
                    className="h-11 pl-10 rounded-xl border-border bg-background outline-none w-full"
                  />
                </div>
              </div>
              {/* Email */}
              <div className="my-8">
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
              <div>
                <label htmlFor="password">Password</label>

                <div className="relative mt-4">
                  <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="h-11 pl-10 rounded-xl border-border bg-background outline-none w-full"
                  />
                  {showPassword ? (
                    <Eye
                      onClick={() => setShowPassword(false)}
                      className="absolute cursor-pointer right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => setShowPassword(true)}
                      className="absolute cursor-pointer right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
                    />
                  )}
                </div>
              </div>
              {/* Password Rules */}
              <div className="mt-3 i flex items-center justify-between">
                <div className="p-2 rounded-full bg-primary/10 flex gap-1 items-center w-fit">
                  <div className="h-2 w-2 bg-black/60 rounded-full"></div>
                  <p className="opacity-80 text-[0.6rem]">
                    At least 8 characters
                  </p>
                </div>
                <div className="p-2 rounded-full bg-primary/10 flex gap-1 items-center w-fit">
                  <div className="h-2 w-2 bg-black/60 rounded-full"></div>
                  <p className="opacity-80 text-[0.6rem]">
                    One uppercase letter
                  </p>
                </div>
                <div className="p-2 rounded-full bg-primary/10 flex gap-1 items-center w-fit">
                  <div className="h-2 w-2 bg-black/60 rounded-full"></div>
                  <p className="opacity-80 text-[0.6rem]">One number</p>
                </div>
              </div>
              {/* Confirm Password */}
              <div className="mt-8">
                <label htmlFor="password">Confirm Password</label>

                <div className="relative mt-4">
                  <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

                  <input
                    id="password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="h-11 pl-10 rounded-xl border-border bg-background outline-none w-full"
                  />
                  {showConfirmPassword ? (
                    <Eye
                      onClick={() => setShowConfirmPassword(false)}
                      className="absolute cursor-pointer right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => setShowConfirmPassword(true)}
                      className="absolute cursor-pointer right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
                    />
                  )}
                </div>
              </div>
              {/* Agree */}
              <div className="flex items-center mt-6 mb-8 gap-3">
                <input className="accent-primary" type="checkbox" />
                <p className="text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </p>
              </div>
              {/* Button */}
              <div>
                <button className="bg-primary w-full rounded-md text-white font-bold h-12 cursor-pointer">
                  Create account
                </button>
              </div>
            </div>
            <div className="my-8 flex justify-center items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
