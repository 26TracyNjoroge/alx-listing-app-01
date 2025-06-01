import React from 'react';

const Header: React.FC = () => {
    return (
        <header className='flex'>
           <form className='flex rounded-full border-solid border-purple-500' >
            {/* <img src={} alt='Logo'/> */}
                <div className='flex flex-1'>
                    <div>
                        <label>Location</label>
                        <input placeholder="Search for destination" type="text" />
                    </div>
                    <div>
                        <label>Check in</label>
                        <input placeholder="Add date"/>
                    </div>
                    <div>
                        <label>Check Out</label>
                        <input placeholder="Add date" type="text"/>
                    </div>
                    <div>
                        <label>People</label>
                        <input placeholder="Add guest" type="text"/>
                    </div>
                </div>
                <input type='search' value="Search"/>
           </form>
           <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>

        </header>
    )
}

export default Header;
