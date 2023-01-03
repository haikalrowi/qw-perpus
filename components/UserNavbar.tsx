import Link from "next/link"
import { useEffect } from "react"

export default function () {
  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>('a.nav-link')
      .forEach((a) => {
        if (location.toString() == a.href) {
          a.classList.add('active')
        }
      })
  }, [])

  return (
    <nav className="nav nav-tabs flex-nowrap mb-3">
      <Link className="nav-link" href="/user">Beranda</Link>
      <Link className="nav-link" href="/user/notifikasi">Notifikasi</Link>
    </nav>
  )
}