import TabelPeminjaman from "../../components/TabelPeminjaman";
import VerticalNavbar from "../../components/VerticalNavbar";

export default function () {
  return (
    <div className="d-flex flex-column vh-100 p-2">
      <h1>Admin &ndash; Daftar Peminjaman</h1>
      <hr />
      <div className="flex-fill d-flex flex-row gap-3" style={{ minHeight: 0 }}>
        <VerticalNavbar />
        <div className="vr"></div>
        <div className="flex-fill" style={{ overflowY: 'scroll' }}>
          <TabelPeminjaman />
          <div className="d-flex flex-row gap-2 bg-body"
            style={{ position: 'sticky', bottom: 0, padding: '.5rem' }}>
            <div>
              <a className="btn btn-success" href="/admin/form/tambah-peminjam">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-plus me-1" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z" />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg>
                Peminjam
              </a>
            </div>
            <div className="vr"></div>
            <div className="flex-fill">
              <form className="d-flex flex-row gap-1" style={{ maxWidth: '16rem' }}>
                <input className="form-control" type="search" name="q" placeholder="Cari Kode Buku..." />
                <button className="btn btn-outline-success" type="submit">Cari</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}