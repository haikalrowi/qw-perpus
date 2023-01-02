import TabelKategori from "../../components/TabelKategori";
import VerticalNavbar from "../../components/VerticalNavbar";

export default function () {
  return (
    <div className="d-flex flex-column vh-100 p-2">
      <h1>Admin &ndash; Daftar Kategori</h1>
      <hr />
      <div className="d-flex flex-row gap-3" style={{ minHeight: 0 }}>
        <VerticalNavbar />
        <div className="vr"></div>
        <div className="flex-fill" style={{ overflowY: 'scroll' }}>
          <TabelKategori />
          <div className="d-flex flex-row gap-2 bg-body"
            style={{ position: 'sticky', bottom: 0, padding: '.5rem' }}>
            <div>
              <a className="btn btn-success" href="/admin/form/tambah-kategori">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-plus me-1" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                </svg>
                Kategori
              </a>
            </div>
            <div className="vr"></div>
            <div className="flex-fill">
              <form className="d-flex flex-row gap-1" style={{ maxWidth: '16rem' }}>
                <input className="form-control" type="search" name="q" placeholder="Cari ISBN..." />
                <button className="btn btn-outline-success" type="submit">Cari</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}