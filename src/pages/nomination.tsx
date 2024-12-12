
import { useParams } from "react-router-dom";
import { categories } from "../components/Nomination/data";
import { Select, SelectItem } from "@nextui-org/select";
import { nominees } from "./NameData"; // Import dynamic data
 

const NominationForm = () => {
  const { id } = useParams<{ id: string }>(); // Explicitly type params
  const category = id ? categories.find((cat) => cat.id === parseInt(id)) : undefined;


  // const randomNames = ["John Doe", "Jane Smith", "Alice Brown"];

  return (
    <div>
      <section className="bg-black h-auto text-white text-center p-5">
        <h1 className="text-3xl">Annual Employee of the Year Awards Nomination On {category?.title}</h1>
      </section>

      <div className="flex justify-center items-center pt-10 mx-5">
        <form className="w-full max-w-xl">
          <div className="items-start justify-start mb-4">
            <h1 className="text-black text-start text-xl leading-tighter font-bold">{category?.question}</h1>
            <p className="text-sm text-gray-600">{category?.description.join(" ")}</p>
          </div>
          <div className="  justify-start mt-3">
            <div className="  text-black space-y-6">
              <textarea
                name="description"
                maxLength={280}
                required
                onPaste={(e) => e.preventDefault()} // Disable pasting
                className="w-full h-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your story (max 280 characters)..."
              ></textarea>


            </div>
          </div>
          <div className="flex justify-start mt-3">
            <p className="text-gray-700"></p>
          </div>
          <div className="grid grid-cols-2 space-x-10 justify-start mt-5">
 
            <Select
              className="max-w-xs h-10   bg-white border  hover:border-[#d1d1d1]"
              defaultSelectedKeys={["name"]}
              placeholder="Select a nominee"
            >
              {nominees.map((name, index) => (
                <SelectItem key={index} className="bg-white/10  bg-opacity-80 backdrop-filter backdrop-blur-sm hover:bg-opacity-70 rounded-lg">
                  {name}
                </SelectItem>
              ))}
            </Select>



            <div className=" ">
              <input
                type="submit"
                value="Nominate"
                className="lg:w-1/2 p-5 lg:px-2 py-1.5 mb-2  outline-none cursor-pointer border-none bg-black text-white duration-700"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NominationForm;