import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#020617",
          borderRadius: "40px",
        }}
      >
        {/* DV line representation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Human node */}
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "#22c55e",
            }}
          />
          {/* Connection line */}
          <div
            style={{
              width: "60px",
              height: "8px",
              background:
                "linear-gradient(90deg, #22c55e 0%, #64748b 50%, #6366f1 100%)",
              borderRadius: "4px",
            }}
          />
          {/* AI node */}
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "#6366f1",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
