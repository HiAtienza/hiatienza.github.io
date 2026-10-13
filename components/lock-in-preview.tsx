"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { Locale } from "@/lib/site-data";

interface SampleDay {
  day: string;
  date: string;
  events: readonly (readonly [time: string, title: string, place: string])[];
}

const sampleWeek: Record<Locale, readonly SampleDay[]> = {
  en: [
    {
      day: "Mon",
      date: "10",
      events: [
        ["09:00", "Algorithms", "Room A201"],
        ["14:00", "Study group", "Library"]
      ]
    },
    {
      day: "Tue",
      date: "11",
      events: [
        ["10:00", "HCI seminar", "Room B104"],
        ["15:30", "Project time", "Campus"]
      ]
    },
    {
      day: "Wed",
      date: "12",
      events: [
        ["10:00", "Software design", "Room A302"],
        ["13:00", "Lunch break", "One hour to reset"],
        ["15:00", "Doctor’s appointment", "Personal calendar"]
      ]
    },
    {
      day: "Thu",
      date: "13",
      events: [
        ["09:00", "Databases", "Room B206"],
        ["14:00", "Lab session", "Computer lab"]
      ]
    },
    {
      day: "Fri",
      date: "14",
      events: [
        ["10:00", "Team review", "Room A108"],
        ["16:00", "Gym", "Personal calendar"]
      ]
    }
  ],
  es: [
    {
      day: "Lun",
      date: "10",
      events: [
        ["09:00", "Algoritmos", "Aula A201"],
        ["14:00", "Grupo de estudio", "Biblioteca"]
      ]
    },
    {
      day: "Mar",
      date: "11",
      events: [
        ["10:00", "Seminario HCI", "Aula B104"],
        ["15:30", "Tiempo de proyecto", "Campus"]
      ]
    },
    {
      day: "Mié",
      date: "12",
      events: [
        ["10:00", "Diseño de software", "Aula A302"],
        ["13:00", "Pausa para comer", "Una hora para desconectar"],
        ["15:00", "Cita médica", "Calendario personal"]
      ]
    },
    {
      day: "Jue",
      date: "13",
      events: [
        ["09:00", "Bases de datos", "Aula B206"],
        ["14:00", "Prácticas", "Laboratorio"]
      ]
    },
    {
      day: "Vie",
      date: "14",
      events: [
        ["10:00", "Revisión de equipo", "Aula A108"],
        ["16:00", "Gimnasio", "Calendario personal"]
      ]
    }
  ]
};

export function LockInPreview({ locale }: { locale: Locale }) {
  const id = useId();
  const dayButtons = useRef<(HTMLButtonElement | null)[]>([]);
  const [selectedDay, setSelectedDay] = useState(2);
  const [light, setLight] = useState(false);
  const week = sampleWeek[locale];
  const selected = week[selectedDay];
  const en = locale === "en";

  const fullDays = en
    ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    : ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const selectWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % week.length
        : event.key === "ArrowLeft"
          ? (index - 1 + week.length) % week.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? week.length - 1
              : null;
    if (next === null) return;
    event.preventDefault();
    setSelectedDay(next);
    dayButtons.current[next]?.focus();
  };

  return (
    <figure className={`lock-preview ${light ? "lock-preview-light" : ""}`}>
      <div className="lock-device">
        <div className="lock-system" aria-hidden="true">
          <span>⌁</span>
          <span>● ● ▰</span>
        </div>
        <div className="lock-clock" aria-hidden="true">
          <span>
            {en
              ? `${fullDays[selectedDay]}, August ${selected.date}`
              : `${fullDays[selectedDay]}, ${selected.date} de agosto`}
          </span>
          <strong>09:41</strong>
        </div>
        <div
          className="lock-week"
          role="group"
          aria-label={en ? "Choose an example day" : "Elige un día de ejemplo"}
        >
          {week.map((day, index) => (
            <button
              type="button"
              ref={(button) => {
                dayButtons.current[index] = button;
              }}
              onKeyDown={(event) => selectWithKeyboard(event, index)}
              aria-controls={`${id}-agenda`}
              key={day.day}
              aria-pressed={selectedDay === index}
              onClick={() => setSelectedDay(index)}
              aria-label={`${day.day} ${day.date}`}
            >
              <span>{day.day}</span>
              <strong>{day.date}</strong>
              <span className="lock-week-events" aria-hidden="true">
                {day.events.map(([time, title]) => (
                  <i key={title}>
                    <small>{time}</small>
                    <b>{title}</b>
                  </i>
                ))}
              </span>
            </button>
          ))}
        </div>
        <div id={`${id}-agenda`} className="lock-agenda" aria-live="polite" aria-atomic="true">
          <p className="lock-agenda-label">
            {en ? "Example agenda" : "Agenda de ejemplo"} · {selected.day} {selected.date}
          </p>
          <ul key={selectedDay}>
            {selected.events.map(([time, title, place]) => (
              <li key={title}>
                <time dateTime={time}>{time}</time>
                <div>
                  <strong>{title}</strong>
                  <span>{place}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lock-bottom" aria-hidden="true">
          <span>⌑</span>
          <span>◉</span>
        </div>
      </div>
      <div className="lock-preview-controls">
        <span>{en ? "Try a day above" : "Prueba un día arriba"} ↑</span>
        <button type="button" onClick={() => setLight(!light)} aria-pressed={light}>
          {en ? "Light theme" : "Tema claro"}
        </button>
      </div>
      <figcaption>
        {en
          ? "Interactive web illustration · sample events. Select a day to explore the agenda; use arrow keys, Home or End from the day picker."
          : "Ilustración web interactiva · eventos ficticios. Elige un día para explorar la agenda; usa las flechas, Inicio o Fin desde el selector."}
      </figcaption>
    </figure>
  );
}
