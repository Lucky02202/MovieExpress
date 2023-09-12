
const Paginate = ({ pages, setCurrentPage }) => {

  let newPages = Array(pages).fill(null)
  const handelPage = (id) => {
    setCurrentPage(id)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <section className="mt-10 ">
      <div className="flex justify-between box-border flex-wrap">
        {
          newPages.map((value, index) => {
            return (
              <div key={index} className={` flex-1 text-center text-sm font-montserrat`}
                onClick={() => { handelPage(index) }}
              >
                {
                  index + 1
                }
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Paginate