import React from 'react'
import '../../style/components.scss'

import logoCar from '../../img/svg/carro.svg'

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'telefone',
    label: 'Telefone',
    type: 'text',
  },
  {
    id: 'mensagem',
    label: 'Mensagem',
    type: 'text',
  },
];

const Modal = ({setModal}) => {
  const [select, setSelect] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(false);
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  function SendModal(event) {
    event.preventDefault()
    setModal(false)
  }

  function CloseModal() {
    setModal(false)
  }

  function handleChange({target}) {
    const {id, value} = target;
    setForm({ ...form, [id]: value });
    setCheckbox(target.checked)
  }
  return (
    <div className="containerModal">
      <button className="btnModal" onClick={CloseModal}>Minimizar</button>
      <form className="modal" onSubmit={SendModal}>
        <p>
          <img src={logoCar} className="carro" alt="carro" />
          Solicitar cotação
        </p>
        {formFields.map(({ id, label, type }) => (
          <div className="formInput" key={id}>
            <input 
              placeholder={label}
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            />
          </div>
        ))}
        <select className="formInput" value={select} id="select" onChange={({ target }) => setSelect(target.value)}>
          <option value="" disabled>Modelo</option>
          <option value="bmwserie1">BMW Série 1</option>
          <option value="bmwserie2">BMW Série 2</option>
          <option value="bmwserie3">BMW Série 3</option>
          <option value="bmwserie4">BMW Série 4</option>
          <option value="bmwm3">BMW M3</option>
          <option value="bmwm5">BMW M5</option>
          <option value="bmwx2">BMW X2</option>
          <option value="bmzz4">BMW Z4</option>
        </select>
        <label className="checkbox">
          <input
            type="checkbox"
            value="termos"
            checked={checkbox}
            onChange={handleChange}
          />
          <p>Aceito o <span> Politica de Privacidade</span></p>
        </label>
        <button className="button">Enviar</button>
      </form>
    </div>
  )
}

export default Modal
