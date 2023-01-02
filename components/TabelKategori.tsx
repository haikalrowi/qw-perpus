// Tabel Kategori
export default function () {
  let data = [0]

  return (
    <table className="table table-hover align-middle">
      <thead className="table-primary sticky-top">
        <tr>
          <th>ID Kategori</th>
          <th>Nama</th>
          <th><i>Action</i></th>
        </tr>
      </thead>
      <tbody>
        {data.map((v, i) => {
          return <tr key={i + 1}>
            <td>1</td>
            <td>Pemrograman</td>
            <td>
              <div className="btn-group">
                <a className="btn btn-primary" href="/admin/form/kategori/...">Ubah</a>
              </div>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  )
}