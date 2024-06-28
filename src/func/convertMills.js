function convertMilliseconds(ms) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  // Formatta il risultato come "min:sec" con i secondi formattati a due cifre
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export default convertMilliseconds;
