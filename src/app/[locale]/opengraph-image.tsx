import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BufferLine - See how AI changes the way you think, decide, and trust";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const content = {
  en: {
    title: "BufferLine",
    subtitle: "Think. Decide. Trust. Made visible.",
    tagline: "AI changes how you think, decide, and trust. Can you see it?",
    badge: "Open Framework",
  },
  ko: {
    title: "BufferLine",
    subtitle: "사고. 판단. 신뢰. 보이게 만들다.",
    tagline: "AI는 생각하고, 판단하고, 맡기는 방식을 바꿉니다.",
    badge: "오픈 프레임워크",
  },
};

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = content[locale as keyof typeof content] || content.en;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1e1b4b 0%, transparent 50%), radial-gradient(circle at 75% 75%, #312e81 0%, transparent 50%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(99, 102, 241, 0.15)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            borderRadius: "9999px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#22c55e",
            }}
          />
          <span
            style={{
              color: "#a5b4fc",
              fontSize: "18px",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            {t.badge}
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              fontWeight: 700,
              background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {t.title}
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              margin: 0,
              fontWeight: 400,
            }}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            marginTop: "48px",
            padding: "16px 32px",
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(148, 163, 184, 0.2)",
            borderRadius: "12px",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              color: "#e2e8f0",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            &quot;{t.tagline}&quot;
          </p>
        </div>

        {/* Bottom decoration - DV indicator style */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#22c55e", fontSize: "18px" }}>−</span>
            <span style={{ color: "#64748b", fontSize: "16px" }}>Human</span>
          </div>
          <div
            style={{
              width: "200px",
              height: "4px",
              background:
                "linear-gradient(90deg, #22c55e 0%, #64748b 50%, #6366f1 100%)",
              borderRadius: "2px",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#64748b", fontSize: "16px" }}>AI</span>
            <span style={{ color: "#6366f1", fontSize: "18px" }}>+</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
