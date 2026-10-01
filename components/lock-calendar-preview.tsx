"use client";

import { useState } from "react";
import type { Locale } from "@/lib/site-data";

const sampleWeek = {
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

export function LockCalendarPreview({ locale }: { locale: Locale }) {
  const [selectedDay, setSelectedDay] = useState(2);
  const [light, setLight] = useState(false);
  const week = sampleWeek[locale];
  const selected = week[selectedDay];
  const en = locale === "en";

  return (
    <figure className={`lock-preview ${light ? "lock-preview-light" : ""}`}>
      <div className="lock-device">
        <div className="lock-system" aria-hidden="true">
          <span>⌁</span>
          <span>● ● ▰</span>
        </div>
        <div className="lock-clock" aria-hidden="true">
          <span>{en ? "Wednesday, August 12" : "Miércoles, 12 de agosto"}</span>
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
        <div className="lock-agenda" aria-live="polite" aria-atomic="true">
          <p className="lock-agenda-label">
            {en ? "Example agenda" : "Agenda de ejemplo"} · {selected.day} {selected.date}
          </p>
          <ul>
            {selected.events.map(([time, title, place]) => (
              <li key={title}>
                <time>{time}</time>
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
          ? "Interactive illustration · sample events, not a device capture. The website day selector explains the concept; it is not a lock-screen control."
          : "Ilustración interactiva · eventos ficticios, no una captura del dispositivo. El selector de días de la web explica el concepto; no es un control de la pantalla de bloqueo."}
      </figcaption>
    </figure>
  );
}
