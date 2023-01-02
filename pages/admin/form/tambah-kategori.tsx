export default function () {
  return (
    <div className="container" style={{ maxWidth: '32rem' }}>
      <form>
        <fieldset>
          <legend>Form Tambah Kategori</legend>
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">ID Kategori</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" required />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-3 col-form-label">Nama</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Tambah</button>
        </fieldset>
      </form>
    </div>
  )
}