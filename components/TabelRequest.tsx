// Tabel Request
export default function () {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <table className="table table-hover align-middle">
      <thead className="table-primary sticky-top">
        <tr>
          <th>#</th>
          <th>NIM</th>
          <th>Judul</th>
          <th><i>Action</i></th>
        </tr>
      </thead>
      <tbody>
        {data.map((v, i) => {
          return <tr key={i + 1}>
            <td>{i + 1}</td>
            <td>1121102019</td>
            <td>JavaScript</td>
            <td>
              <div className="btn-group">
                <a className="btn btn-primary" href="/admin/form/request/...">Lihat</a>
              </div>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  )
}