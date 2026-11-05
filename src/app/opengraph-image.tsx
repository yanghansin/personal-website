import { ImageResponse } from "next/og";
import { site } from "@/data/content";

// Colors match the @theme tokens in globals.css.
const ink = "#100e0b";
const text = "#f4eee4";
const muted = "#bdb2a2";
const amber = "#f5a524";

export const alt = `${site.name} (${site.alias}): ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        background: ink,
        borderTop: `12px solid ${amber}`,
      }}
    >
      <div style={{ color: amber, fontSize: 36, fontWeight: 600 }}>{site.alias}</div>
      <div style={{ color: text, fontSize: 112, fontWeight: 700, marginTop: 12 }}>{site.name}</div>
      <div style={{ color: muted, fontSize: 40, marginTop: 28, maxWidth: 900 }}>{site.tagline}</div>
    </div>,
    size,
  );
}
