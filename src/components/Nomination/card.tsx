import { useNavigate } from 'react-router-dom';
import { Category } from './data';

interface CardProps {
  category: Category;
}

const Card: React.FC<CardProps> = ({ category }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/nomination/${category.id}`);
  };

  return (
    <div 
      className="p-4 transform transition-all duration-300 hover:scale-105 cursor-pointer  bg-white border  hover:border-[#d1d1d1] rounded-md bg-opacity-80 backdrop-filter backdrop-blur-xl hover:bg-opacity-70"
      onClick={handleCardClick}
    >
      <div className="max-w-full h-full overflow-hidden">
        <div className="px-4 py-3">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h2>
          <ul className="text-sm text-gray-600 list-disc list-inside">
            {category.description.map((desc, index) => (
              <li key={index} className="mb-1">{desc}</li>
            ))}
          </ul>
        </div>
        <div className="px-4 py-2 bg-gray-50 border-t">
          <p className="text-xs text-gray-500 italic">{category.question}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;