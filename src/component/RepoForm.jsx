import PropTypes from "prop-types";

function RepoForm({ value, setValue, handleSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form className="mb-4 mt-4" onSubmit={handleSubmit}>
      <label htmlFor="search" className="sr-only">
        {" "}
        Search Repositories{" "}
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Find a repository..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-grey-200 rounded-md w-[75%] md:w-[65%] px-2 py-1 text-zinc-700"
      />
      <button
        type="submit"
        className="bg-dark-yellow text-neutral-50 ml-3 px-2 py-1 rounded-md text-sm md:text-lg"
      >
        Search
      </button>
    </form>
  );
}

RepoForm.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default RepoForm;
