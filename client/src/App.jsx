
import './App.css'
import DOMPurify from 'dompurify';
import { siReact } from 'simple-icons'
import { useState } from 'react';
function App() {
    const purifiedIcons = DOMPurify.sanitize(siReact.svg);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    message: '',
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const hanldeSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("email sent");
        setFormData({
          name: '',
          lastName: '',
          email: '',
          message: '',
        });
        alert('email sent');
      } else {
        console.error("error sending email");
      }
    } catch (error) {
      console.error("error sending email",error);
    }
  }


  return (
    <div className='h-screen bg-cover bg-center flex items-center justify-center' >
      <div className='text-center'>
      <h1 className='text-3xl font-bold text-blue-500 mb-10'>Hello tailwind css</h1>
       <svg dangerouslySetInnerHTML={{ __html: purifiedIcons }} style={{ width: 100, height: 100, fill: `#${siReact.hex}` }}></svg>
    <fieldset style={{border: "1px solid black", padding: 10}}>
      <legend className='text-2xl px-3 pb-2'> Contact me</legend>
      <form  onSubmit={hanldeSubmit}>
<label htmlFor="name">
        <h1>name</h1>
        <input type="text" name='name' value={formData.name} onChange={handleInputChange} />
      </label>
      <label htmlFor="lastName">
        <h1>Last name</h1>
        <input type="text" name='lastName' value={formData.lastName} onChange={handleInputChange} />
      </label>
      <label htmlFor="email">
                <h1>email</h1>
        <input type="email" name='email' value={formData.email} onChange={handleInputChange} />
      </label>
      <label htmlFor="message">
        <h1>message</h1>
        <textarea  name="message" value={formData.message} onChange={handleInputChange} width={300} height={300}/>
      </label>
      <br />
      <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded '>Send</button>
      <button type="reset" className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-4 rounded mx-2'>Reset</button>
      </form>
    </fieldset>
      </div>
    </div> 
  )
}

export default App
