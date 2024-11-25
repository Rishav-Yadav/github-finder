import { Link } from "react-router-dom";
function UserItem({ user }) {
  return (
    <div className="card card-side  card-compact bg-base-100 shadow-xl">
      <figure>
        <div className="avatar shadow-md p-2">
          <div className="rounded-full w-24">
            <img className="" src={user.avatar_url} alt="Avatar" />
          </div>
        </div>
      </figure>
      <div className="card-body ">
        <p className=" card-title text-center mb-3">{user.login}</p>
        <div className="card-actions align-end justify-end">
          <Link
            className=" btn btn-primary btn-glass btn-xs  "
            to={`/users/${user.login}`}
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
export default UserItem;
