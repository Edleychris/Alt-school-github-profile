import { useEffect, useState } from 'react';
import RepoForm from './RepoForm';
import RepoCard from './RepoCard';
import axios from 'axios';
import RepoNew from './RepoNew';

function RepoMain() {
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const perPage = 8;

useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api.github.com/users/edleychris/repos`);
        setRepos(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

const closeModal = () => {
  setShowModal(false);
};


  const total = filteredRepos.length;
  const pageLength = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const end = page * perPage;



  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/edleychris/repos?q=${search}`);
      setRepos(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="md:col-span-2 w-full">
      <div className='flex w-full justify-between items-center'>
        <div className='w-full'>
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
        Repositories
      </h1>
      <RepoForm value={search} setValue={setSearch} handleSearch={handleSearch} />
        </div>
        <button onClick={() => setShowModal(true)}
        className="bg-dark-yellow h-[50%] text-neutral-50 ml-3 px-4 py-1 rounded-md text-sm md:text-lg mt-6"
        >New</button>
      </div>
      <ul className="text-repoColor dark:text-[#d9cccc] mt-8">
        {filteredRepos.slice(start, end).map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </ul>
      {filteredRepos.length === 0 && (
        <div className="">
          <p className="text-neutral-500 dark:text-neutral-400">
            No repositories found
          </p>
        </div>
      )}
      <div
        className={`flex flex-col items-start gap-y-3 md:flex-row justify-between md:items-center py-8 border-t border-grey-200 ${
          search !== '' ? 'hidden' : ''
        }`}
      >
        <div className="flex items-center gap-x-2 flex-wrap">
          <button
            className={`px-4 py-2 border border-grey-200 rounded-md transition-all duration-300 hover:bg-[#E5E5E5] ${
              page === 1 ? 'hidden' : ''
            }`}
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          >
            Prev
          </button>

          <div>
            <p className="text-neutral-500 dark:text-neutral-400">
              Page {page} of {pageLength}
            </p>
          </div>

          {/* create buttons of numbers */}
          {[...Array(pageLength)].map((_, num) => (
            <button
              key={num}
              className={`px-4 py-2 border border-grey-200 rounded-md transition-all duration-300 hover:bg-[#E5E5E5] ${
                num + 1 === page ? 'bg-neutral-200' : ''
              }`}
              onClick={() => setPage(num + 1)}
            >
              {num + 1}
            </button>
          ))}
          <button
            className={`px-4 py-2 border border-grey-200 rounded-md transition-all duration-300 hover:bg-[#E5E5E5] ${
              page === pageLength ? 'hidden' : ''
            }`}
            onClick={() => setPage((prevPage) => Math.min(prevPage + 1, pageLength))}
          >
            Next
          </button>
        </div>
      </div>
      {/* {showModal && <RepoNew />} */}
      {/* <RepoNew isOpen={showModal}/> */}
      {showModal && <RepoNew onClose={closeModal} />}
    </main>
  );
}

export default RepoMain;
