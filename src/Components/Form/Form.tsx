import React, {useState} from 'react';
import {UserForm} from "../type";


const url = 'http://146.185.154.90:8000/messages';

const Form = () => {
  const [message, setMessage] = useState<UserForm>({
      name:'',
      message: '',
    }
  );

  const onFormSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    const data = new URLSearchParams();
    data.set('message', message.message);
    data.set('author', message.name);
    const response = await fetch(url, {
      method: 'post',
      body: data,
    });
    setMessage({
      ...message,
      name:'',
      message:'',
    })
  };

  const onNameChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setMessage(prev=> ({...prev, [name]:value}));
  }


  return (
    <div className='border-bottom mb-3 bg-danger'>
      <form className="d-flex flex-column ps-3 pe-3" onSubmit={onFormSubmit}>
        <div className="d-flex justify-content-center mt-4  mb-4">
          <input type="text" placeholder="Your username" name='name' value={message.name} onChange={onNameChange} className="rounded-4"/>
        </div>
        <textarea  rows={3} placeholder="Your message" style={{resize:"none"}} name='message' value={message.message} onChange={onNameChange} className="rounded-4"></textarea>
        <div className="d-flex justify-content-center mt-3 mb-4">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;