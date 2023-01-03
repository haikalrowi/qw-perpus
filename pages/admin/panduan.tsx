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
          <div className="flex-fill" style={{ overflowY: 'scroll' }}>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, enim? Autem cupiditate quos, voluptates tenetur soluta quidem harum nesciunt est obcaecati enim aperiam laborum recusandae et sed facilis in nihil placeat a.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim soluta incidunt itaque ex consequuntur expedita est, eos iste, voluptates alias natus delectus architecto vel libero earum, esse eveniet hic illum sed magnam blanditiis illo? Earum in libero similique amet omnis? Ad architecto maiores libero! Cumque eius labore sunt.</p>
            <h2>Lorem ipsum dolor sit amet.</h2>
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