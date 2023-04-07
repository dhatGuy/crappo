function Button({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: any;
}) {
  return (
    <button
      type="button"
      className={`bg-[#3671E9] hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
