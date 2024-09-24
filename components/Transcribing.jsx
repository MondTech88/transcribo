const Transcribing = ({ downloading }) => {
  return (
    <div className="flex text-center px-12  items-center flex-col justify-center gap-10 md:gap-14 py-24">
      <div className="flex flex-col gap-2 sm:gap-4">
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
          <span className="text-blue-400 font-bold">Transcribing...</span>
        </h1>
        <p className="text-slate-400">
          {!downloading ? "Warming up cylinders" : "Core cylinders engaged"}
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:gap-4 max-w-[500px] mx-auto w-full items-center">
        {[0, 1, 2].map((val) => {
          return (
            <div
              key={val}
              className={` rounded-full h-2 sm:h-2 bg-slate-400 loading loading${val}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Transcribing;
