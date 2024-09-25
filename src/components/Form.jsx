import { useState } from "react";
import PetsInput from "./PetsInput";

export default function Form() {
  // --- Your state is pretty much the same:
  const [formData, setFormData] = useState({
    name: "",
    pets: ["one", "two"],
  });

  // --- We don't need this state anymore:
  // const [numberOfPets, setNumberOfPets] = useState(1);

  // --- We don't need this function:
  //
  // function makePetInputs() {
  //   let result = [];
  //   for (let i = 0; i < numberOfPets; i++) {
  //     result.push(
  //       <PetsInput
  //         key={i}
  //         id={i}
  //         formData={formData}
  //         handleChange={handlePetsChange}
  //       />
  //     );
  //   }
  //   return result;
  // }

  function addPetInput() {
    // --- We don't need this:
    // setNumberOfPets(numberOfPets + 1);

    // --- We do this instead:
    setFormData({ ...formData, pets: [...formData.pets, "New Pet"] });
  }

  function handleChange(event) {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  }

  // --- This is the main function we've changed:
  function handlePetsChange(event) {
    event.preventDefault();

    // --- Get the id and value just for tidiness:
    let id = event.target.id;
    let newValue = event.target.value;

    // --- First we make a newArray, made up by mapping through the old array:
    const newPets = formData.pets.map((pet, index) => {
      // console.log("logging index ", index);
      // console.log("logging id ", id);
      // console.log("logging pet ", pet);

      // --- And if the current index of our map matches the id of the input field, we return the newValue:
      if (index == id) {
        console.log("match, value, ", newValue);
        return newValue;
      } else {
        // --- Otherwise we return the old value:
        console.log("returning ", pet);
        return pet;
      }
    });

    // --- Finally, we setFormData to be all of the previous form data, and the 'pets' array to be our 'newPets' array:
    setFormData((prevFormData) => ({
      ...prevFormData,
      pets: newPets,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  // --- We don't need this function either:
  // function replaceElement(index, element) {
  //   let newArray = formData.pets;
  //   newArray[index] = element;
  //   return newArray;
  // }

  // --- And now we can .map through our formdata.pets array:
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <p>Current value is: {formData.name}</p>
        {formData.pets.map((pet, index) => {
          return (
            <PetsInput
              key={index}
              id={index}
              formData={formData}
              handleChange={handlePetsChange}
            />
          );
        })}
        <button type="submit">Submit</button>
      </form>
      <button onClick={addPetInput}>Add another pet</button>
    </>
  );
}
