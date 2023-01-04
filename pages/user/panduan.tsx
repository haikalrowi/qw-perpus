import UserNavbar from "../../components/UserNavbar";

export default function () {
  return (
    <div>
      <UserNavbar />
      <div className="flex-fill" style={{ minHeight: 0, overflowY: 'auto' }}>
        <div className="container">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, sit maiores incidunt asperiores aperiam fuga repellendus dolorem nulla quis omnis, dolores reiciendis placeat. Quae nesciunt libero aspernatur praesentium fuga nihil amet et.</p>
        </div>
      </div>
    </div>
  )
}