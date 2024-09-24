import { faMicrophone, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

const MainPage = ({ setFile, setAudioStream, duration, setDuration }) => {
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [audioChunks, setAudioChunks] = useState([]);
  const mediaRecorder = useRef(null);

  const mimeType = "audio/webm";

  const startRecording = async () => {
    let tempStream;
    console.log("start recording");

    try {
      const streamData = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });

      tempStream = streamData;

      setRecordingStatus("recording");
      setDuration(0);

      const media = new MediaRecorder(tempStream, { type: mimeType });
      mediaRecorder.current = media;

      mediaRecorder.current.start();
      let localAudioChunks = [];
      mediaRecorder.current.ondataavailable = (event) => {
        if (typeof event.data === "undefined") return;
        if (typeof event.data.size === 0) return;
        localAudioChunks.push(event.data);
      };

      setAudioChunks(localAudioChunks);
    } catch (error) {
      console.log(error.message);
      return;
    }
  };

  const stopRecording = async () => {
    setRecordingStatus("inactive");
    console.log("Stop recording");

    mediaRecorder.current.stop();

    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      setAudioStream(audioBlob);
      setAudioChunks([]);
    };
    console.log(audioChunks);
  };

  useEffect(() => {
    if (recordingStatus === "inactive") return;

    const interval = setInterval(() => {
      setDuration((current) => current + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <main className="flex-1 p-4 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 pb-24">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Trans<span className="text-blue-400 font-bold">Cribo</span>
      </h1>
      <h3 className="font-medium">
        Record <span className="text-blue-400">&rarr;</span> Transcribe{" "}
        <span className="text-blue-400">&rarr;</span> Translate
      </h3>{" "}
      <button
        className="flex items-center text-base justify-between gap-4 mx-auto w-[384px] sm:w-[484px] md:w-[584px] max-w-full my-4 specialbtn px-4 py-3 rounded-xl"
        onClick={
          recordingStatus === "inactive" ? startRecording : stopRecording
        }
      >
        <p className="text-blue-400">
          {recordingStatus === "inactive" ? "Record" : "Stop recording"}
        </p>
        <div className="flex gap-2 items-center">
          {duration !== 0 && duration && <p className="text-sm">{duration}s</p>}
          <FontAwesomeIcon
            icon={faMicrophone}
            width={12}
            color={recordingStatus === "recording" ? "red" : ""}
            className={"duration-200"}
          />{" "}
        </div>
      </button>
      <p className="text-base">
        Or{" "}
        <label className="text-blue-400 cursor-pointer hover:text-blue-600 hover:border-slate-500  duration-200 border border-slate-300 rounded-lg px-3 py-1">
          Upload
          <input
            type="file"
            className="hidden"
            accept=".mp3, .wave"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>{" "}
        a mp3 file
      </p>
      <p className="italic text-slate-500">Free now, Free forever</p>
    </main>
  );
};

export default MainPage;
