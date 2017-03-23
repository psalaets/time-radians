# time-radians

Convert hours/minutes/seconds to clock hand angles.

## Install

`$ npm install --save time-radians`

## Usage

```js
let timeRadians = require('time-radians');

let now = new Date();

let hoursAngle = timeRadians.hoursHand(now.getHours(), now.getMinutes(), now.getSeconds());
let minutesAngle = timeRadians.minutesHand(now.getMinutes(), now.getSeconds());
let secondsAngle = timeRadians.secondsHand(now.getSeconds());

// render clock
```

## API

`let timeRadians = require('time-radians');`

### timeRadians.hoursHand(hours, minutes = 0, seconds = 0)

Hours can be 12-hour or 24-hour.

Returns angle for hours hand, in radians.

### timeRadians.minutesHand(minutes, seconds = 0)

Returns angle for minutes hand, in radians.

### timeRadians.secondsHand(seconds)

Returns angle for seconds hand, in radians.

## Rendering tip

Assuming your clock's center looks like

```js
var center = {
  x: 100,
  y: 200
};
```

use this to figure out where to render clock hands

```js
function endPoint(center, length, radians) {
  return {
    x: center.x + (length * Math.cos(radians)),
    y: center.y - (length * Math.sin(radians))
  };
}
```


## License

MIT
