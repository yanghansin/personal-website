import { ImageResponse } from "next/og";

// An amber "HY" monogram on the site's ink background, shared by icon.tsx and apple-icon.tsx.
// Colors match the @theme tokens in globals.css.
export function monogram(size: number, rounded: boolean) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#100e0b",
        color: "#f5a524",
        fontSize: size * 0.5,
        fontWeight: 700,
        letterSpacing: -size * 0.03,
        borderRadius: rounded ? size * 0.2 : 0,
      }}
    >
      HY
    </div>,
    { width: size, height: size },
  );
}
