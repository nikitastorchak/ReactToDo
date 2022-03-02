import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Task = ({tasks}) => {
  const [editTask, setEditTask] = useState(null);
  const onChangeCheckbox = async (id, checked) => {
    await axios.patch('http://localhost:8000/update', {
      _id: id,
      isChecked: !checked
    }).then(res => {
    })
  }
  return (
    tasks.map((item, index) => (
      <div className='card' key={(`card-${index}`)}>
          <h1 className='cardTitle'>Title
            <div className='iconWrap'>
              <svg onClick={() => setEditTask(item._id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M224 0H336C362.5 0 384 21.49 384 48V256H0V48C0 21.49 21.49 0 48 0H64L96 64L128 0H160L192 64L224 0zM384 288V320C384 355.3 355.3 384 320 384H256V448C256 483.3 227.3 512 192 512C156.7 512 128 483.3 128 448V384H64C28.65 384 0 355.3 0 320V288H384zM192 464C200.8 464 208 456.8 208 448C208 439.2 200.8 432 192 432C183.2 432 176 439.2 176 448C176 456.8 183.2 464 192 464z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/></svg>
            </div>
          </h1>
          {editTask !== item._id ?
                  <p key={(`card-${index}`)} className={!item.isChecked ? 'cardTask' : 'cardTask checked'}>{item.name}</p>
                  :
                  <input id='name' name='name' className='textbox' placeholder='Введите задание' />
          }                   
          <input id={(`cardChecker-${index}`)} className='cardChecker' type={'checkbox'} checked={item.isChecked}  onChange={() => onChangeCheckbox(item._id, item.isChecked)}  />
          <label htmlFor={(`cardChecker-${index}`)}></label>
      </div>
    ))  
  )
}
export default Task