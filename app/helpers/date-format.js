import { helper } from '@ember/component/helper';

export default helper(function dateFormat(params/*, hash*/) {
  var date = new Date(params[0]);
  var day = date.getDate().toString();
  var dayName = date.getDay();
  var month = date.getMonth();
  var year = date.getFullYear().toString();
  return `${DayName(dayName)} ${day}, ${monthName(month)} ${year}`;
});

function DayName(x) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[x];
}

function monthName (x) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[x];
}
