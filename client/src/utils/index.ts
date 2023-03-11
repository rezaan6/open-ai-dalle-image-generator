// import FileSaver from "file-saver";
import fileDownload from "js-file-download";
import axios from "axios";

import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt: string) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt == prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id: string, photo: any) {
  axios
    .get(photo, {
      responseType: "blob"
    })
    .then((res) => {
      fileDownload(res.data, `download-${_id}.jpg`);
    });

  // FileSaver.saveAs(photo, `download-${_id}.jpg`);
}


