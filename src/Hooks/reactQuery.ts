import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";

interface IQuery {
  queryKey: string[];
  url: string;
  config?: AxiosRequestConfig;
}

function useGetHook({ queryKey, url, config }: IQuery) {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const res= await axios.get(url, config);
      return res.data;
    },
  });
}

export default useGetHook;