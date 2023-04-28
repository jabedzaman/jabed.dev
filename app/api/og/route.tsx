import { ImageResponse } from "@vercel/og";
import { siteConfig } from "@/consts";

export const config = {
  runtime: "edge",
};

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            bottom: 10,
            left: 10,
            color: "white",
            padding: 10,
            marginLeft: 100,
            marginBottom: 100,
          }}
        >
          <img
            src={siteConfig.avatar}
            style={{
              width: 70,
              height: 70,
              marginRight: 20,
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <p
              style={{
                fontSize: 40,
                fontWeight: "bold",
                marginBottom: -10,
              }}
            >
              {siteConfig.title}
            </p>
            <p
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {siteConfig.description}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
