 
import { categories } from "./data";

const NominationForm = () => {
  return (
    <div>
      <h1>Annual Employee of the Year Awards Nomination Form</h1>
      {categories.map((category) => (
        <div key={category.id} style={{ marginBottom: "20px" }}>
          <h2>{category.title}</h2>
          <ul>
            {category.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <label>
            {category.question}
            <textarea placeholder={`Write about ${category.title.toLowerCase()}`} />
          </label>
        </div>
      ))}
    </div>
  );
};

export default NominationForm;
