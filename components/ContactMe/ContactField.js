import React from "react";

const ContactField = ({
  fieldName,
  id,
  type,
  handleInputChange,
  formData,
  placeholder
}) => {
  return (
    <div className='flex shrink-0 flex-col'>
      <label htmlFor={id} className='text-base text-gray-400'>
        {fieldName}
      </label>
      {type !== "textarea" ? (
        <input
          type={type}
          id={id}
          name={id}
          value={formData[id]}
          onChange={handleInputChange}
          placeholder={placeholder}
          className='mt-1 border-b-2 border-b-gray-800 bg-gray-800 p-1 px-2 text-white outline-none placeholder:text-sm placeholder:text-gray-600 focus-visible:border-b-gray-500'
        />
      ) : (
        <textarea
          id={id}
          name={id}
          rows={4}
          value={formData[id]}
          onChange={handleInputChange}
          className='mt-1 resize-none border-b-2 border-b-gray-800 bg-gray-800 p-1 px-2 text-white outline-none focus-visible:border-b-gray-500'
        ></textarea>
      )}
    </div>
  );
};

export default ContactField;
