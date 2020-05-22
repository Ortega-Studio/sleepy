// calculates an hour and a half back
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

$(document).ready(function() {
  var values = {};

  $("#sleep-time-value").on("change", function() {
    var time = $(this)
      .val()
      .split(":");

    var gd = new Date();
    var year = gd.getFullYear();
    var month = gd.getMonth();
    var day = gd.getDate();
    var hr = time[0];
    var min = time[1];
    var d = new Date(year, month, day, hr, min);
    var ampm = "AM";

    if (hr > 11) {
      ampm = "PM";
    }

    var orig = [hr, min, ampm];

    var first = true;
    var txt = '<div class="times">';

    var times = new Array();
    for (var c = 1; c <= 10; c++) {
      var back = sleepback(hr, min, ampm);
      var nhr = back[0];
      var nmin = back[1];
      ampm = back[2];
      var ampmt = "";
      ampmt = back[2];

      // countdown from 12, but that's not
      // how am/pm system works... whoops!
      if (nhr == 12) {
        if (ampm == "AM") {
          ampmt = "PM";
        } else {
          ampmt = "AM";
        }
      }
      // TODO: reverse display order
      if (c == 6 || c == 4 || c == 5 || c == 3) {
        var temp = "";
        if (nmin > 9) {
          temp =
            '<div class="time-bit" rel="' +
            nhr +
            ":" +
            nmin +
            " " +
            ampmt +
            '">' +
            nhr +
            ":" +
            nmin +
            " " +
            ampmt +
            "</div>";
          times.push(temp);
        } else {
          // insert 0

          temp =
            '<font color="#01DF74" size="7">' +
            nhr +
            ":0" +
            nmin +
            " " +
            ampmt +
            "</font>";
          temp =
            '<div class="time-bit" rel="' +
            nhr +
            ":0" +
            nmin +
            " " +
            ampmt +
            '">' +
            nhr +
            ":0" +
            nmin +
            " " +
            ampmt +
            "</div>";
          times.push(temp);
        }
      }
      hr = nhr;
      min = nmin;
    }
    for (i = 3; i >= 0; i--) {
      txt = txt + times[i];
    }

    txt =
      txt +
      '<div class="time-bit time-bit-empty"></div><div class="time-bit time-bit-empty"></div></div>';

    $("#sleep-times-container").html(txt);
    $("#sleep-times-container").fadeIn("slow");

    return false;
  });
});
