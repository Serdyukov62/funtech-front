import map from '../../assets/Map.png';


export default function EventPagePlace() {
  return (
    <div className="eventPage-place">
        <h3 className="title">Место</h3>
        <p className="address">Москва, улица Льва Толстого, 16</p>
        <div className="map">
          <img className='map-img' src={map} alt="" />
        </div>
      </div>
  )
}