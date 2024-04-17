import { useNavigate } from '@remix-run/react'
import icon from '../../assets/check.svg'


export default function Index() {
  const navigate = useNavigate()
  return(
    <div className='succes'>
      <div className='succes-container'>
        <h2 className='title'>Вы зарегистрированы!</h2>
        <img className='icon' src={icon} alt="" />
        <button onClick={() => navigate('/')} className='btn'>На сайт</button>
      </div>
    </div>
  ) 
}

