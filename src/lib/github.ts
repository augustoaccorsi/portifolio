import axios from "axios";
import { GitHubRepo } from "@/types";

const github = axios.create({
  baseURL: "https://api.github.com/users/augustoaccorsi",
});

export async function fetchRepos(): Promise<GitHubRepo[]> {
  const { data } = await github.get<GitHubRepo[]>(
    "/repos?sort=updated&direction=desc&per_page=100"
  );
  return data.filter((r) => !r.fork);
}
