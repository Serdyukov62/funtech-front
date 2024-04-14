export interface IEvent {
    id: number
    subevents: Subevent[]
    participant_count: number
    my_participation: string
    title: string
    event_status: string
    registration_status: string
    organizer_name: string
    organizer_contacts: string
    description: string
    datetime: string
    format: string
    participant_limit: number
    location_address: string
    location_coordinates: string
    image: string
    published_date: string
    host_photo: string
    host_full_name: string
    host_contacts: string
    host_company: string
    host_position: string
    event_link: string
    photos: string[]
  }
  
  export interface Subevent {
    id: number
    event: string
    speaker: Speaker
    title: string
    time: string
  }
  
  export interface Speaker {
    id: number
    full_name: string
    first_name: string
    last_name: string
    company: string
    contacts: string
    position: string
    photo: string
  }