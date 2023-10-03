import useSwr from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useSpotify(){
   const { data } = useSwr('https://api.jabed.dev/api/v1/spotify', fetcher)
  return {
    data
  }
}
