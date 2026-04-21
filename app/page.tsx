"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [stars, setStars] = useState<
    { top: string; left: string; size: number; opacity: number; color: string }[]
  >([]);

  useEffect(() => {
    const colors = ["#ffffff", "#a78bfa", "#818cf8", "#e879f9"];
    const generated = [...Array(28)].map(() => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 95}%`,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.6 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setStars(generated);
  }, []);

  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans p-4"
      style={{ background: "linear-gradient(135deg, #1a0a6b 0%, #1e3a8a 30%, #1d4ed8 55%, #2563eb 75%, #3b82f6 100%)" }}
    >
      <div className="absolute inset-0 opacity-30 md:opacity-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.13) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(10,5,60,0.55) 0%, transparent 60%)" }}
        />
      </div>
      <div
        className="absolute hidden sm:block"
        style={{
          left: "5%",
          top: "15%",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #7c3aed, #312e81)",
          boxShadow: "0 0 60px 20px rgba(109,40,217,0.35)",
        }}
      />


      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full hidden sm:block"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            background: s.color,
            boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
          }}
        />
      ))}

      {/* Header Logo */}
      <div className="absolute top-6 left-6 md:top-10 md:left-12 flex items-center gap-2 text-white z-10">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.762-.553 1.105a18.27 18.27 0 0 0-6.664 0A10.545 10.545 0 0 0 8.115 3a19.736 19.736 0 0 0-4.433 1.369C.533 9.045-.32 13.58.099 18.057a19.9 19.9 0 0 0 6.084 3.108c.487-.665.922-1.37 1.293-2.112a12.945 12.945 0 0 1-2.037-.981c.17-.124.336-.253.496-.385a14.39 14.39 0 0 0 12.122 0c.161.132.327.261.497.385-.653.38-1.335.71-2.038.981.372.742.807 1.447 1.294 2.112a19.875 19.875 0 0 0 6.084-3.108c.5-5.177-.838-9.674-3.183-13.688ZM8.02 15.331c-1.182 0-2.152-1.085-2.152-2.419 0-1.334.951-2.419 2.152-2.419 1.21 0 2.17 1.095 2.152 2.419 0 1.334-.951 2.419-2.152 2.419Zm7.974 0c-1.182 0-2.152-1.085-2.152-2.419 0-1.334.951-2.419 2.152-2.419 1.21 0 2.17 1.095 2.152 2.419 0 1.334-.942 2.419-2.152 2.419Z" />
        </svg>
        <span className="text-lg font-bold tracking-tight">Discord</span>
      </div>

      
      <div
        className="relative z-10 flex flex-col md:flex-row overflow-hidden rounded-lg w-full max-w-[480px] md:max-w-[780px]"
        style={{
          background: "#313338",
          boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
        }}
      >
        
        <div className="w-full md:w-[60%] p-6 md:p-10">
          <h1 className="text-center font-semibold mb-2 text-xl md:text-2xl text-white">
            Welcome back!
          </h1>
          <p className="text-center text-sm mb-6" style={{ color: "#b5bac1" }}>
            We&apos;re so excited to see you again!
          </p>

          <div className="mb-4">
            <label className="block mb-2 text-[11px] font-bold uppercase tracking-wider" style={{ color: "#b5bac1" }}>
              Email or Phone Number <span style={{ color: "#f23f42" }}>*</span>
            </label>
            <input
              type="text"
              className="w-full outline-none transition-colors"
              style={{ padding: "10px", background: "#1e1f22", border: "1px solid #232428", color: "white", fontSize: 16, borderRadius: 3 }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#5865f2")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#232428")}
            />
          </div>

          <div className="mb-1">
            <label className="block mb-2 text-[11px] font-bold uppercase tracking-wider" style={{ color: "#b5bac1" }}>
              Password <span style={{ color: "#f23f42" }}>*</span>
            </label>
            <input
              type="password"
              className="w-full outline-none transition-colors"
              style={{ padding: "10px", background: "#1e1f22", border: "1px solid #232428", color: "white", fontSize: 16, borderRadius: 3 }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#5865f2")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#232428")}
            />
          </div>

          <p className="text-xs mb-6 cursor-pointer hover:underline" style={{ color: "#00a8fc" }}>
            Forgot your password?
          </p>

          <button
            className="w-full font-medium text-white transition-colors mb-3"
            style={{ padding: "12px", background: "#5865f2", border: "none", fontSize: 16, cursor: "pointer", borderRadius: 3 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#4752c4")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#5865f2")}
          >
            Log In
          </button>

          <p className="text-sm" style={{ color: "#b5bac1" }}>
            Need an account?{" "}
            <span className="cursor-pointer hover:underline" style={{ color: "#00a8fc" }}>Register</span>
          </p>
        </div>

       
        <div className="hidden md:flex w-[40%] flex-col items-center justify-center p-10 text-center">
          <div className="rounded-lg mb-8 relative inline-block" style={{ background: "white", padding: 8 }}>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://discord.com/login"
              alt="QR Code"
              className="w-40 h-40"
            />
            <div
              className="absolute flex items-center justify-center rounded-full"
              style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 40, height: 40, background: "white" }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="black">
                <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.762-.553 1.105a18.27 18.27 0 0 0-6.664 0A10.545 10.545 0 0 0 8.115 3a19.736 19.736 0 0 0-4.433 1.369C.533 9.045-.32 13.58.099 18.057a19.9 19.9 0 0 0 6.084 3.108c.487-.665.922-1.37 1.293-2.112a12.945 12.945 0 0 1-2.037-.981c.17-.124.336-.253.496-.385a14.39 14.39 0 0 0 12.122 0c.161.132.327.261.497.385-.653.38-1.335.71-2.038.981.372.742.807 1.447 1.294 2.112a19.875 19.875 0 0 0 6.084-3.108c.5-5.177-.838-9.674-3.183-13.688ZM8.02 15.331c-1.182 0-2.152-1.085-2.152-2.419 0-1.334.951-2.419 2.152-2.419 1.21 0 2.17 1.095 2.152 2.419 0 1.334-.951 2.419-2.152 2.419Zm7.974 0c-1.182 0-2.152-1.085-2.152-2.419 0-1.334.951-2.419 2.152-2.419 1.21 0 2.17 1.095 2.152 2.419 0 1.334-.942 2.419-2.152 2.419Z" />
              </svg>
            </div>
          </div>

          <h2 className="font-bold mb-2 text-xl text-white">
            Log in with QR Code
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#b5bac1" }}>
            Scan this with the <strong className="text-white">Discord mobile app</strong> to log in instantly.
          </p>
          <p className="text-sm" style={{ color: "#b5bac1", padding: 10 }}>
            {" "}
            <span className="cursor-pointer hover:underline" style={{ color: "#00a8fc" }}>Or sign in with Passkey</span>
          </p>
        </div>
      </div>
    </main>
  );
}