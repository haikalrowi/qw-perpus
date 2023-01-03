import TabelPeminjaman from "../../components/TabelPeminjaman";
import AdminVerticalNavbar from "../../components/AdminVerticalNavbar";

export default function () {
  return (
    <div className="d-flex flex-column vh-100 p-2">
      <div className="flex-fill d-flex flex-row gap-3" style={{ minHeight: 0 }}>
        <div className="flex-shrink-0">
          <AdminVerticalNavbar />
        </div>
        <div className="flex-fill d-flex flex-column">
          <h3 className="text-center">Daftar Peminjaman</h3>
          <div className="flex-fill" style={{ overflowY: 'scroll' }}>
            <TabelPeminjaman />
            <div className="d-flex flex-row gap-2 bg-body"
              style={{ position: 'sticky', bottom: 0, padding: '.5rem' }}>
              <div>
                <a className="btn btn-success" href="/admin/form/tambah-peminjam">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill me-1" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
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
    </div>
  )
}