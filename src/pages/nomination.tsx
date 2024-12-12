import { useParams } from "react-router-dom";
import { categories } from "../components/Nomination/data";
import { Select, SelectItem } from "@nextui-org/select";
import { nominees } from "./NameData";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { supabase } from "../config/supabaseClient";

const NominationForm = () => {
  const { id } = useParams<{ id: string }>();
  const category = id ? categories.find((cat) => cat.id === parseInt(id)) : undefined;

  const [email, setEmail] = useState("");
  const [nominee, setNominee] = useState("");
  const [story, setStory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email || "");
    }
  }, []);

  const handleNomination = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!email) {
      setErrorMessage("User not authenticated");
      return;
    }

    try {
      const { error } = await supabase
        .from("nominations")
        .insert([
          {
            email,
            nominee,
            story,
            category: category?.title || "",
          },
        ]);

      if (error) throw error;

      setSuccessMessage("Nomination submitted successfully!");
      setNominee("");
      setStory("");
    } catch (err) {
      setErrorMessage("Failed to submit nomination");
      console.error(err);
    }
  };

  return (
    <div>
      <section className="bg-black h-auto text-white text-center p-5">
        <h1 className="text-3xl">
          Annual Employee of the Year Awards Nomination On {category?.title}
        </h1>
      </section>

      <div className="flex justify-center items-center pt-10 mx-5">
        <form className="w-full max-w-xl" onSubmit={handleNomination}>
          <div className="items-start justify-start mb-4">
            <h1 className="text-black text-start text-xl leading-tighter font-bold">{category?.question}</h1>
            <p className="text-sm text-gray-600">{category?.description.join(" ")}</p>
          </div>
          <div className="justify-start mt-3">
            <textarea
              name="description"
              maxLength={280}
              required
              value={story}
              onChange={(e) => setStory(e.target.value)}
              className="w-full h-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your story (max 280 characters)..."
            ></textarea>
          </div>
          <div className="grid grid-cols-2 space-x-10 justify-start mt-5">
            <Select
              className="max-w-xs h-10 bg-white border hover:border-[#d1d1d1]"
              defaultSelectedKeys={["name"]}
              placeholder="Select a nominee"
              onSelectionChange={(keys) => {
                const selectedKey = Array.from(keys)[0];
                if (typeof selectedKey === 'number') {
                  setNominee(nominees[selectedKey]);
                }
              }}
            >
              {nominees.map((name, index) => (
                <SelectItem key={index}>{name}</SelectItem>
              ))}
            </Select>

            <input
              type="submit"
              value="Nominate"
              className="lg:w-1/2 p-5 lg:px-2 py-1.5 mb-2 outline-none cursor-pointer border-none bg-black text-white duration-700"
            />
          </div>
          
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default NominationForm;