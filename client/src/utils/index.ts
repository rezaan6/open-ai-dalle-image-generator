import FileSaver from "file-saver";

import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt: string) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt == prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id: string, photo: any) {

  fetch(photo)
  .then(res => res.blob())
  .then(data => {
    const blob = new Blob([data], { type: "image/png" });
    FileSaver.saveAs(blob, `download-${_id}.jpg`);
  });

  // fetch(photo, {
  //   method: "GET",
  //   responseType: "blob",
  // })
  //   .then((res) => res.blob())
  //   .then((data) => {
  //     const blob = new Blob([data], { type: "image/png" });
    
  //   });

}
