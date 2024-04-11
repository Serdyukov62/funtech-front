import { useNavigate } from '@remix-run/react'
import check from '../../assets/check.svg'

export default function Activation() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <p className="text">Перейдите по ссылке в письме отправленного на вашу почту</p>
      <img src={check} alt="Иконка галочки" />
      <button onClick={() => navigate('/signin')} className="back-btn">Назад</button>
    </div>
  )
}