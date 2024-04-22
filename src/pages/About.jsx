import { useState } from 'react';
import Header from '../component/Header';

function About() {
  const [lists] = useState([
    { id: 1, list: "Create a new Reactjs application and install dependencies." },
    { id: 2, list: "Fetch GitHub repositories using the github endpoint " },
    { id: 3, list: "Create a page to display a list of all the user's repositories on GitHub. The page should have pagination functionality." },
    { id: 4, list: "Create another page to display data for a single repository clicked from the list of repositories using nested routes." },
    { id: 5, list: "Implement a wildcard route to handle 404 pages." },
    { id: 6, list: "Ensure that the UI and design of the pages are aesthetically pleasing and user-friendly." },
  ]);

  return (
    <section className="px-2 bg-gray-100">
        <Header />
      <div className="content mx-auto container px-8 max-[375px]:px-2 flex items-center justify-center min-h-[calc(100vh-64px)] flex-col gap-4 max-[504px]:py-8">
        <h1 className="text-4xl text-center font-normal max-md:text-3xl max-sm:text-2xl">
          About Project
        </h1>
        <p>The following list is comprised within the project</p>
        <ul className="flex gap-2 flex-col w-[500px] list-decimal mt-8 max-[613px]:w-full">
          {lists.map((list) => (
            <li key={list.id} className="bg-white px-4 py-2">
              {list.list}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
