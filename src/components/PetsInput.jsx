import PropTypes from "prop-types";

export default function PetsInput(props) {
  return (
    <>
      <label htmlFor={`petsInput${props.id}`}>Pet Name</label>
      <input
        type="text"
        name="name"
        id={props.id}
        value={
          props.formData.pets[props.id] != undefined
            ? props.formData.pets[props.id].name
            : ""
        }
        onChange={props.handleChange}
      />
      <p>Current value: {props.formData.pets[props.id]}</p>
    </>
  );
}

PetsInput.propTypes = {
  id: PropTypes.number,
  formData: PropTypes.object,
  handleChange: PropTypes.func,
};
