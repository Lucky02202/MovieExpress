import { MdBookmarkAdd, MdOutlineInfo } from 'react-icons/md'
import Star from "./Star"
const MovieCard = ({ movie }) => {
  return (
    <div key={movie._id} className="flex sm:flex-col justify-between bg-[#1A1A1A] ">
      <div className="absolute p-1 sm:p-2 bg-[rgba(0,0,0,0.75)] rounded-br-lg cursor-pointer hover:bg-[rgba(0,0,0,1)]">
        <MdBookmarkAdd size={30} />
      </div>
      <div className="sm:flex-1">
        <img src={movie.coverImage} alt={movie.name} className=" h-[150px] sm:h-full lg:h-[320px]" />
      </div>
      <div className="flex-1 flex flex-col p-4 gap-2 h-full w-full text-sm sm:text-base">
        <p className="flex flex-1 sm:mt-2 justify-between items-center w-fit gap-2">
          <Star
            ratings={movie.ratings}
          /> {movie.ratings}
        </p>
        <p className="flex-1 sm:mt-2 min-h-4 max-h-6 overflow-hidden font-semibold font-palanquin">{movie.name}</p>
        <div className="flex justify-center gap-1 items-center px-4 py-2 sm:mt-2 rounded-lg text-center justify-self-end bg-slate-800 hover:bg-slate-700 duration-200 cursor-pointer">Learn More <MdOutlineInfo size={20} /> </div>
      </div>
    </div>
  )
}

export default MovieCard