import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Snippy | 岐阜の店舗ビジネス専門Web集客パートナー"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #009e8a 0%, #00bfa6 50%, #4de8d4 100%)",
          position: "relative",
        }}
      >
        {/* Dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 80px",
            borderRadius: "32px",
            background: "rgba(255, 255, 255, 0.12)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Logo text */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Snippy
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 4,
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: 4,
              marginBottom: 24,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "rgba(255, 255, 255, 0.95)",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            岐阜の店舗ビジネス専門
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "rgba(255, 255, 255, 0.95)",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Web集客パートナー
          </div>
        </div>

        {/* Bottom badges */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
          }}
        >
          {["サイト制作", "集客マーケティング", "業務改善"].map((label) => (
            <div
              key={label}
              style={{
                padding: "10px 24px",
                borderRadius: 50,
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#fff",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 48,
            fontSize: 18,
            color: "rgba(255, 255, 255, 0.5)",
            fontWeight: 500,
          }}
        >
          snippy-web.jp
        </div>
      </div>
    ),
    { ...size },
  )
}
