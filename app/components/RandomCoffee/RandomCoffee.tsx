import img from '../../assets/Illustration_Coffee-Break.png'

export default function RandomCoffee() {
  return (
    <div className='random-coffee'>
        <img src={img} alt="Человек на лавочке" />

        <div className='random-coffee-container'>
            <h2 className='title'>Random coffee</h2>
            <p className='subtitle'>
            Подберём собеседника с похожими интересами и целями для профессиональных и дружеских знакомств.  
            </p>
            <button className='button' type='button'>
            <p className='button-text'>Принять участие</p>
            </button>
        </div>
    </div>
  )
}