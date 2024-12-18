const Button = ({
  bgColor = "bg-blue-500",
  txtColor = "text-white",
  radius = "rounded-md",
  type = "button",
  label = "Botão",
  padding = "px-2 py-2",
  onClick
}) => {
  return (
    <div className="flex">
      <button
        className={` w-full hover:opacity-90 ${padding} ${bgColor} ${radius} ${txtColor}`}
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
