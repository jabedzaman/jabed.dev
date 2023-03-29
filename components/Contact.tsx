import React, { useState } from "react";


const Contact = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <section className="mt-10 mb-20">
      <h1 className="md:text-3xl text-xl font-bold">Get in touch</h1>
      <h2 className="md:text-sm text-xs font-mono text-gray-500">
        I will get back to you asap 
      </h2>
      <form className="flex flex-col space-y-1 p-0.5">
        <div className="flex md:flex-row flex-col items-center md:space-x-2 space-x-0 mt-2">
          <label
            htmlFor="name"
            className="text-gray-900 dark:text-gray-100 md:font-lg font-semibold font-sm md:w-1/2 w-full"
          >
            Name
          </label>
          <input
            placeholder="John Doe"
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="bg-transparent dark:text-gray-100 placeholder:text-gray-500 text-gray-900 shadow-sm w-full focus:outline-none dark:shadow-gray-900  px-2 py-1"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center md:space-x-2 space-x-0">
          <label
            htmlFor="name"
            className="text-gray-900 dark:text-gray-100 md:font-lg font-semibold font-sm md:w-1/2 w-full"
          >
            Email
          </label>
          <input
            placeholder="johndoe@mail.com"
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="bg-transparent dark:text-gray-100 placeholder:text-gray-500 text-gray-900 shadow-sm w-full focus:outline-none dark:shadow-gray-900  px-2 py-1"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center md:space-x-2 space-x-0">
          <label
            htmlFor="name"
            className="text-gray-900 dark:text-gray-100 md:font-lg font-semibold font-sm md:w-1/2 w-full"
          >
            Message
          </label>
          <textarea
            placeholder="Hey How you doing?"
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            className="bg-transparent dark:text-gray-100 placeholder:text-gray-500 text-gray-900 shadow-sm w-full focus:outline-none dark:shadow-gray-900  px-2 py-1"
          ></textarea>
        </div>
        <div  className="h-10"/>
        {formState.name && formState.email && formState.message && (
          <button
            type="submit"
            className="max-w-xs mx-auto my-6 px-5 py-2 bg-indigo-400 dark:bg-indigo-600  rounded-sm"
          >
            Submit
          </button>
        )}
      </form>
    </section>
  );
};

export default Contact;
