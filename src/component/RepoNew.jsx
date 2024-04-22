import { useState } from 'react';
import axios from "axios"

function RepoNew({ onClose }) {
    const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.request('POST /user/repos', {
                name: name,
                description: description,
                homepage: 'https://github.com/edleychris',
                private: false,
                has_issues: true,
                has_projects: true,
                has_wiki: true,
              
            });
            console.log(response.data); 
            onClose();
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg min-h-[200px] ">
                <h2 className="text-2xl font-bold mb-4">Create a new repository</h2>
                <div >
                    <p>A repository contains all project files, including the revision history. Already have a project repository elsewhere?</p>
                    <a href="#">Import a repository</a>
                </div>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className="mb-4 flex gap-2 w-full mt-2">
                        <div className='w-full flex gap-6'>
                            <div>
                                <label>Owner*</label>
                                <div className='bg-gray-200 rounded-lg border border-red-500 p-2'>
                                    <p>Edleychris</p>
                                </div>
                            </div>
                        <div>
                        <label htmlFor="repoName" className="block text-sm font-medium text-gray-700">
                            Repository name*
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        />
                        </div>
                        </div>
                    </div>
                    
                    <div>
                    <p>Great repository names are short and memorable. Need inspiration? How about <a href="">symmetrical-octo-adventure</a></p>

                        <div>
                            <label htmlFor="">Description (optional)</label>
                            <input type="text" 
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            name="description" 
                            onChange={(e) => setDescription(e.target.value)}
                            id="description" value={description} />
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 border rounded-md hover:bg-gray-400 focus:outline-none mt-6 focus:ring-2 focus:ring-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-dark-yellow h-[50%] text-white ml-3 px-4 py-1 rounded-md text-sm md:text-lg mt-6"
                        >
                            Create repositort
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RepoNew;
