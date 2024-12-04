
import { useParams } from "react-router-dom";
import { categories } from "../components/vote/data";
import { Select, SelectItem } from "@nextui-org/select";

const NominationForm = () => {
  const { id } = useParams();
  const category = categories.find((cat) => cat.id === parseInt(id));

  const randomNames = ["John Doe", "Jane Smith", "Alice Brown"];

  return (
    <div>
      <section className="bg-black h-auto text-white text-center p-5">
        <h1 className="text-3xl">Annual Employee of the Year Awards Nomination Form</h1>
      </section>

      <div className="flex justify-center items-center pt-10 mx-5">
        <form className="w-full max-w-xl">
          <div className="items-start justify-start mb-4">
            <h1 className="text-black text-start text-xl leading-tighter font-bold">{category?.question}</h1>
            <p className="text-sm text-gray-600">{category?.description.join(" ")}</p>
          </div>
          <div className="flex justify-start mt-3">
            <div className="inline text-black ">
              <Select
                className="max-w-xs bg-white"
                defaultSelectedKeys={["name"]}
               
                placeholder="Select a nominee"
              >
                {randomNames.map((name, index) => (
                  <SelectItem key={index}>{name}</SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="flex justify-start mt-3">
            <p className="text-gray-700"></p>
          </div>
          <div className="flex justify-start mt-5">
            <input
              type="submit"
              value="Nominate"
              className="w-1/2 px-2 py-1.5 mb-2 rounded-full outline-none cursor-pointer border-none bg-black text-white duration-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NominationForm;