// Import Link dari Next.js
import Link from 'next/link';

export default function UserPage() {
  return (
    <div>
      <div id="nav">
        <h1>connect</h1>
        <div id="list-button">
          <a>user</a>
          <button>hak akses</button>

          {/* Tombol logout pakai Link */}
          <Link href="/logout">Logout</Link>

        </div>
      </div>
      <div id="konten"></div>
    </div>
  );
}
