import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="flex items-center gap-4 justify-between p-4">
      <h1 className="font-medium">
        Trans<span className="text-blue-400 font-bold">Cribo</span>
      </h1>
      <button className="flex items-center gap-1 specialbtn px-4 py-2 rounded-lg text-blue-400">
        <FontAwesomeIcon icon={faPlus} className="w-3" />
        <p>New</p>
      </button>
    </header>
  );
};

export default Header;
