import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FileDisplay = ({ file, audioStream, handleAudioReset, duration }) => {
  return (
    <main className="flex-1 p-4 flex flex-col  justify-center gap-3 sm:gap-4 md:gap-5 pb-24 max-w-full   text-center mx-auto ">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Your{" "}
        <span className="text-blue-400 font-bold">
          {file ? "File" : "Audio"}
        </span>
      </h1>
      <div className="mx-auto flex flex-col text-left my-4">
        <h3 className="font-semibold">Name</h3>
        <div className="flex items-center gap-12">
          <p>{file ? file.name : "Recorded Audio"}</p>
          {duration !== 0 && duration && (
            <p className="text-slate-400">{duration}s</p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between gap-48">
        <button
          onClick={handleAudioReset}
          className="text-slate-400 hover:text-blue-600 duration-200 border border-slate-200 hover:border-slate-300 rounded-lg px-6 py-2"
        >
          Reset
        </button>
        <button className="specialbtn px-4 py-2 rounded-lg text-blue-400 flex items-center gap-2">
          <p>Transcribe</p>
          <FontAwesomeIcon icon={faPenNib} />
        </button>
      </div>
    </main>
  );
};

export default FileDisplay;
