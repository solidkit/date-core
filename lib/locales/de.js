/**
 * German locale configuration
 * Configuration for German date and time formatting
 */

export const de = {
  // Month names (long)
  months: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],

  // Month names (short)
  monthsShort: [
    'Jan.',
    'Feb.',
    'März',
    'Apr.',
    'Mai',
    'Juni',
    'Juli',
    'Aug.',
    'Sept.',
    'Okt.',
    'Nov.',
    'Dez.',
  ],

  // Weekday names (long)
  weekdays: [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ],

  // Weekday names (short)
  weekdaysShort: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],

  // Weekday names (minimal)
  weekdaysMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],

  // Relative time translations
  relativeTime: {
    future: 'in %s',
    past: 'vor %s',
    s: 'ein paar Sekunden',
    ss: '%d Sekunden',
    m: 'einer Minute',
    mm: '%d Minuten',
    h: 'einer Stunde',
    hh: '%d Stunden',
    d: 'einem Tag',
    dd: '%d Tagen',
    w: 'einer Woche',
    ww: '%d Wochen',
    M: 'einem Monat',
    MM: '%d Monaten',
    y: 'einem Jahr',
    yy: '%d Jahren',
    ago: '',
    justNow: 'gerade eben',
    today: 'heute',
    yesterday: 'gestern',
    tomorrow: 'morgen',
  },

  // Calendar formatting
  calendar: {
    sameDay: 'heute um LT',
    nextDay: 'morgen um LT',
    nextWeek: 'dddd um LT',
    lastDay: 'gestern um LT',
    lastWeek: 'dddd letzte Woche um LT',
    sameElse: 'L',
  },

  // Number mapping (German uses standard Arabic numerals)
  numberMap: {},

  // Symbol mapping (German uses standard Arabic numerals)
  symbolMap: {},
};
