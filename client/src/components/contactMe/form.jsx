import { useState } from "react";


const Form = () => {


    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        message: "",
    });

    const backendUrl = import.meta.env.VITE_PAGE_URL || 'http://localhost:3001';


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const hanldeSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("email sent");
                setFormData({
                    name: "",
                    lastName: "",
                    email: "",
                    message: "",
                });
                alert('email sent');
            } else {
                console.error("error sending email", await response.text());
            }
        } catch (error) {
            console.error("error sending email", error);
        }
    }
 

    return (
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center "
        style={{ backgroundColor: "red" }}
      >
        <div className="text-center mt-20">
          <h1 className="text-3xl font-bold text-blue-500 mb-10">
            Hello tailwind css
          </h1>

          <fieldset style={{ border: "1px solid black", padding: 10 }}>
            <legend className="text-2xl px-3 pb-2"> Contact me</legend>
            <form onSubmit={hanldeSubmit}>
              <label >
                <h1>name</h1>
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label >
                <h1>Last name</h1>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </label>
              <label >
                <h1>email</h1>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <h1>message</h1>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  width={300}
                  height={300}
                />
              </label>
              <br />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded "
              aria-label="Submit"
              >
                Send
              </button>
              <button
                type="reset"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-4 rounded mx-2"
              aria-label="Reset"
              >
                Reset
              </button>
            </form>
          </fieldset>
        </div>
      </div>
    );
}

export default Form;