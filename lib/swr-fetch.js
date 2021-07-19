import useSWR from "swr";

async function fetcher(url){
    const res = await fetch(url);
    return res.json();
}

export const usePemesan = () => {
    //url
    const url = "http://localhost:3000/api/pemesan";
    //data dan error
    const {data, error} = useSWR(url, fetcher);
    return {data, error}
}

export const useUser = () => {
    //url
    const url = "http://localhost:3000/api/user";
    //data dan error
    const {data, error} = useSWR(url, fetcher);
    return {data, error}
}