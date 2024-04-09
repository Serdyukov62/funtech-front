import meeting from '../../assets/Illustration_Community.png'
import './Afisha.scss'


export default function Afisha() {
  return (
    <div className="main-container">
          <h1 className="title">
          События для IT-специалистов всех уровней и направлений
          </h1>
          <img src={meeting} alt="Встреча людей" className="image"/>
    </div>
  )
}