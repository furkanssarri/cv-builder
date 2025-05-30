import { LuTrash2, LuSquarePen } from "react-icons/lu";

const DataRow = ({ data, index, section, onEdit, onDelete }) => {
  return (
    <div className="data-row">
      <div className="entry-wrapper">
        {Object.entries(data).map(([key, value], i) =>
          key !== "id" &&
          key !== "startYear" &&
          key !== "endYear" &&
          typeof value === "string" ? (
            <div key={i} className="entry">
              {value}
            </div>
          ) : null,
        )}
      </div>
      {data.startYear && data.endYear && (
        <div className="entry-dates">
          {data.startYear} - {data.endYear}
        </div>
      )}
      <div className="buttons">
        <button onClick={() => onEdit(section, index)} className="edit">
          <LuSquarePen className="icon" />
        </button>
        <button onClick={() => onDelete(section, index)} className="remove">
          <LuTrash2 className="icon" />
        </button>
      </div>
    </div>
  );
};

export default DataRow;
