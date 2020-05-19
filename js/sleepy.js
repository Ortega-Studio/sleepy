/*
 * calculates an hour and a half back
 */
function sleepback(hr, min, an) {
  var rmin = 0;
  var rhr = 0;
  var a = an;

  if (min < 30) {
    rmin = min * 1 + 30 * 1;
    rhr = hr - 2;
  } else if (min >= 30) {
    rmin = min - 30;
    rhr = hr - 1;
  }

  if (rhr < 1) {
    rhr = 12 + rhr;

    if (a == "AM") {
      a = "PM";
    } else {
      a = "AM";
    }
  }

  var r = [rhr, rmin, a];
  return r;
}

/*
 * knockout takes a date object and returns a
 * string with wake times!
 * time + :14 + (multiples of 90 mins)
 */
function knockout(rightnow) {
  var r = '<h2>Optimum Wake Times Are:</h2><div id="times">'; // return string
  var hr = rightnow.getHours();
  var dhr = 0; // separate variable to display because (24 hr clock)
  var ap = "";

  // it takes 14 minutes to fall asleep
  var min = rightnow.getMinutes() + 14;

  if (min > 60) {
    min = min - 60;
    hr = hr + 1;

    if (hr >= 24) {
      if (hr == 24) {
        hr = 0; // midnight, must adjust!
      } else if (hr == 25) {
        hr = 1;
      }
    }
  }

  for (var ctr = 0; ctr < 6; ctr++) {
    // normal sleep schedule
    // add an hour and a half
    if (min < 30) {
      min = min + 30;
    } else {
      min = min - 30;
      hr = hr + 1;
    }

    hr = hr + 1;

    if (hr == 24) {
      hr = 0;
    }

    if (hr == 25) {
      hr = 1;
    }

    if (hr < 12) {
      ap = " AM";
      dhr = hr;

      if (hr == 0) {
        dhr = "12";
      }
    } else {
      ap = " PM";
      dhr = hr - 12;
    }

    if (dhr == 0) {
      dhr = 12;
    }

    if (ctr == 0) {
      if (min > 9) {
        r =
          r +
          '<div class="time-bit" rel="' +
          dhr +
          ":" +
          min +
          ap +
          '">' +
          dhr +
          ":" +
          min +
          ap +
          "</div>";
      } else {
        r =
          r +
          '<div class="time-bit" rel="' +
          dhr +
          ":0" +
          min +
          ap +
          '">' +
          dhr +
          ":0" +
          min +
          ap +
          "</div>";
      }
    } else if (ctr == 4 || ctr == 5) {
      if (min > 9) {
        r =
          r +
          '<div class="time-bit" rel="' +
          dhr +
          ":" +
          min +
          ap +
          '">' +
          dhr +
          ":" +
          min +
          ap +
          "</div>";
      } else {
        r =
          r +
          '<div class="time-bit" rel="' +
          dhr +
          ":0" +
          min +
          ap +
          '">' +
          dhr +
          ":0" +
          min +
          ap +
          "</div>";
      }
    } else if (ctr == 3) {
      if (min > 9) {
        r =
          r +
          '<div class="time-bit" rel="' +
          dhr +
          ":" +
          min +
          ap +
          '">' +
          dhr +
          ":" +
          min +
          ap +
          "</div>";
      } else {
        r =
          r +
          '<div class="time-bit" rel="' +
          dhr +
          ":0" +
          min +
          ap +
          '">' +
          dhr +
          ":0" +
          min +
          ap +
          "</div>";
      }
    } else {
      if (min > 9) {
        r =
          r +
          '<div class="time-bit" rel="' +
          dhr +
          ":" +
          min +
          ap +
          '">' +
          dhr +
          ":" +
          min +
          ap +
          "</div>";
      } else {
        r =
          r +
          '<div class="time-bit" rel="' +
          dhr +
          ":0" +
          min +
          ap +
          '">' +
          dhr +
          ":0" +
          min +
          ap +
          "</div>";
      }
    }
  }

  r = r + "</div>";

  return r;
}

function currenttime() {
  var m = "AM";
  var gd = new Date();
  var minutes = gd.getMinutes();
  var hours = gd.getHours();

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
    m = "PM";
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var livetime = hours + ":" + minutes + " " + m;
  $("#currenttime").html(livetime);

  /*
   * show times to go to sleep based on the current time
   */
  var st = "";
  var answ = "";
  var d = new Date();

  answ = knockout(d);

  $("#timescontainer").html(answ);
  $("#timescontainer").show();
  $("#bit").show(250);

  setTimeout("currenttime()", 1000);
}

$(document).ready(function() {
  /*
   * show me the current time
   */
  currenttime();
});
