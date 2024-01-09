const Logo = ({ color = "black" }) => {
  return (
    <div className="flex flex-1 gap-2 items-center">
      <img className="w-10" src="logo.png" alt="" />
      <h2
        className={`font-bold text-lg md:text-3xl text-${color} font-heading`}
      >
        ReWaste
      </h2>
    </div>
  );
};

export default Logo;
