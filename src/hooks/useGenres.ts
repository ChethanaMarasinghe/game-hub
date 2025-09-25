import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    background_image: string;
}

const useGenres = () => ({data:genres, error:null, isLoading:false});

export default useGenres;