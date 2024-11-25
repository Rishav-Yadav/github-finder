import { useContext, useEffect } from "react";
import { MdGroups } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FaCircleNodes } from "react-icons/fa6";
import { IoIosGitNetwork } from "react-icons/io";
import { useParams, Link } from "react-router-dom";
import GithubContext from "../../context/Github/GithubContext";
import Spinner from "../layouts/Spinner";
import { FaLink, FaEye, FaInfo, FaStar, FaUtensils } from "react-icons/fa";
import { getUserData } from "../../context/Github/GithubAction";
function User() {
  const params = useParams();
  const { userData, dispatch, loading, repos } = useContext(GithubContext);
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const userData = async () => {
      const { userData: temp1, reposData: temp2 } = await getUserData(
        params.login
      );
      dispatch({
        type: "SET_USER_DATA",
        payload: { userData: temp1, reposData: temp2 },
      });
    };
    userData();
  }, []);
  const {
    login,
    hireable,
    avatar_url: avatar,
    html_url: url,
    name,
    company,
    location,
    blog: website,
    twitter_username: twitter,
    followers,
    following,
    public_repos: public_repos,
    public_gists,
    bio,
  } = userData;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="mx-auto max-w-screen-lg my-12 ">
        <Link className="btn btn-neutral btn-sm ml-8" to="/">
          Back to Search
        </Link>
        <div className="flex flex-col md:flex-row">
          <figure className="inline-block p-8">
            <div className="avatar rounded-full mr-8 w-56  ">
              <img className="w-24 rounded-xl" src={avatar} alt="Avatar" />
            </div>
          </figure>
          <div className="p-8">
            <div className="flex gap-4 items-center ">
              <h2 className="text-5xl font-bold pr-4">
                <strong>{name}</strong>
              </h2>
              <div className="badge badge-primary text-center">
                <p>User</p>
              </div>
              {hireable != null && (
                <div className="badge badge-secondary items-center">
                  <p>User</p>
                </div>
              )}
            </div>
            <p className="text-base-content mt-4">{bio}</p>
            <a
              className="btn btn-primary btn-md my-8 "
              href={url}
              target={"_blank"}
              rel={"noreferrer"}
            >
              View Profile
            </a>
            <div></div>
            <div className=" stats stats-vertical md:stats-horizontal lg:stats-horizontal xl:stats-horizontal my-8">
              {location && (
                <div className="stat bg-base-100 p-4 shadow-md">
                  <p className="stat-title text-md text-base-content">
                    Location
                  </p>
                  <p className="stat-value text-lg text-accent">{location}</p>
                </div>
              )}
              {website && (
                <div className="stat bg-base-100 p-4 shadow-md">
                  <p className="stat-title text-md text-base-content">
                    Website
                  </p>
                  <a
                    className="stat-value text-lg text-accent"
                    rel={"noreferrer"}
                    href={
                      website.startsWith("https://") ||
                      website.startsWith("http://")
                        ? website
                        : `https://${website}`
                    }
                    target={"_blank"}
                  >
                    {website}
                  </a>
                </div>
              )}

              {twitter && (
                <div className="stat bg-base-100 p-4 shadow-md">
                  <p className="stat-title text-base-content text-lg ">
                    Twitter
                  </p>
                  <a
                    className="stat-value text-lg text-accent"
                    rel={"noreferrer"}
                    href={`https://x.com/${twitter}`}
                    target={"_blank"}
                  >
                    {twitter}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Following Cards */}
        <div className="stats shadow-lg stats-vertical md:stats-horizontal lg:stats-horizontal xl:stats-horizontal mx-8 ">
          <div className=" stat ">
            <p className=" stat-title text-xl mb-2">Followers</p>
            <div className="stat-figure  text-3xl md:text-5xl">
              <MdGroups className="text-secondary text-5xl" />
            </div>
            <div className="stat-value">
              <h2 className="text-3xl md:text-4xl ">{followers}</h2>
            </div>
          </div>
          <div className=" stat ">
            <p className=" stat-title text-xl mb-2">Following</p>
            <div className="stat-figure  text-3xl md:text-5xl">
              <FaUserGroup className="text-secondary text-5xl" />
            </div>
            <div className="stat-value">
              <h2 className="text-3xl md:text-4xl ">{following}</h2>
            </div>
          </div>
          <div className=" stat ">
            <p className=" stat-title text-xl mb-2">
              Public public_repositories
            </p>
            <div className="stat-figure  text-3xl md:text-5xl">
              <FaCircleNodes className="text-secondary text-5xl" />
            </div>
            <div className="stat-value">
              <h2 className="text-3xl md:text-4xl ">{public_repos}</h2>
            </div>
          </div>
          <div className=" stat ">
            <p className=" stat-title text-xl mb-2">Public Gists</p>
            <div className="stat-figure  text-3xl md:text-5xl">
              <IoIosGitNetwork className="text-secondary text-5xl" />
            </div>
            <div className="stat-value">
              <h2 className="text-3xl md:text-4xl ">{public_gists}</h2>
            </div>
          </div>
        </div>
        {/* Latest Repos Section */}
        <div className="flex flex-col mt-12 mx-8">
          <h2 className="mb-4 text-xl text-primary">Latest Repositories </h2>
          {repos.map((item) => (
            <div
              key={item.id}
              className="card rounded-md  mb-4 bg-gray-800 hover:bg-gray-900"
            >
              <div className="card-body">
                <h3>
                  {" "}
                  <a href={item.html_url} target="_blank" rel="noreferrer">
                    <FaLink className="inline mr-2" /> {item.name}
                  </a>
                </h3>

                <p>{item.description}</p>
                {/* ICONS */}
                <div>
                  <div className="badge badge-success mr-2">
                    <FaStar />
                    {item.stargazers_count}
                  </div>

                  <div className="badge badge-warning mr-2">
                    <FaEye /> {item.watchers}
                  </div>

                  <div className="badge badge-error mr-2">
                    <FaInfo /> {item.open_issues_count}
                  </div>

                  <div className="badge badge-info ">
                    <FaUtensils /> {item.forks_count}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Map ends here */}
        </div>
      </div>
    );
  }
}
export default User;
