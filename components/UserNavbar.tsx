import Link from "next/link";
import { useEffect } from "react";

export default function () {
  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>('a.nav-link')
      .forEach((a) => {
        if (location.pathname == a.pathname) {
          a.classList.add('active')
        }
      })
  }, [])

  return (
    <>
      <nav className="nav nav-pills justify-content-center gap-2 mt-3">
        <Link className="nav-link" href="/user">Beranda</Link>
        <Link className="nav-link" href="/user/panduan">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill me-1" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
          Panduan
        </Link>
        <form className="d-flex flex-row gap-1" action="/user/cari">
          <input className="form-control" type="search" name="kata-kunci" placeholder="Judul..." style={{ minWidth: '8rem' }} required />
          <button className="btn btn-outline-success" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
      </nav>
      <hr />
    </>
  )
}