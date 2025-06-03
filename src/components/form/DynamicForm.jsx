import { useEffect, useRef, useMemo } from "react";
import { storeItem, getItem } from "../../utils/storage";
import { themeColors } from "../../assets/formConfig";

const DynamicForm = ({
  fields,
  storageKey,
  onSubmitData,
  editingIndex,
  setEditingIndex,
  formData,
  setFormData,
  setTheme,
}) => {
  const initialState = useMemo(() => {
    return fields.reduce((acc, field) => {
      // If it's the special merged section, use an array
      if (
        storageKey === "Skills, Languages & Hobbies" &&
        ["skills", "languages", "hobbies"].includes(field.name)
      ) {
        acc[field.name] = [""];
      } else {
        acc[field.name] = "";
      }
      return acc;
    }, {});
  }, [fields, storageKey]);

  const firstInputRef = useRef(null);

  // const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    if (editingIndex?.section === storageKey && editingIndex.data) {
      const filledForm = { ...initialState };

      for (let key in editingIndex.data) {
        if (key in filledForm) {
          filledForm[key] = editingIndex.data[key];
        }
      }

      setFormData(filledForm);
    } else if (
      storageKey === "Skills, Languages & Hobbies" &&
      (!formData?.skills || !formData?.languages || !formData?.hobbies)
    ) {
      setFormData({
        skills: [""],
        languages: [""],
        hobbies: [""],
      });
    } else if (!editingIndex?.section && formData === undefined) {
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
    const existingData = getItem(storageKey);
    const newItem = {
      ...formData,
      id: crypto.randomUUID(),
    };

    if (storageKey === "Skills, Languages & Hobbies") {
      storeItem(storageKey, formData);
      onSubmitData(formData);
    } else {
      const updatedData = editingIndex
        ? existingData.map((item, i) =>
            i === editingIndex.index ? { ...formData, id: item.id } : item,
          )
        : [...existingData, newItem];
      storeItem(storageKey, updatedData);
      onSubmitData(updatedData);
    }

    setFormData(initialState);
    setEditingIndex({
      section: null,
      index: null,
      data: null,
    });
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  };

  if (
    storageKey === "Skills, Languages & Hobbies" &&
    (!formData?.skills || !formData?.languages || !formData?.hobbies)
  ) {
    return null; // Wait until formData is populated correctly
  }

  return (
    <form onSubmit={handleSubmit}>
      {storageKey === "Skills, Languages & Hobbies" ? (
        <>
          {["skills", "languages", "hobbies"].map((category) => (
            <div key={category}>
              <label>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
              {(formData[category] || []).map((val, i) => (
                <input
                  key={`${category}-${i}`}
                  type="text"
                  name={category}
                  value={val}
                  onChange={(e) => {
                    const updated = [...formData[category]];
                    updated[i] = e.target.value;
                    setFormData({ ...formData, [category]: updated });
                  }}
                  onKeyDown={(e) => {
                    const isLast = i === formData[category].length - 1;
                    const underLimit = formData[category].length < 5;
                    if (
                      e.key === "Enter" &&
                      val.trim() &&
                      isLast &&
                      underLimit
                    ) {
                      e.preventDefault();
                      setFormData({
                        ...formData,
                        [category]: [...formData[category], ""],
                      });
                    }
                  }}
                />
              ))}
            </div>
          ))}
        </>
      ) : (
        fields.map(({ name, label, type, accept }, index) => (
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
        ))
      )}
      {themeColors && (
        <div className="theme-selection">
          <h4>Select Theme</h4>
          {themeColors.map((color, i) => (
            <button
              key={`${color}-${i}`}
              type="button"
              className="theme-button"
              title={`${color}`}
              style={{ backgroundColor: color }}
              onClick={() => setTheme(color)}
            />
          ))}
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
