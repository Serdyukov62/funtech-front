import { Speaker } from "contracts/types/event";

type Props = {
    speaker: Speaker
};

export default function EventPageProgramProfile({speaker}: Props) {
  return (
    <div className="eventPage-time-profile">
      <div className="eventPage-time-profile-img">
        <img className="eventPage-time-photo" src={speaker.photo} alt="Фото спикера" />
      </div>
      <div className="eventPage-time-text-container">
        <h5 className="title-profile">{speaker.first_name}</h5>
        <p className="subtitle-company">{speaker.company}</p>
        <p className="subtitle-profile">
          {speaker.position}
        </p>
      </div>
    </div>
  );
}
