export default function GradientBorderButton({children}) {
    return (
      <button className="relative mx-6 my-3 p-[2px] text-white rounded-lg ">
        <span className="absolute inset-0 rounded-lg p-[10px] bg-conic-gradient"></span>
        <span className="relative flex h-full w-full items-center justify-center bg-gray-900 rounded-md p-1">
          {children}
        </span>
      </button>
    );
  }
