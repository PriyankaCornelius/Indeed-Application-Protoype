import { semiEndpoint } from "../utils/ApiEndpoint";
import axios from "axios";

export function getSavedJobsByJobseekerId(userId) {
  return axios.get(semiEndpoint + "/savedJobs/get/" + userId);
}

export function getAppliedJobsByJobseekerId(userId) {
  return axios.get(semiEndpoint + "/appliedJobs/get/" + userId);
}
