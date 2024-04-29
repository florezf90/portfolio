import { useState } from "react";
import "./index.css";
import MapComponent from "../googleMap/Map";
import { motion } from "framer-motion";
import { buttonVariants, mapbackgroundVariants } from "../../utils/animations";
import Modal from "../modal/modal";
import { useTranslation } from "react-i18next";
const Form = () => {
  const [isModalopen, setisModalopen] = useState(false);
  const {t} = useTranslation();
  const translationKeys = t("modal", { returnObjects: true });

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const backendUrl = import.meta.env.VITE_PAGE_URL || "http://localhost:3001";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formisValid = true;
    const newErrors = {};
    if (!formData.name) {
           formisValid = false;
      newErrors.name = "Name is required";
    }
    if (!formData.lastName) {
      formisValid = false;
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.email) {
      formisValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formisValid = false;
      newErrors.email = "Invalid email address";
    }
    if (!formData.message) {
      formisValid = false;
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return formisValid;
  };

  const hanldeSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
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
    setisModalopen(true);
      } else {
        console.error("error sending email", await response.text());
      }
    } catch (error) {
      console.error("error sending email", error);
    }
  };

  return (
    <main className="h-full flex flex-col bg-cover bg-center main  items-center justify-center py-20 ">
      <header id="contact" className="mt-14 mb-4">
        <h1 className="text-3xl font-bold text-white mb-10">
          {t("getInTouch")}
        </h1>
      </header>
      <section className="flex flex-wrap  h-3/4 w-10/12 my-20  items-center sectionContainer">
        <section
          className="lg:w-6/12 w-full  flex-row lg:flex-col text-white mapContainer text-center"
          style={{ height: "600px" }}
        >
          <h1 className="text-3xl font-bold my-4">{t("location")}</h1>
          <motion.figure
            className="w-10/12 h-3/4 flex items-center bg-slate-100 mx-auto border-2 border-transparent"
            variants={mapbackgroundVariants}
            animate="animate"
          >
            <MapComponent />
          </motion.figure>
        </section>
        <div className="lg:w-6/12 w-full flex flex-col items-center ">
          <fieldset className="flex flex-col items-center p-4 w-10/12 my-10 text-white ">
            <legend className="text-2xl text-center px-9 pb-4 ">
              {t("reachOut")}
            </legend>
            <form onSubmit={hanldeSubmit} className="w-full px-6">
              <div className="flex flex-col lg:flex-row space-x-2 items-center mb-4 ">
                <label className="w-full mb-2">
                  <h1 className="text-center py-3">{t("name")}</h1>
                  <motion.input
                    whileTap={{ scale: 0.9 }}
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input w-full"
                  />
                  {errors.name && <p>{errors.name}</p>}
                </label>
                <label className="w-full mb-2">
                  <h1 className="text-center py-3">{t("lastName")}</h1>
                  <motion.input
                    whileTap={{ scale: 0.9 }}
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input w-full "
                  />
                  {errors.lastName && <p>{errors.lastName}</p>}
                </label>
              </div>
              <label className="w-full mb-2">
                <h1 className="text-center py-4">{t("email")}</h1>
                <motion.input
                  whileTap={{ scale: 0.9 }}
                  type="email"
                  name="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input w-full"
                />
                {errors.email && <p>{errors.email}</p>}
              </label>
              <label className="w-full mb-2">
                <h1 className="text-center py-4">{t("message")}</h1>
                <motion.textarea
                  whileTap={{ scale: 0.9 }}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea w-full"
                />
                {errors.message && <p>{errors.message}</p>}
              </label>
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  whileHover={"hover"}
                  whileTap={"tap"}
                  variants={buttonVariants}
                  className=" py-2 my-4  text-xl text-center w-1/3 rounded border-2 border-transparent hover:border-gray-100"
                  aria-label="Submit"
                >
                  {t("send")}
                </motion.button>
              </div>
            </form>
          </fieldset>
        </div>
      </section>
      <Modal isOpen={isModalopen} onClose={() => setisModalopen(false)}>
        <p className="text-xl text-center">
         {translationKeys[2]}
        </p>
      </Modal>
    </main>
  );
};

export default Form;
