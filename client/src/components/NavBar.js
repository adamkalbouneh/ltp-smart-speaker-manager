import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faRobot, faListUl, faLink, faTableColumns, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
//import './Navbar.css';

function NavBar() {
    return (
        <div className="navBox my-0 flex justify-between h-25 w-35 flex-col items-center px-5">
            <div>
                <Link to="/home" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2">
                    <span>Home</span>
                    <FontAwesomeIcon size="md" icon={faHome} />
                </Link>
                <Link to="/dashboard" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2">
                    <span>Dashboard</span>
                    <FontAwesomeIcon size="md" icon={faTableColumns} />
                </Link>
                <Link to="/login" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2">
                    <span>Skills</span>
                    <FontAwesomeIcon size="md" icon={faRobot} />
                </Link>
                <Link to="/pair" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2">
                    <span>Routines</span>
                    <FontAwesomeIcon size="md" icon={faListUl} />
                </Link>
                <Link to="/pair" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2">
                    <span>Pair</span>
                    <FontAwesomeIcon size="md" icon={faLink} />
                </Link>
                <Link to="/account" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2">
                    <span>Account</span>
                    <FontAwesomeIcon size="md" icon={faUser} />
                </Link>      
            </div>
            <div>
                <Link to="/login" className="flex items-center gap-2 text-white bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-1 text-center mr-2 mb-2">
                    <span>Log out</span>
                    <FontAwesomeIcon size="md" icon={faArrowRightFromBracket} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
