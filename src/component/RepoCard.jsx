import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RepoDelete from "./RepoDelete";

function RepoCard({ repo }) {
  const [stared, setStared] = useState(false);

  const colors = {
    html: "#e34c26",
    css: "#563d7c",
    javascript: "#f1e05a",
    python: "#3572a5",
    java: "#b07219",
    c: "#555555",
    vue: "#2c3e50",
    shell: "89E051",
  };

  const handleStar = () => {
    setStared((prevStared) => !prevStared);
  };

  const updateTimeFormat = (mountedTime) => {
    const time = new Date(mountedTime);
    const now = new Date();
    const diff = now - time;
    const diffInSec = diff / 1000;
    const diffInMin = diffInSec / 60;
    const diffInHour = diffInMin / 60;
    const diffInDay = diffInHour / 24;
    const diffInMonth = diffInDay / 30;
    const diffInYear = diffInMonth / 12;

    if (diffInSec < 60) {
      return `${Math.floor(diffInSec)} seconds ago`;
    } else if (diffInMin < 60) {
      return `${Math.floor(diffInMin)} minutes ago`;
    } else if (diffInHour < 24) {
      return `${Math.floor(diffInHour)} hours ago`;
    } else if (diffInDay < 30) {
      return `${Math.floor(diffInDay)} days ago`;
    } else if (diffInMonth < 12) {
      return `${Math.floor(diffInMonth)} months ago`;
    } else {
      return `${Math.floor(diffInYear)} years ago`;
    }
  };

  return (
    <li className="py-6 border-t border-grey-200 flex justify-between items-center">
      <div>
        <div className="flex gap-x-2 items-center">
          <Link to={`/repo/${repo.name}`} className="text-lg font-semibold">
            {repo.name}
          </Link>
          <p className="text-repoColor text-xs px-[0.4375rem] leading-[1.125rem] border border-grey-100 capitalize rounded-3xl">
            {repo.visibility}
          </p>
        </div>
        <div>
          <p className="mt-2 pr-4 md:pr-0 text-sm">
            {repo.description === null ? "No description" : repo.description}
          </p>
        </div>
        <div className="flex gap-x-4 mt-4 items-center flex-wrap">
          {repo.language && (
            <div className="flex gap-x-2 items-center">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[repo.language.toLowerCase()] }}
              ></div>
              <p>{repo.language}</p>
            </div>
          )}
          {repo.forks_count > 0 && (
            <div className="flex gap-x-2 items-center">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z"
                  fill="#000000"
                />
              </svg>
              <p>{repo.forks_count}</p>
            </div>
          )}
          {repo.open_issues_count > 0 && (
            <div className="flex gap-x-2 items-center">
              <img src=".././assets/github-star.svg" alt="" />
              <p>{repo.open_issues_count}</p>
            </div>
          )}
          <div className="flex gap-x-2 items-center">
            <p className="text-xs">
              Updated on {updateTimeFormat(repo.updated_at)}
            </p>
          </div>
        </div>
      </div>
      <div className="gap-4 flex flex-col">
            <RepoDelete repo={repo.name}/>
      <button
        className="flex items-center px-4 py-[0.25rem] gap-x-3 bg-neutral-200 rounded-md border border-grey-200  transition-all duration-300 hover:bg-[#E5E5E5]"
        onClick={handleStar}
        >
        {!stared ? (
          <svg
            stroke="#777"
            fill="#ddd"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
          </svg>
        ) : (
          <svg
          fill="#FFB633"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
          </svg>
        )}
        Star
      </button>
        </div>
    </li>
  );
}
RepoCard.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    visibility: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string,
    forks_count: PropTypes.number.isRequired,
    open_issues_count: PropTypes.number.isRequired,
    updated_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default RepoCard;
