import SpotifyNowPlaying from "./components/SpotifyNowPlaying";

function App() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-set">
      <div className="flex items-center justify-between gap-6 w-fit">
        <div></div>
        <SpotifyNowPlaying />
      </div>
    </div>
  );
}

export default App;
