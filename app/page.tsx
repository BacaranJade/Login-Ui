"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [stars, setStars] = useState<
    { top: string; left: string; size: number; opacity: number; color: string }[]
  >([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const colors = ["#ffffff", "#a78bfa", "#818cf8", "#e879f9"];
    const generated = [...Array(30)].map(() => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 95}%`,
      size: Math.random() * 3 + 1.5,
      opacity: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setStars(generated);

    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const inputStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    height: 40,
    padding: "10px",
    backgroundColor: "light-grey",
    border: "1px solid grey",
    borderRadius: 10,
    color: "#fff",
    fontSize: 16,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s ease",
    appearance: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "#b5bac1",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.02em",
    marginBottom: 8,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a0a6b 0%, #1e3a8a 30%, #1d4ed8 55%, #2563eb 75%, #3b82f6 100%)",
        fontFamily: "'gg sans', 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "16px" : "24px",
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        pointerEvents: "none",
      }} />

      {/* Orb — hidden on mobile */}
      {!isMobile && (
        <div style={{
          position: "absolute",
          left: "5%",
          top: "13%",
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #7c3aed, #312e81)",
          boxShadow: "0 0 70px 24px rgba(109,40,217,0.4)",
          pointerEvents: "none",
        }} />
      )}

      {/* Stars — hidden on mobile */}
      {!isMobile && stars.map((s, i) => (
        <span key={i} style={{
          position: "absolute",
          top: s.top,
          left: s.left,
          width: s.size,
          height: s.size,
          borderRadius: "50%",
          opacity: s.opacity,
          background: s.color,
          boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
          pointerEvents: "none",
        }} />
      ))}

      {/* Discord logo — hidden on mobile */}
      {!isMobile && (
        <div style={{
          position: "absolute",
          top: 40,
          left: 35,
          display: "flex",
          alignItems: "center",
          gap: 8,
          color: "white",
          zIndex: 10,
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.762-.553 1.105a18.27 18.27 0 0 0-6.664 0A10.545 10.545 0 0 0 8.115 3a19.736 19.736 0 0 0-4.433 1.369C.533 9.045-.32 13.58.099 18.057a19.9 19.9 0 0 0 6.084 3.108c.487-.665.922-1.37 1.293-2.112a12.945 12.945 0 0 1-2.037-.981c.17-.124.336-.253.496-.385a14.39 14.39 0 0 0 12.122 0c.161.132.327.261.497.385-.653.38-1.335.71-2.038.981.372.742.807 1.447 1.294 2.112a19.875 19.875 0 0 0 6.084-3.108c.5-5.177-.838-9.674-3.183-13.688ZM8.02 15.331c-1.182 0-2.152-1.085-2.152-2.419 0-1.334.951-2.419 2.152-2.419 1.21 0 2.17 1.095 2.152 2.419 0 1.334-.951 2.419-2.152 2.419Zm7.974 0c-1.182 0-2.152-1.085-2.152-2.419 0-1.334.951-2.419 2.152-2.419 1.21 0 2.17 1.095 2.152 2.419 0 1.334-.942 2.419-2.152 2.419Z" />
          </svg>
          <span style={{ fontWeight: 700, fontSize: 18 }}>Discord</span>
        </div>
      )}

      {/* Card */}
      <div style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        background: "#313338",
        borderRadius: 8,
        boxShadow: "0 2px 10px 0 rgba(0,0,0,0.2), 0 8px 40px rgba(0,0,0,0.35)",
        width: "100%",
        maxWidth: isMobile ? 420 : 780,
      }}>

        {/* Form */}
        <div style={{
          flex: isMobile ? "unset" : "0 0 460px",
          padding: isMobile ? "24px 20px" : "32px 40px",
          boxSizing: "border-box",
        }}>
          <h1 style={{
            color: "white",
            fontSize: isMobile ? 15 : 20,
            fontWeight: 700,
            textAlign: "center",
            margin: "0 0 8px 0",
          }}>
            Welcome back!
          </h1>
          <p style={{
            color: "#b5bac1",
            fontSize: isMobile ? 10 : 13,
            textAlign: "center",
            margin: "0 0 20px 0",
          }}>
            We&apos;re so excited to see you again!
          </p>

          {/* Email */}
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>
              Email or Phone Number <span style={{ color: "#f23f42" }}>*</span>
            </label>
            <input
              type="text"
              style={inputStyle}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#00a8fc";
                e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,168,252,0.25)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "grey";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: 4 }}>
            <label style={labelStyle}>
              Password <span style={{ color: "#f23f42" }}>*</span>
            </label>
            <input
              type="password"
              style={inputStyle}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#00a8fc";
                e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,168,252,0.25)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "grey";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          <a
            style={{ display: "block", color: "#00a8fc", fontSize: 12, marginBottom: 20, cursor: "pointer", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            Forgot your password?
          </a>

          <button
            style={{
              display: "block",
              width: "100%",
              height: 35,
              background: "#5865f2",
              color: "white",
              border: "none",
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              marginBottom: 8,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#4752c4")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#5865f2")}
          >
            Log In
          </button>

          <p style={{ color: "#b5bac1", fontSize: 12, margin: 0 }}>
            Need an account?{" "}
            <span
              style={{ color: "#00a8fc", cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Register
            </span>
          </p>
        </div>

        {/* QR Code — hidden on mobile */}
        {!isMobile && (
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 24px",
            textAlign: "center",
          }}>
            <div style={{
              background: "white",
              padding: 8,
              borderRadius: 6,
              display: "inline-block",
              position: "relative",
              marginBottom: 20,
            }}>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://discord.com/login"
                alt="QR Code"
                style={{ width: 160, height: 160, display: "block" }}
              />
              <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 38, height: 38,
                background: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="black">
                  <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.762-.553 1.105a18.27 18.27 0 0 0-6.664 0A10.545 10.545 0 0 0 8.115 3a19.736 19.736 0 0 0-4.433 1.369C.533 9.045-.32 13.58.099 18.057a19.9 19.9 0 0 0 6.084 3.108c.487-.665.922-1.37 1.293-2.112a12.945 12.945 0 0 1-2.037-.981c.17-.124.336-.253.496-.385a14.39 14.39 0 0 0 12.122 0c.161.132.327.261.497.385-.653.38-1.335.71-2.038.981.372.742.807 1.447 1.294 2.112a19.875 19.875 0 0 0 6.084-3.108c.5-5.177-.838-9.674-3.183-13.688ZM8.02 15.331c-1.182 0-2.152-1.085-2.152-2.419 0-1.334.951-2.419 2.152-2.419 1.21 0 2.17 1.095 2.152 2.419 0 1.334-.951 2.419-2.152 2.419Zm7.974 0c-1.182 0-2.152-1.085-2.152-2.419 0-1.334.951-2.419 2.152-2.419 1.21 0 2.17 1.095 2.152 2.419 0 1.334-.942 2.419-2.152 2.419Z" />
                </svg>
              </div>
            </div>

            <h2 style={{ color: "white", fontSize: 19, fontWeight: 700, margin: "0 0 8px 0" }}>
              Log in with QR Code
            </h2>
            <p style={{ color: "#b5bac1", fontSize: 14, lineHeight: 1.5, margin: "0 0 8px 0" }}>
              Scan this with the <strong style={{ color: "white" }}>Discord mobile app</strong> to log in instantly.
            </p>
            <span
              style={{ color: "#00a8fc", fontSize: 12, cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Or sign in with passkey
            </span>
          </div>
        )}
      </div>
    </main>
  );
}