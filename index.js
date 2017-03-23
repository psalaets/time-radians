exports.secondsHand = secondsHand;
exports.minutesHand = minutesHand;
exports.hoursHand = hoursHand;

const secondsPerSecondsHand = 60;
const secondsPerMinutesHand = 3600;
const secondsPerHoursHand = 12 * 3600;

function secondsHand(seconds) {
  return normalizedToRadians(seconds / secondsPerSecondsHand);
}

function minutesHand(minutes, seconds = 0) {
  const totalSeconds = calcTotalSeconds(minutes, seconds);
  return normalizedToRadians(totalSeconds / secondsPerMinutesHand);
}

function hoursHand(hours, minutes = 0, seconds = 0) {
  const totalMinutes = calcTotalMinutes(hours, minutes);
  const totalSeconds = calcTotalSeconds(totalMinutes, seconds);
  return normalizedToRadians(totalSeconds / secondsPerHoursHand);
}

function calcTotalSeconds(minutes, seconds) {
  return minutes * 60 + seconds;
}

function calcTotalMinutes(hours, minutes) {
  return ((hours % 12) * 60) + minutes;
}

function normalizedToRadians(normalized) {
  if (normalized >= 0 && normalized < 0.25) {
    // 12 to 3
    return clockQuarters(1) - clockQuarters(normalized / 0.25);
  } else if (normalized >= 0.25 && normalized < 0.50) {
    // 3 to 6
    return clockQuarters(4) - clockQuarters((normalized - 0.25) / 0.25);
  } else if (normalized >= 0.50 && normalized < 0.75) {
    // 6 to 9
    return clockQuarters(3) - clockQuarters((normalized - 0.5) / 0.25);
  } else {
    // 9 to 12
    return clockQuarters(2) - clockQuarters((normalized - 0.75) / 0.25);
  }
}

function clockQuarters(count) {
  return count * Math.PI / 2;
}
