const input = ({id, type = 'text', label, name, value, required, onChange}) => {
  return (
    <div>
        <label className="text-gray-700 font-semibold" htmlFor={id}>
            {label}
          <input
            type={type}
            id={id}
            name={name}
            className="w-full mt-1 p-1.5 outline-none rounded-md bg-slate-100 focus:ring-2 ring-blue-300"
            value={value}
            onChange={onChange}
            required={required}
          />
        </label>
    </div>
  );
};

export default input;
