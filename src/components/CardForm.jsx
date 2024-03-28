import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/citiesSlice";

function CardForm({ addCity }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imgUrl: "",
    isVisited: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      id: Math.random(),
      title: formData.name,
      description: formData.description,
      imgUrl: formData.imgUrl,
      isVisited: formData.isVisited,
    };
    setFormData({
      title: "",
      description: "",
      imgUrl: "",
      isVisited: false,
    });
    dispatch(add(city));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg"
    >
      <div className="flex flex-col">
        <label className="text-white">Nome Città</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="text-white">Descrizione</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label className="text-white">Immagine</label>
        <input
          type="text"
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="text-white">Visitata?</label>
        <input
          type="checkbox"
          name="isVisited"
          checked={formData.isVisited}
          onChange={handleInputChange}
        ></input>
      </div>
      <button className="bg-zinc-950 text-white" type="submit">
        Aggiungi Card
      </button>
    </form>
  );
}

export default CardForm;
