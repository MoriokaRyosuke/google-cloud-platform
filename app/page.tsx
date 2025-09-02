export default function Home() {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Next.js SSR/SSG テスト環境</h1>

      <div style={{ marginTop: "30px" }}>
        <h2>テストページ</h2>
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <a
            href="/ssr"
            style={{
              padding: "15px 25px",
              backgroundColor: "#2196f3",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              textAlign: "center",
              flex: 1,
            }}
          >
            🔄 SSR テスト
          </a>

          <a
            href="/ssg"
            style={{
              padding: "15px 25px",
              backgroundColor: "#4caf50",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              textAlign: "center",
              flex: 1,
            }}
          >
            📄 SSG テスト
          </a>
        </div>
      </div>
    </div>
  )
}
