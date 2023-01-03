import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps =
  async (context) => {
    return { props: { params: context.params } }
  }

export default function (props: any) {
  let { params } = props

  return (
    <div>{JSON.stringify(params)}</div>
  )
}