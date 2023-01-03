import Image from "next/image";

// Tabel Buku
export default function () {
  let data = [0]

  return (
    <table className="table table-hover align-middle">
      <thead className="table-secondary sticky-top">
        <tr>
          <th>#</th>
          <th>ISBN</th>
          <th>Gambar</th>
          <th>Judul</th>
          <th><i>Action</i></th>
        </tr>
      </thead>
      <tbody>
        {data.map((v, i) => {
          return <tr key={i + 1}>
            <td>{i + 1}</td>
            <td>9789792912807</td>
            <td>
              <Image className="img-thumbnail" src="/vercel.svg" width={64} height={96} alt="next" />
            </td>
            <td>Vercel</td>
            <td>
              <div className="btn-group">
                <a className="btn btn-primary" href="/admin/form/buku/...">Ubah</a>
              </div>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  )
}