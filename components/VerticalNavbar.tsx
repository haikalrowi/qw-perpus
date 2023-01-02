import Link from "next/link";
import { useEffect } from "react";

export default function () {
  useEffect(() => {
    document.querySelectorAll('a')
      .forEach((a) => {
        if (location.toString() == a.href) {
          a.classList.add('active')
        }
      })
  }, [])

  return (
    <nav className="nav nav-pills flex-column">
      <Link className="nav-link" href="/admin">Daftar Peminjaman</Link>
      <Link className="nav-link" href="/admin/daftar-peminjaman-telat">Daftar Peminjaman (Telat)</Link>
      <Link className="nav-link" href="/admin/daftar-request">Daftar <i>Request</i></Link>
      <Link className="nav-link" href="/admin/daftar-buku">Daftar Buku</Link>
      <Link className="nav-link" href="/admin/daftar-kategori">Daftar Kategori</Link>
    </nav>
  )
}