<!DOCTYPE html>
<html class="" lang="en" dir="ltr">
  <head>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-13166425-2"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());
		
		  gtag('config', 'UA-13166425-2');
		</script>

    <meta charset="utf-8" />
    <title>Sleepy - Sleep your best sleep</title>
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <link type="text/css" href="css/sleepy.css?<?php print rand(); ?>" rel="stylesheet" />		
	  <link rel="apple-touch-icon" href="img/icons/apple-touch-icon-180x180.png" />
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://kit.fontawesome.com/d90e0198e0.js"
      crossorigin="anonymous"
    ></script>
    <script type="text/javascript" src="js/sleepy.js?<?php print rand(); ?>"></script>
  </head>

  <body>
    <div class="container">
      <div id="top" class="row">
        <div class="col-3 line"></div>
        <div class="col-6 text">It is currently</div>
        <div class="col-3 line"></div>
      </div>

      <h1 id="currenttime"></h1>
      <h2 id="timescontainerheader">Optimum Wake Times Are</h2>
      <div id="timescontainer">
        <div></div>
      </div>

      <div id="how-does-this-work">
        <button
          type="button"
          class="btn btn-link"
          data-toggle="modal"
          data-target="#about"
        >
          <i class="fal fa-info-circle"></i> How does Sleepy work?
        </button>
      </div>
    </div>

    <div
      class="modal fade"
      id="about"
      tabindex="-1"
      role="dialog"
      aria-labelledby="about"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title" id="exampleModalLabel">About Sleepy</div>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="fal fa-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Waking up during a sleep cycle can leave you feeling groggy.
              Sleepy provides you time options to help you to wake up between
              sleep cycles.
            </p>
            <p>A good night's sleep consists of 5-6 complete sleep cycles.</p>

            <p><i class="fal fa-snooze"></i> Sweet dreams!</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
