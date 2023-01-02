import TabelRequest from "../../components/TabelRequest";
import VerticalNavbar from "../../components/VerticalNavbar";

export default function () {
  return (
    <div className="d-flex flex-column vh-100 p-2">
      <h1>Admin &ndash; Daftar <i>Request</i></h1>
      <hr />
      <div className="d-flex flex-row gap-3" style={{ minHeight: 0 }}>
        <VerticalNavbar />
        <div className="vr"></div>
        <div className="flex-fill" style={{ overflowY: 'scroll' }}>
          <TabelRequest />
          <div className="d-flex flex-row gap-2 bg-body"
            style={{ position: 'sticky', bottom: 0, padding: '.5rem' }}>
            <div className="flex-fill">
              <form className="d-flex flex-row gap-1" style={{ maxWidth: '16rem' }}>
                <input className="form-control" type="search" name="q" placeholder="Cari Judul..." />
                <button className="btn btn-outline-success" type="submit">Cari</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}