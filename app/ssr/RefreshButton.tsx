// app/ssr/RefreshButton.tsx
"use client"

export default function RefreshButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      style={{
        padding: "10px 20px",
        backgroundColor: "#2196f3",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      🔄 リロード
    </button>
  )
}
