// app/ssr/page.tsx
import RefreshButton from "./RefreshButton"

interface Todo {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export const dynamic = "force-dynamic" // 強制的にSSR

async function fetchRandomTodo(): Promise<Todo> {
  const res = await fetch("https://dummyjson.com/todos/random", {
    cache: "no-store", // SSRを強制（キャッシュしない）
  })

  if (!res.ok) {
    throw new Error("Failed to fetch todo")
  }

  return res.json()
}

export default async function SSRPage() {
  const todo = await fetchRandomTodo()
  const currentTime = new Date().toLocaleString("ja-JP")

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>🔄 SSR (Server-Side Rendering) テスト</h1>

      <div
        style={{
          background: "#e3f2fd",
          color: "#000",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2>動作確認</h2>
        <p>
          <strong>期待される動作:</strong> ページをリロードするたびに異なるTodoが表示される
        </p>
        <p>
          <strong>レンダリング時刻:</strong> {currentTime}
        </p>
      </div>

      <div
        style={{
          background: "#f5f5f5",
          color: "#000",
          padding: "20px",
          borderRadius: "8px",
          border: "2px solid #2196f3",
        }}
      >
        <h3>ランダム Todo (SSR)</h3>
        <p>
          <strong>ID:</strong> {todo.id}
        </p>
        <p>
          <strong>内容:</strong> {todo.todo}
        </p>
        <p>
          <strong>完了状態:</strong> {todo.completed ? "✅ 完了" : "❌ 未完了"}
        </p>
        <p>
          <strong>ユーザーID:</strong> {todo.userId}
        </p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <RefreshButton />

        <a
          href="/ssg"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            marginLeft: "10px",
          }}
        >
          📄 SSGページへ
        </a>
      </div>

      <div style={{ marginTop: "30px", fontSize: "14px", color: "#fff" }}>
        <h4>SSRの特徴:</h4>
        <ul>
          <li>リクエストごとにサーバーでHTMLを生成</li>
          <li>常に最新のデータを取得</li>
          <li>SEOに有利</li>
          <li>初期表示が若干遅い</li>
        </ul>
      </div>
    </div>
  )
}
