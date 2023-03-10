import Image from "next/image";

import UserNavbar from "../../components/UserNavbar";

export default function () {
  let data = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <div className="d-flex flex-column vh-100">
      <UserNavbar />
      <div className="flex-fill" style={{ minHeight: 0, overflowY: 'auto' }}>
        <div className="container">
          <h2 className="sticky-top bg-body pb-2">Buku Terbaru</h2>
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3 mb-3">
            {data.map((v, i) => {
              return <div className="col" key={i + 1}>
                <a className="text-body text-decoration-none" href="/user/buku/...">
                  <div className="card mx-auto" style={{ maxWidth: '10rem' }}>
                    <Image className="card-img-top" src="/vercel.svg" alt="..." width={64} height={96} />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </a>
              </div>
            })}
          </div>
          <h2 className="sticky-top bg-body pb-2">Paling sering dipinjam</h2>
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3 mb-3">
            {data.map((v, i) => {
              return <div className="col" key={i + 1}>
                <div className="card mx-auto" style={{ maxWidth: '10rem' }}>
                  <Image src="/vercel.svg" className="card-img-top" alt="..." width={64} height={96} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div >
      </div>
    </div >
  )
}