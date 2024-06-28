import spotify from "../assets/spotifyLogo.svg";
import { useEffect, useState } from "react";
import getNowPlayingItem from "../SpotifyAPI";
import convertMilliseconds from "../func/convertMills";
import verifyTitleLenght from "../func/verifyTitle";

const SpotifyNowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      setResult(results[0]);
      setLoading(false);
    });
  });

  return (
    <>
      <div
        className={`${
          result.isPlaying ? "w-[274px]" : "w-fit"
        } h-fit flex flex-col items-center gap-[19px] border shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-[17px] py-[17px] rounded-[34px] border-solid border-[rgba(226,226,226,0.15)]`}
      >
        {loading ? (
          <div className="flex p-2 w-fit items-center justify-center text-gray text-base">
            <img className="p-1" draggable={false} src={spotify} alt="" />
            <p className="tracking-wider px-1 text-base text-left text-white ">
              Loading...
            </p>
          </div>
        ) : (
          <>
            {result.isPlaying ? (
              <div className="flex flex-col ">
                <div className="w-60 h-60">
                  <img
                    className="rounded-[17px]"
                    src={result.albumImageUrl}
                    draggable={false}
                    alt=""
                  />
                </div>
                <div className="mt-3 grid place-items-start">
                  <div className="h-fit text-start text-white">
                    <p className="font-bold text-[23px] hover:underline">
                      <a href={result.songUrl} target="_blank">
                        {verifyTitleLenght(result.title)}
                      </a>
                    </p>
                    <p className="text-lg">{result.artist}</p>
                  </div>
                </div>
                <div className="flex items-center my-2 text-[13px] text-white">
                  <p>{convertMilliseconds(result.progress)}</p>
                  <div className="w-full bg-player-out mx-1 opacity-90 rounded-full h-[5px]">
                    <div
                      className=" h-full rounded-l-full bg-player-in"
                      style={{ width: `${result.progressPercent}%` }}
                    ></div>
                  </div>
                  <p>{convertMilliseconds(result.duration)}</p>
                </div>
              </div>
            ) : (
              <div className="flex w-fit items-center justify-center text-gray text-base">
                <img className="p-1" draggable={false} src={spotify} alt="" />
                <p className="tracking-wider px-1 text-base text-left text-white ">
                  user offline
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

SpotifyNowPlaying.propTypes;

export default SpotifyNowPlaying;
