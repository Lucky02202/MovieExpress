import { useState } from "react"
import { useEffect } from "react"
import axiosInstance from "../helpers/axiosInstance"
import Paginate from "./Paginate"
import MovieCard from "./MovieCard"

const Header = () => {

  let [movies, setMovies] = useState([])
  let [pages, setPages] = useState(null)
  let [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    try {
      let fetchdata = async () => {
        let { data } = await axiosInstance.get(`http://localhost:5000/app/v1/movies?page=${currentPage + 1}&sort=name`)
        setMovies(data.data.movies)
        const pageCount = Math.ceil(data.totalCount / 10)
        setPages(pageCount)
      }
      fetchdata()
    } catch (error) {
      console.log(error.code);
    }
  }, [currentPage])

  return (
    <section className="mt-10 box-border">
      <div className="grid grid-cols-1 mt-6 sm:mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          movies.map((movie) => {
            return (
              <MovieCard key={movie._id} movie={movie} />
            )
          })
        }
      </div>

      <Paginate pages={pages} setPages={setPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  )
}

export default Header