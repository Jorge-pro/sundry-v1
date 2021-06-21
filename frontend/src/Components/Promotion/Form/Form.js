import React, {  useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import "./Form.css";


const initialValue = {
  title: '',
  details: '',
  email: '',
  telephone: '',
  url: '',
  imageUrl: '',
  price: 0,
}

const PromotionForm = ({ id }) => {

  const [values, setValues] = useState(id ? null : initialValue);
  const history = useHistory();
  
  
  useEffect(() => {
    if(id) {
      axios.get(`http://localhost:5000/promotions/${id}`)
        .then((response) => {
          console.log(response.data);
          setValues(response.data);
        });
    }
  },[id]);

  function onChange(ev){
    const { name, value } = ev.target;

    setValues({...values, [name]: value});
  }

  function onSubmit(ev) {
    ev.preventDefault();

    const method = id ? 'put' : 'post';
    const url = id
      ? `http://localhost:5000/promotions/${id}`
      : 'http://localhost:5000/promotions'

    axios[method](url, values)
      .then((response) => {
        history.push('/');
    });
  }
  
  if(!values) {
    return <div>Carregando ...</div>
  }

return(
    <div>
      <div className="promotion-form__title">
        <h2>Create new ad here</h2>
      </div>

      <form onSubmit={onSubmit}>

        <div className="promotion-form__group">
            <label htmlFor="title">Title</label>
            <input id= "title" name="title" type="text" onChange={onChange} value={values.title} />
        </div>

        <div className="promotion-form__group">
            <label htmlFor="details">Detalhes</label>
            <input id= "details" name="details" type="text" onChange={onChange} value={values.details} />
        </div>

        <div className="promotion-form__group">
            <label htmlFor="email">Email</label>
            <input id= "email" name="email" type="text" onChange={onChange} value={values.email} />
        </div>

        <div className="promotion-form__group">
            <label htmlFor="telephone">Telephone</label>
            <input id= "telephone" name="telephone" type="number" onChange={onChange} value={values.telephone} />
        </div>

        <div className="promotion-form__group">
            <label htmlFor="url">Link</label>
            <input id= "url" name="url" type="text" onChange={onChange} value={values.url} />
        </div>

        <div className="promotion-form__group">
            <label htmlFor="imageUrl">Imagem (URL)</label>
            <input id= "imageUrl" name="imageUrl" type="text" onChange={onChange} value={values.imageUrl} />
        </div>

        <div className="promotion-form__group">
            <label htmlFor="price">Price</label>
            <input id= "price" name="price" type="number" onChange={onChange} value={values.price} />
        </div>
        <div>
          <button className="promotion-form__btn" type="submit">To save</button>
        </div>

      </form>
    </div>
  )

};

export default PromotionForm;
