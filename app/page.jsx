"use client";

import MainPage from "@/components/MainPage";
import Header from "@/components/Header";
import { useState } from "react";
import FileDisplay from "@/components/FileDisplay";
import Information from "@/components/Information";
import Transcribing from "@/components/Transcribing";

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [duration, setDuration] = useState(null);
  const isAudioAvailable = file || audioStream;
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAudioReset = () => {
    setFile(null);
    setAudioStream(null);
    setDuration(0);
  };
  return (
    <div className="flex flex-col  max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />

        {output ? (
          <Information />
        ) : loading ? (
          <Transcribing />
        ) : isAudioAvailable ? (
          <FileDisplay
            file={file}
            audioStream={audioStream}
            handleAudioReset={handleAudioReset}
            duration={duration}
          />
        ) : (
          <MainPage
            setFile={setFile}
            setAudioStream={setAudioStream}
            duration={duration}
            setDuration={setDuration}
          />
        )}
      </section>
    </div>
  );
};

export default HomePage;
