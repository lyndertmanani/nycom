import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Select, SelectItem } from "@nextui-org/select";
import { categories } from "../components/Nomination/data";
import { nominees } from "./NameData";
import { db } from "../config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface NominationFormProps {
  // Add any props if needed
}
const NominationForm: React.FC<NominationFormProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Enhanced category finding with error handling
  const category = id
    ? categories.find((cat) => cat.id === parseInt(id))
    : undefined;

  // State management for form
  const [nominee, setNominee] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form validation
  const validateForm = () => {
    if (!nominee) {
      alert("Please select a nominee.");
      return false;
    }

    if (!description.trim()) {
      alert("Please provide a description.");
      return false;
    }

    if (description.length > 600) {
      alert("Description cannot exceed 600 characters.");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;

    // Validate form
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      // Prepare nomination data
      const nominationData = {
        nominee,
        description: description.trim(),
        category: category?.title || "Uncategorized",
        timestamp: Timestamp.now(),
      };

      // Add to Firestore
      const nominationsCollection = collection(db, "nominations");
      await addDoc(nominationsCollection, nominationData);

      // Success handling
      alert("Nomination submitted successfully!");

      // Reset form
      setNominee("");
      setDescription("");

      // Optionally navigate
      navigate("/nominations-submitted");
    } catch (error) {
      console.error("Nomination submission error:", error);
      alert("Failed to submit nomination. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle nominee selection
  const handleNomineeChange = (key: React.Key) => {
    const selectedNominee = nominees[Number(key)];
    setNominee(selectedNominee);
  };

  // If no category found, show error
  if (!category) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500">
            Invalid Nomination Category
          </h2>
          <p className="mt-4">The category you're looking for does not exist.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-black text-white rounded"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-black h-auto text-white text-center p-5">
        <h1 className="text-3xl">
          Annual Employee of the Year Awards Nomination: {category.title}
        </h1>
      </section>

      <div className="flex justify-center items-center pt-10 mx-5">
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <div className="items-start justify-start mb-4">
            <h1 className="text-black text-start text-xl leading-tighter font-bold">
              {category.question}
            </h1>
            <p className="text-sm text-gray-600">{category.description.join(" ")}</p>
          </div>

          <div className="justify-start mt-3">
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={600}
              required
              onPaste={(e) => e.preventDefault()}
              className="w-full h-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your nomination details here...."
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {description.length}/600 characters
            </div>
          </div>

          <div className="grid grid-cols-2 space-x-10 justify-start mt-5">
          <Select
  className="max-w-xs h-10 bg-white border hover:border-[#d1d1d1]"
  placeholder="Select a nominee"
  selectedKeys={nominee ? [nominee] : []} // This helps track the selected value
  onSelectionChange={(keys) => {
    const selectedKey = Array.from(keys)[0];
    if (selectedKey) {
      const selectedNominee = nominees[Number(selectedKey)];
      setNominee(selectedNominee);
    }
  }}
>
  {nominees.map((name, index) => (
    <SelectItem key={index} value={name}>
      {name}
    </SelectItem>
  ))}
</Select>
            <div>
              <input
                type="submit"
                value={isSubmitting ? "Submitting..." : "Nominate"}
                // disabled={isSubmitting}
                className={`lg:w-1/2 p-5 lg:px-2 py-1.5 mb-2 outline-none cursor-pointer border-none 
                  ${isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black text-white duration-700 hover:bg-gray-800"
                  }`}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NominationForm;
