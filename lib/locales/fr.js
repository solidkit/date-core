/**
 * French locale configuration
 * Configuration for French date and time formatting
 */

export const fr = {
  // Month names (long)
  months: [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  ],

  // Month names (short)
  monthsShort: [
    'janv.',
    'févr.',
    'mars',
    'avr.',
    'mai',
    'juin',
    'juil.',
    'août',
    'sept.',
    'oct.',
    'nov.',
    'déc.',
  ],

  // Weekday names (long)
  weekdays: [
    'dimanche',
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
  ],

  // Weekday names (short)
  weekdaysShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],

  // Weekday names (minimal)
  weekdaysMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],

  // Relative time translations
  relativeTime: {
    future: 'dans %s',
    past: 'il y a %s',
    s: 'quelques secondes',
    ss: '%d secondes',
    m: 'une minute',
    mm: '%d minutes',
    h: 'une heure',
    hh: '%d heures',
    d: 'un jour',
    dd: '%d jours',
    w: 'une semaine',
    ww: '%d semaines',
    M: 'un mois',
    MM: '%d mois',
    y: 'un an',
    yy: '%d ans',
    ago: '',
    justNow: "à l'instant",
    today: "aujourd'hui",
    yesterday: 'hier',
    tomorrow: 'demain',
  },

  // Calendar formatting
  calendar: {
    sameDay: "aujourd'hui à LT",
    nextDay: 'demain à LT',
    nextWeek: 'dddd à LT',
    lastDay: 'hier à LT',
    lastWeek: 'dddd dernier à LT',
    sameElse: 'L',
  },

  // Number mapping (French uses standard Arabic numerals)
  numberMap: {},

  // Symbol mapping (French uses standard Arabic numerals)
  symbolMap: {},
};
