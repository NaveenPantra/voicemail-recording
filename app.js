const recordBtn = document.querySelector("button.record_btn");
const modal = document.querySelector(".modal");
const cancelBtn = document.querySelector("button.cancel");
const backWaveform = document.querySelector("div.back-waveform");
const fwdWaveform = document.querySelector("div.front-waveform");

recordBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

const backWaveformEls = [];
const frontWaveformEls = [];
const WAVEFORM_STICKS_COUNT = 190;

for (let i = 0; i < WAVEFORM_STICKS_COUNT; i++) {
  const bckDiv = document.createElement("div");
  const fwdDiv = document.createElement("div");
  backWaveform.appendChild(bckDiv);
  fwdWaveform.appendChild(fwdDiv);
  backWaveformEls.push(bckDiv);
  frontWaveformEls.push(fwdDiv);
}

for (let i = 0; i < WAVEFORM_STICKS_COUNT; i++) {
  const height = Math.random() * 90 + 7;
  backWaveformEls[i].style.setProperty("height", `${height}%`);
  frontWaveformEls[i].style.setProperty("height", `${height}%`);
}

Scrubber({
  scrubberEle: document.querySelector("div.scrubber"),
  parentEle: document.querySelector("div.waveform"),
  effectorEle: document.querySelector("div.front-waveform"),
  config: { handleClickOnParent: true },
});
