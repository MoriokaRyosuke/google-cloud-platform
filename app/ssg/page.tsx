// app/ssg/page.tsx
import RefreshButton from "./RefreshButton"

interface Todo {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export const dynamic = "force-static" // 強制的にSSG

async function fetchRandomTodo(): Promise<Todo> {
  const res = await fetch("https://dummyjson.com/todos/random", {
    cache: "force-cache", // SSGを強制（キャッシュする）
  })

  if (!res.ok) {
    throw new Error("Failed to fetch todo")
  }

  return res.json()
}

export default async function SSGPage() {
  const todo = await fetchRandomTodo()
  const buildTime = new Date().toLocaleString("ja-JP")

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", color: "#000" }}>
      <h1>📄 SSG (Static Site Generation) テスト</h1>

      <div
        style={{
          background: "#e8f5e8",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2>動作確認</h2>
        <p>
          <strong>期待される動作:</strong> ページをリロードしても同じTodoが表示される
        </p>
        <p>
          <strong>ビルド時刻:</strong> {buildTime}
        </p>
      </div>

      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          color: "#000",
          border: "2px solid #4caf50",
        }}
      >
        <h3>固定 Todo (SSG)</h3>
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
          href="/ssr"
          style={{
            padding: "10px 20px",
            backgroundColor: "#2196f3",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            marginLeft: "10px",
          }}
        >
          🔄 SSRページへ
        </a>
      </div>

      <div style={{ marginTop: "30px", fontSize: "14px", color: "#fff" }}>
        <h4>SSGの特徴:</h4>
        <ul>
          <li>ビルド時にHTMLを事前生成</li>
          <li>高速な表示（CDNキャッシュ可能）</li>
          <li>サーバー負荷が少ない</li>
          <li>データは更新されない（再ビルドまで）</li>
        </ul>
      </div>
    </div>
  )
}

// SSG用の設定（オプション）
export const revalidate = false // 再検証を無効にしてSSGを強制
