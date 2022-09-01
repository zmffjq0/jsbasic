import moment from 'moment-timezone';

const today = moment();
console.log(`#######----today-----###### => ${today}`);
console.log(
  `#######----today.format('LLLL')-----###### => ${today.format('LLLL')}`
);
console.log(
  `#######----today.format('YYYY-MM-DD')-----###### => ${today.format(
    'YYYY-MM-DD'
  )}`
);

const d801 = moment('2022-08-01');
moment.locale('ko');
const d802 = moment('2022-08-02');
console.log(
  `#######----d801.format('MMM MMMM Do D DD')-----###### => ${d801.format(
    'MMM MMMM Do D DD'
  )}`
);
console.log(
  `#######----d802.format('LLL')-----###### => ${d802.format('LLL')}`
);
console.log(
  `#######----d802.format('MMM MMMM Do D DO')-----###### => ${d802.format(
    'MMM MMMM Do D DO'
  )}`
);

const d0 = new Date(0);
console.log(moment(d0).tz('America/Los_Angeles').format('LLL'));
