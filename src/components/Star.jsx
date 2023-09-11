import { FaStar } from 'react-icons/fa6'
const Star = ({ ratings }) => {

  let color;
  if (ratings >= 7) {
    color = "green"
    console.log("green");
  }
  else if (ratings >= 4) {
    color = "yellow"
  }
  else {
    color = "red"
  }
  return (
    <FaStar color={color} />
  )
}

export default Star