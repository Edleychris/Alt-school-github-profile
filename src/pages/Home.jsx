import { Link } from "react-router-dom";
import Header from "../component/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 min-h-screen width-max">
        {/* Trending Repositories Section */}
        <div className="container mx-auto px-4 py-12 ">
          <h2 className="text-3xl font-bold mb-8">Trending Repositories</h2>
          {/* Add code to fetch and display trending repositories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trending repository cards */}
            Example card:
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Repository Name</h3>
              <p className="text-gray-600">Description of the repository</p>
              <Link
                to="/repository-details"
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>

        {/* Recommended Users Section */}
        <div className="bg-gray-200 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Recommended Users</h2>
            {/* Add code to fetch and display recommended users */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Recommended user cards */}
              Example card:
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Username</h3>
                <p className="text-gray-600">Description of the user</p>
                <Link
                  to="/user-details"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Recent Activities</h2>
          {/* Add code to fetch and display recent activities */}
          <div className="divide-y divide-gray-300">
            {/* Recent activity items */}
            Example item:
            <div className="py-4">
              <p className="text-lg">
                User starred a repository: Repository Name
              </p>
              <p className="text-gray-600">3 hours ago</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Footer navigation links */}
            Example link:
            <a href="#" className="text-gray-300 hover:text-white">
              Terms
            </a>
            {/* GitHub logo */}
            <img src="./assets/github-logo.svg" alt="GitHub" className="h-8" />
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Home;
