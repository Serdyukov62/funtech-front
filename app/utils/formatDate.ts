export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const weekday = new Intl.DateTimeFormat("ru-RU", {
      weekday: "long",
    }).format(date);

    const time = date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const monthNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    const monthIndex = date.getMonth();
    const month = monthNames[monthIndex];

    return `${date.getDate()} ${month} ${time} ${weekday.toLowerCase()}`;
  }