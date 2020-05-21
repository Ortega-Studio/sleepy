/*
 * knockout takes a date object and returns a
 * string with wake times!
 * time + :14 + (multiples of 90 mins)
 */
function knockout(rightnow) {
  var r = '<div class="times">'; // return string
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
  $("#current-time").html(livetime);

  /*
   * show times to go to sleep based on the current time
   */
  var st = "";
  var answ = "";
  var d = new Date();

  answ = knockout(d);

  $("#wake-times-container").html(answ);
  $("#wake-times-container").show();

  setTimeout("currenttime()", 1000);
}

/*
 * wakeup takes a date object and returns a
 * string with bed times!
 * time + :14 + (multiples of 90 mins)
 */
function wakeup(rightnow) {
  var r = '<div class="times">'; // return string
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
  $("#current-time").html(livetime);

  /*
   * show times to go to sleep based on the current time
   */
  var st = "";
  var answ = "";
  var d = new Date();

  answ = knockout(d);

  $("#wake-times-container").html(answ);
  $("#wake-times-container").show();

  setTimeout("currenttime()", 1000);
}

function waketime(value) {
  var input = value.split(":");

  var gd = new Date();
  var year = gd.getFullYear();
  var month = gd.getMonth();
  var day = gd.getDate();
  var hour = input[0];
  var minute = input[1];

  var d = new Date(year, month, day, hour, minute);

  var answ = wakeup(d);

  $("#sleep-times-container").html(answ);
  $("#sleep-times-container").show();
}

$(document).ready(function() {
  /*
   * show me the current time
   */
  currenttime();

  /*
   * show me times based on the user input time
   */
  var values = {};
  $("#sleep-time-value").submit(function() {
    $.each($("#sleep-time-value").serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });

    waketime(values.time);

    return false;
  });
});
