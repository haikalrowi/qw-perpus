import Link from "next/link";

export default function () {
  return (
    <div className="container">
      <h1>Selamat Datang di Perpustakaan STIKOM</h1>
      <div className="btn-group">
        <Link className="btn btn-primary" href="/admin">Admin</Link>
        <Link className="btn btn-secondary" href="/user">User</Link>
      </div>
    </div>
  )
}