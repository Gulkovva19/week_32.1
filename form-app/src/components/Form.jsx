import React, { useState } from "react";

function Form() {
  const [state, setState] = useState("");
  const [comments, setComments] = useState([]);
  const [names, setNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const arrayComments = [...comments];
    arrayComments.unshift(state.comment);
    setComments(arrayComments);

    const arrayNames = [...names];
    arrayNames.unshift(state.name);
    setNames(arrayNames);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.dataset.name]: e.target.value,
    });
  };

  return (
    <div className="comments">
      <div className="comments__list">
          {comments.map((comment) => (
            <div className="comments__column">
              <span>{comment}</span>
            </div>
          ))}
          {names.map((name) => (
            <div className="comments__column">
              <span>{name}</span>
            </div>
          ))}
      </div>
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
