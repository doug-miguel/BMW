import React from 'react'
import Modal from './Modal'
import '../../style/components.scss'


const Button = (props) => {
  const [modal, setModal] = React.useState(false)

  function OpenModal() {
    setModal(true)
  }

  return (
    <div>
      <button
        className="button"
        onClick={OpenModal}
      >
        {props.Title}
      </button>
      {modal && <Modal setModal={setModal} modal={modal} />}
    </div>
  )
}

export default Button
