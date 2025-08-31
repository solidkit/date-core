/**
 * Spanish locale configuration
 * Configuration for Spanish date and time formatting
 */

export const es = {
  // Month names (long)
  months: [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ],

  // Month names (short)
  monthsShort: [
    'ene.',
    'feb.',
    'mar.',
    'abr.',
    'may.',
    'jun.',
    'jul.',
    'ago.',
    'sep.',
    'oct.',
    'nov.',
    'dic.',
  ],

  // Weekday names (long)
  weekdays: [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
  ],

  // Weekday names (short)
  weekdaysShort: ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],

  // Weekday names (minimal)
  weekdaysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],

  // Relative time translations
  relativeTime: {
    future: 'en %s',
    past: 'hace %s',
    s: 'unos segundos',
    ss: '%d segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    w: 'una semana',
    ww: '%d semanas',
    M: 'un mes',
    MM: '%d meses',
    y: 'un año',
    yy: '%d años',
    ago: '',
    justNow: 'justo ahora',
    today: 'hoy',
    yesterday: 'ayer',
    tomorrow: 'mañana',
  },

  // Calendar formatting
  calendar: {
    sameDay: 'hoy a la LT',
    nextDay: 'mañana a la LT',
    nextWeek: 'dddd a la LT',
    lastDay: 'ayer a la LT',
    lastWeek: 'dddd pasado a la LT',
    sameElse: 'L',
  },

  // Number mapping (Spanish uses standard Arabic numerals)
  numberMap: {},

  // Symbol mapping (Spanish uses standard Arabic numerals)
  symbolMap: {},
};
