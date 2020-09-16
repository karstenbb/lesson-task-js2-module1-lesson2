import { url } from "/js/constants/constant.js";
import { displayMessage } from "/js/components/displayMessage.js";
import { createHtml } from "/js/components/displayHtml.js";

export async function callApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    createHtml(json.data);
  } catch (error) {
    console.log(error);
    resultContainer.innerHTML = displayMessage("error", error);
  }
}

callApi();
