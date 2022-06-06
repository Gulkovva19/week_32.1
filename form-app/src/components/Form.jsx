import React, { useState } from "react";

function Form(props) {
  const [state, setState] = useState(props);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.dataset.name]: e.target.value,
    });
  };

  return (
    <div>
      <form className="comments" onSubmit={handleSubmit}>
        <input
          data-name={"name"}
          placeholder="Введите имя"
          className="comments__input_small"
          onChange={handleChange}
          value={state.name}
        />
        <input
          data-name={"photo"}
          placeholder="Введите ссылку на фотографию"
          className="comments__input_small"
          onChange={handleChange}
          value={state.photo}
        />
        <textarea
          data-name={"comment"}
          placeholder="Введите комментарий"
          className="comments__input"
          onChange={handleChange}
          value={state.comment}
        ></textarea>
        <input className="comments__button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
