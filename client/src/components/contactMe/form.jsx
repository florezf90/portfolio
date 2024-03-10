import { useState } from "react";
import "./index.css";
import MapComponent from "../googleMap/Map";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const backendUrl = import.meta.env.VITE_PAGE_URL || "http://localhost:3001";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const hanldeSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        alert("email sent");
      } else {
        console.error("error sending email", await response.text());
      }
    } catch (error) {
      console.error("error sending email", error);
    }
  };

  return (
    <div
      className="h-full flex flex-col bg-cover bg-center   items-center justify-center "
      style={{ backgroundColor: "red" }}
    >
      <header id="contact">
        <h1 className="text-3xl font-bold text-white mb-10">Get In Touch</h1>
      </header>
      <div className="flex flex-wrap  h-3/4 w-10/12 my-20  items-center">
        <section className="lg:w-6/12 w-full  bg-slate-500 flex-row lg:flex-col text-white text-center" style={{ height: "600px"}}>
          <h1 className="text-3xl font-bold my-4">Developed by Felipe Florez</h1>
          <figure className="w-10/12 h-3/4 flex items-center bg-slate-100 mx-auto" >
           < MapComponent />
          </figure>
          </section>
        <div className="lg:w-6/12 w-full flex flex-col items-center bg-white">
          <fieldset
            className="flex flex-col items-center p-4 w-10/12 my-10"
            style={{ border: "1px solid black" }}
          >
            <legend className="text-2xl text-center px-3 pb-2">
              Contact me
            </legend>
            <form onSubmit={hanldeSubmit} className="w-full">
              <div className="flex flex-col lg:flex-row space-x-2 items-center mb-4">
                <label className="w-full mb-2">
                  <h1 className="text-center">Name</h1>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input w-full"
                  />
                </label>
                <label className="w-full mb-2">
                  <h1 className="text-center">Last name</h1>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input w-full"
                  />
                </label>
              </div>
              <label className="w-full mb-2">
                <h1 className="text-center">Email</h1>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input w-full"
                />
              </label>
              <label className="w-full mb-2">
                <h1 className="text-center">Message</h1>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea w-full"
                />
              </label>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded w-1/2"
                  aria-label="Submit"
                >
                  Send
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Form;
