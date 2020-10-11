import React, { useState } from "react";
import Error from "./Error";
import PropType from "prop-types";

const Form = ({ search, updateSearch, updateConsult }) => {
  // error manager
  const [error, updateError] = useState(false);

  // extract country and city
  const { city, country } = search;

  // function what assign from elemento to state
  const handleChange = (e) => {
    // update the state
    updateSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate
    if (city.trim() === "" || country.trim() === "") {
      updateError(true);
      return;
    }
    updateError(false);
    // send information to the api
    updateConsult(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="All fields are obligatory" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City: </label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Select a country --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">Country: </label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Search Weather"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};
Form.propType = {
  search: PropType.object.isRequired,
  updateSearch: PropType.func.isRequired,
  updateConsult: PropType.func.isRequired,
};
export default Form;
