// import { useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    async function fetchProfile() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://api.github.com/users/edleychris`
        );
        setProfile(response.data);
        const reposResponse = await axios.get(response.data.repos_url);
        setRepos(reposResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, []);
  return (
    <header style={{ width: "335px" }}
      className={`bg-dark-teal shadow h-full fixed left-0 top-0 bottom-0 `}
    >
      <div className="flex flex-col h-full px-8 w-[335px] max-[335px]:px-4 w-full mt-4 gap-6">
        <Link to="/" className="flex px-0 flex-col">
          <img
            src={profile?.avatar_url}
            alt="EdleyChris"
            className="w-5 aspect-square object-cover rounded md:w-50"
          />
          <div>
            <h1 className="flex flex-col py-4 text-white">
              <span className="text-[1rem] font-semibold">
                {profile?.name}
              </span>
              <span>{profile?.login}</span>
            </h1>
          </div>
        </Link>
        <nav className="flex flex-col gap-4 text-dark-yellow">
          <Link to="/" id="step-1">
            {" "}
            Home{" "}
          </Link>
          <Link to="/about" id="step-2">
            {" "}
            About{" "}
          </Link>
          <Link to="/repos" id="step-3">
            {" "}
            Repositories{" "}
          </Link>
          <Link to="*" id="step-3">
            {" "}
            Setting{" "}
          </Link>
        </nav>
        <div>
          <div className="space-y-3">
            {/* <h2 className="text-xl">{profile?.bio}</h2> */}
            <div className="flex gap-x-4 items-center">
              <img src=".././assets/email.svg" alt="" className="mt-[0.4rem]" />
              <a href={`mailto:${profile?.email}`}>{profile?.email}</a>
            </div>
            <div className="flex gap-x-4 items-center text-white">
              <img
                src=".././assets/follower.svg"
                alt=""
                className="mt-[0.4rem]"
              />
              <p>
                {profile?.followers} followers. {profile?.following} following
              </p>
            </div>
          </div>
          <div className="mt-10 pt-4 border-t border-neutral-100 dark:border-neutral-400">
            <h2 className="font-semibold mb-2 text-white">Achievements</h2>
            <img
              src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
              alt=""
              className="aspect-square rounded-full w-16"
            />
          </div>
        </div>
        <footer className="bg-gray-200 text-white text-center py-2 mt-auto mb-6 animate-bounce">
          <div>&copy; {new Date().getFullYear()} Nk-Repo-profile</div>
        </footer>
      </div>
      {/* <div className="absolute top-8 right-0 p-2 cursor-pointer" onClick={toggleSidebar}>
        Arrow<FontAwesomeIcon icon={faBars} className="text-white text-xl" />
      </div> */}
    </header>
  );
};

export default Header;
