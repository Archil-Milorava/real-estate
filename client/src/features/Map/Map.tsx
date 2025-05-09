import map from "../../assets/map.webp"

const Map = () => {
  return (
    <div className="sticky top-10 h-[40rem] hidden md:block w-full rounded-sm overflow-hidden">
      <img src={map} className="object-cover w-full h-full" />
    </div>

  )
}

export default Map