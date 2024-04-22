import { useEffect, useState } from "react";
import RepoMain from "../component/RepoMain";
import axios from "axios";
import Header from "../component/Header";

function Repos() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://api.github.com/users/edleychris`);
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
    <>
      <Header />
      <div className="width-max">

      {isLoading ? (
          <div className="content mx-auto container px-8 max-[375px]:px-2 flex items-center justify-center min-h-[calc(100vh-64px)] flex-col gap-4">
          
          <div className="mx-auto mt-10">

        loading.....
          </div>
        </div>
      ) : (
          <section className="px-2 bg-grey-light-100">
          <div className="content mx-auto container px-8 max-[375px]:px-2 flex flex-col gap-4 max-[504px]:py-8 py-8">
            <div className="md:grid md:grid-cols-3 md:grid-rows-[auto_1fr] md:gap-x-8">
             
              <RepoMain />
            </div>
          </div>
        </section>
      )}
      </div>
    </>
  );
}

export default Repos;
