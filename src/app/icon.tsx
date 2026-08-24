// src/app/icon.tsx
import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#34d399",
          fontWeight: 800,
          fontFamily: "monospace",
          borderRadius: "8px",
          border: "1.5px solid rgba(52, 211, 153, 0.4)",
        }}
      >
        {"</>"}
      </div>
    ),
    {
      ...size,
    }
  );
}