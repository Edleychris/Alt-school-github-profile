import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../component/Header";

const Repo = () => {
  const { name } = useParams();
  const [repo, setRepo] = useState(null);
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/repos/edleychris/${name}`
        );
        setRepo(response.data);
        console.log(response.data, "response1222");
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // return () => {
    //   // Cleanup function
    // };
  }, [name]);

  const convertDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleString();
  };

  return (
    <section className="px-2">
      {loading && (
        <div className="content mx-auto container px-8 max-[375px]:px-2 flex items-center justify-center min-h-[calc(100vh-64px)] flex-col gap-4">
          <div className="mx-auto mt-10">Loading...</div>
        </div>
      )}
      {repo && (
        <div className="repo-container py-6 md:py-12 content mx-auto container px-8 max-[375px]:px-2 flex flex-col gap-4 max-[504px]:py-8">
          <div className="flex flex-col md:flex-row justify-between">
            {/* <div className="mt-8 md:w-1/3">
              <img
                src={profile?.avatar_url}
                alt="EdleyChris"
                className="w-5 aspect-square object-cover rounded md:w-70"
              />
            </div> */}
            <Header />

            <div className="md:w-2/3 mt-4 width-max">
              <div className="border-b border-gray-200">
                <div className="flex items-center gap-x-2 mb-6">
                  {/* change  */}
                  <img
                    src={profile?.avatar_url}
                    alt="EdleyChris"
                    className="w-5 aspect-square object-cover rounded md:w-70"
                  />
                  <h1 className="text-xl md:text-2xl text-sky-500">
                    {repo.name}
                  </h1>
                  {/* <p className="text-repoColor text-xs px-[0.4375rem] leading-[1.125rem] border border-grey-100 capitalize rounded-3xl">
                    {repo.visibility}
                  </p> */}
                </div>

                {/* <p className="text-sm mt-2">
                  {repo.description ? repo.description : "No description"}
                </p> */}
              </div>

              <div className="space-y-4 mt-8">
                <p className="text-lg">
                  Created on {convertDate(repo.created_at)}
                </p>
                <p>Updated on {convertDate(repo.updated_at)}</p>
                <p className="leading-[1.625rem] max-w-3xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  {/* Remaining content */}
                </p>
                <div className="flex gap-2 items-center">
                  {/* Remaining content */}
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <a
                  href={repo.html_url}
                  className="block w-32 text-lg text-center py-2 bg-dark-yellow text-neutral-50 hover:bg-dark-yellow/80 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Page
                </a>
                <a
                  href="/repos"
                  className="block w-32 text-lg text-center py-2 bg-dark-yellow text-neutral-50 hover:bg-dark-yellow/80 transition-all duration-300"
                >
                  Back to Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {error && (
        <div className="content mx-auto container px-8 max-[375px]:px-2 flex items-center justify-center min-h-[calc(100vh-64px)] flex-col gap-4">
          <div className="mx-auto mt-10">
            Error: {error.message}
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Repo;
