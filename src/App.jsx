import SpotifyNowPlaying from "./components/SpotifyNowPlaying";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-set">
      <div>
        <p className="font-Instrument-Serif text-5xl text-slate-100">
          What i&#39;m currently listening to:
        </p>
        <div className="flex justify-center mt-10">
          <SpotifyNowPlaying />
        </div>
      </div>
    </div>
  );
}

export default App;
