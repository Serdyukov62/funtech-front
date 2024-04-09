
import './Events.css'
import Event from '../Event/Event'

interface EventsProps {
    TEvent: Array<any>,
    text: string,
}

export default function Events({text}: EventsProps) {

  return (
    <section className='container'>
        <h2 className='title'>{text}</h2>
        <div className='gallery-container'>
        <Event/>
        <Event/><Event/><Event/>
        </div>
    </section>
  )
}

