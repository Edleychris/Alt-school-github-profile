import { useEffect, useState } from "react";
import axios from "axios";

function RepoDelete({ repo }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const deleteRepo = async () => {
      setIsLoading(true);
      try {
        const response = await axios.delete(
          `https://api.github.com/repos/edleychris/${repo}`,
          {}
        );
        console.log(response.data); // Log the response data
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    deleteRepo();
  }, [repo]);

  return (
    <>
      <button className="flex items-center px-4 py-[0.25rem] gap-x-3 bg-neutral-200 rounded-md border border-grey-200  transition-all duration-300 hover:bg-[#E5E5E5]">
        Delete
      </button>
    </>
  );
}

export default RepoDelete;
