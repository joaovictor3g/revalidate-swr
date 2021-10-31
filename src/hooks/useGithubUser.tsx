import useSWR from "swr";
import { api as fetcher } from "../services/api";

export function useGithubUser() {
  const { data, error } = useSWR(`/repos?page=2`, fetcher, { revalidateOnFocus: true });
  const repos = data?.data;

  return {
    repos,
    isLoading: !data && !error,
    isError: error
  }
}