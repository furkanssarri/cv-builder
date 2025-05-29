import React, { useState, useEffect, useMemo } from "react";
import { storeItem } from "../../utils/storage";

const DynamicForm = ({
  fields,
  storageKey,
  onSubmitData,
  editingIndex,
  setEditingIndex,
}) => {
  const initialState = useMemo(() => {
    return fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
  }, [fields]);

  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    if (editingIndex) {
      setFormData(editingIndex.data);
    } else {
      setFormData(initialState);
    }
  }, [editingIndex, initialState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(sessionStorage.getItem(storageKey)) || [];
    const newItem = {
      ...formData,
      id: crypto.randomUUID(),
    };

    const updatedData = editingIndex
      ? existingData.map((item, i) =>
          i === editingIndex.index ? { ...formData, id: item.id } : item,
        )
      : [...existingData, newItem];
    storeItem(storageKey, updatedData);
    onSubmitData(updatedData);
    setFormData(initialState);
    setEditingIndex({
      section: null,
      index: null,
      data: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ name, label, type }) => (
        <div key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name] || ""}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
