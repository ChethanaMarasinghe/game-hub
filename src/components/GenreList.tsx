
import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";


const GenreList = () => {
    const {data} = useGenres();
    return(
        <ul>
            {data?.map((genre: Genre) => (
                <li key={genre.id}>{genre.name}</li>))}
        </ul>
    )
}
export default GenreList;