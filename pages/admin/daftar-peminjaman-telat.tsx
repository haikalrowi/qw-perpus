import AdminVerticalNavbar from "../../components/AdminVerticalNavbar";
import TabelPeminjamanTelat from "../../components/TabelPeminjamanTelat";

export default function () {
  return (
    <div className="d-flex flex-column vh-100 p-2">
      <div className="flex-fill d-flex flex-row gap-3" style={{ minHeight: 0 }}>
        <div className="flex-shrink-0">
          <AdminVerticalNavbar />
        </div>
        <div className="flex-fill d-flex flex-column">
          <h3 className="text-center">Daftar Peminjaman (Telat)</h3>
          <div className="flex-fill" style={{ overflowY: 'scroll' }}>
            <TabelPeminjamanTelat />
            <div className="d-flex flex-row gap-2 bg-body"
              style={{ position: 'sticky', bottom: 0, padding: '.5rem' }}>
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