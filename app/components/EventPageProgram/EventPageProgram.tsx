import photo from "../../assets/photo-host.png";

export default function EventPageProgram() {
  return (
    <div className="eventPage-time-row">
      <h4 className="title-time">16:00</h4>
      <p className="subtitle">Экосистема интранета</p>
      <div className="eventPage-time-profile">
        <div className="eventPage-time-profile-img">
          <img
            className="eventPage-time-photo"
            src={photo}
            alt="Фото спикера"
          />
        </div>
        <div className="eventPage-time-text-container">
          <h5 className="title-profile">Алексей Сидорин</h5>
          <p className="subtitle-company">Яндекс</p>
          <p className="subtitle-profile">
            Руководитель блока «Интранет» HR Tech
          </p>
        </div>
      </div>
    </div>
  );
}
