import { useEffect, useRef, useMemo } from "react";
import { storeItem } from "../../utils/storage";

const DynamicForm = ({
  fields,
  storageKey,
  onSubmitData,
  editingIndex,
  setEditingIndex,
  formData,
  setFormData,
}) => {
  const initialState = useMemo(() => {
    return fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
  }, [fields]);

  const firstInputRef = useRef(null);

  // const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    if (editingIndex?.section === storageKey) {
      setFormData(editingIndex.data);
    } else if (!editingIndex?.section) {
      setFormData(initialState);
    }
  }, [editingIndex, initialState, storageKey]);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const reader = new FileReader();
      reader.onloadend = () => {
        // setFormData((prev) => ({ ...prev, [name]: reader.result }));
        setFormData({ ...formData, [name]: reader.result });
      };
      if (files && files[0]) {
        reader.readAsDataURL(files[0]); // encodes image to base64 string
      }
    } else {
      // setFormData((prev) => ({ ...prev, [name]: value }));
      setFormData({ ...formData, [name]: value });
    }
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
    setFormData((prev) => ({
      ...prev,
      [fields.title]: fields.title === "personalInfo" ? {} : [],
    }));
    setEditingIndex({
      section: null,
      index: null,
      data: null,
    });
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ name, label, type, accept }, index) => (
        <div key={name}>
          <label htmlFor={name}>{label}</label>
          {type !== "textarea" && type !== "file" && (
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name] || ""}
              onChange={handleChange}
              ref={index === 0 ? firstInputRef : null}
            />
          )}

          {type === "textarea" && (
            <textarea
              rows="5"
              cols="33"
              id={name}
              name={name}
              value={formData[name] || ""}
              onChange={handleChange}
            />
          )}

          {type === "file" && (
            <input
              type={type}
              id={name}
              name={name}
              accept={accept}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
