// Tabel Peminjaman (Telat)
export default function () {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <table className="table table-hover align-middle">
      <thead className="table-primary sticky-top">
        <tr>
          <th>#</th>
          <th>Kode Buku</th>
          <th>NIM</th>
          <th>Tanggal Pengembalian</th>
          <th><i>Action</i></th>
        </tr>
      </thead>
      <tbody>
        {data.map((v, i) => {
          return <tr key={i + 1}>
            <td>{i + 1}</td>
            <td>9789792912807<b>{`${i + 1}`.padStart(3, '0')}</b></td>
            <td>1121102019</td>
            <td className="table-warning">Senin, 02 Januari 2023</td>
            <td>
              <div className="btn-group">
                <button className="btn btn-primary" type="button">Sudah</button>
              </div>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  )
}