import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faRobot, faListUl, faLink, faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navBox my-0 flex justify-between min-h-full w-32 flex-col items-center px-5">
            <div>
                <Link to="/login" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">
                    <span>Skills</span>
                    <FontAwesomeIcon size="md" icon={faRobot} />
                </Link>
                <Link to="/dashboard" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">
                    <span>Dashboard</span>
                    <FontAwesomeIcon size="md" icon={faTableColumns} />
                </Link>
                <Link to="/pair" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">
                    <span>Routines</span>
                    <FontAwesomeIcon size="md" icon={faListUl} />
                </Link>
                <Link to="/pair" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">
                    <span>Pair</span>
                    <FontAwesomeIcon size="md" icon={faLink} />
                </Link>
                
            </div>
            <div>
                <Link to="/login" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2">
                    <span>Log out</span>
                    <FontAwesomeIcon size="md" icon={faArrowRightFromBracket} />
                </Link>
            </div>
        </div>
    )
}

export default NavBar;
