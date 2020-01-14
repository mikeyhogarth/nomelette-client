import axios from "axios";
import config from "@/config";

export function getRecipesForTagging(tagging) {
  return axios
    .get(`${config.api.endpoint}/taggings/${tagging}`)
    .then(r => r.data);
}
