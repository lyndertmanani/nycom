
import { categories } from "./data";
import { truncateWords } from "./utils";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/vote/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => handleClick(category.id)}
          className="w-[300px] overflow-hidden duration-700 border-gray-400 rounded-lg border ease-in-out delay-0 transform transition text-black hover:text-gray-800 bg-opacity-65 bg-[#ffffff00] shadow-none hover:shadow-xl cursor-pointer"
        >
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold">{truncateWords(category.title, 7)}</h1>
            <p className="mt-1 text-sm">{truncateWords(category.description.join(" "), 14)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;