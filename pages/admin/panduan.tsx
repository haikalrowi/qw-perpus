import AdminVerticalNavbar from "../../components/AdminVerticalNavbar";

export default function () {
  return (
    <div className="d-flex flex-column vh-100 p-2">
      <div className="flex-fill d-flex flex-row gap-3" style={{ minHeight: 0 }}>
        <div className="flex-shrink-0">
          <AdminVerticalNavbar />
        </div>
        <div className="flex-fill d-flex flex-column">
          <h1 className="text-center">Panduan</h1>
          <div className="flex-fill" style={{ overflowY: 'scroll', scrollBehavior: 'smooth' }}>
            <div className="container">
              <h2 className="pb-3">Fitur Utama</h2>
              <hr />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pt-3">
                <a className="col d-flex align-items-start text-decoration-none text-body" href="#f-peminjaman">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-journals text-muted flex-shrink-0 me-3" viewBox="0 0 16 16">
                    <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                    <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                  </svg>
                  <div>
                    <h3 className="fw-bold mb-0 fs-4">Peminjaman</h3>
                    <p>Mengelola daftar peminjaman buku dengan mudah.</p>
                  </div>
                </a>
                <a className="col d-flex align-items-start text-decoration-none text-body" href="#f-buku">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-book-half text-muted flex-shrink-0 me-3" viewBox="0 0 16 16">
                    <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                  </svg>
                  <div>
                    <h3 className="fw-bold mb-0 fs-4">Buku</h3>
                    <p>Mengelola daftar buku dengan mudah.</p>
                  </div>
                </a>
              </div>
            </div>
            <hr />
            <h2 id="f-peminjaman">Peminjaman</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, enim? Autem cupiditate quos, voluptates tenetur soluta quidem harum nesciunt est obcaecati enim aperiam laborum recusandae et sed facilis in nihil placeat a.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim soluta incidunt itaque ex consequuntur expedita est, eos iste, voluptates alias natus delectus architecto vel libero earum, esse eveniet hic illum sed magnam blanditiis illo? Earum in libero similique amet omnis? Ad architecto maiores libero! Cumque eius labore sunt.</p>
            <h2 id="f-buku">Buku</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, enim? Autem cupiditate quos, voluptates tenetur soluta quidem harum nesciunt est obcaecati enim aperiam laborum recusandae et sed facilis in nihil placeat a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero possimus quasi officiis minima dignissimos repellat modi nostrum iste blanditiis corporis sit itaque assumenda qui accusamus vero aliquam, quam harum eligendi ipsum molestias! Vel iure quod porro laborum harum iste laboriosam, cupiditate delectus temporibus necessitatibus atque. Temporibus, reprehenderit.</p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, enim? Autem cupiditate quos, voluptates tenetur soluta quidem harum nesciunt est obcaecati enim aperiam laborum recusandae et sed facilis in nihil placeat a.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero blanditiis corporis qui iure quo error suscipit labore cumque debitis. Perspiciatis odit cupiditate dicta enim aliquam rem blanditiis eligendi eos in earum, atque sequi dolores, laudantium quae, ipsam commodi suscipit! Ad aspernatur blanditiis, ducimus a neque voluptas eligendi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}