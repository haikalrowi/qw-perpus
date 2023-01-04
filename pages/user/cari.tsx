import { GetServerSideProps } from "next";
import Image from "next/image";

import UserNavbar from "../../components/UserNavbar";

export const getServerSideProps: GetServerSideProps =
  async (context) => {
    return {
      props: {
        query: context.query
      }
    }
  }

export default function (props: any) {
  let { query } = props
  let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="d-flex flex-column vh-100">
      <UserNavbar />
      <div className="flex-fill" style={{ minHeight: 0, overflowY: 'auto' }}>
        <div className="container">
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
        </div>
      </div>
    </div>
  )
}