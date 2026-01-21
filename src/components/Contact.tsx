"use client";
import React, { useState } from "react";

const defaultFormState = {
  firstname: {
    value: "",
    error: "",
  },
  lastname: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  phone: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Write your submit logic here
    console.log(formData);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Firstname"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.firstname.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              firstname: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="text"
          placeholder="Lastname"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.lastname.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              lastname: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-5 mt-4">
        <input
          type="email"
          placeholder="Email Address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="number"
          placeholder="Phone No."
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.phone.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              phone: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>

      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
      >
        Submit{" "}
      </button>
    </form>
  );
};
