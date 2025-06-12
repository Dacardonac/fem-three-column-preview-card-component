const Button = ({ background }) => {
  return (
    <button
      style={{
        '--accent-color': background,
        '--bg-color': 'hsl(0, 0%, 95%)',
      }}
      className="
        w-[146px] h-[48px]
        pt-[11px] pr-[31.5px] pb-[12px] pl-[31.5px]
        text-[15px] leading-[25px]
        bg-[color:var(--bg-color,white)]
        text-[color:var(--accent-color)]
        border border-transparent
        hover:bg-transparent
        hover:text-white
        hover:border-white
        transition-colors duration-300
        rounded-[25px]
        cursor-pointer
      "
    >
      Learn More
    </button>
  );
};

export default Button;
