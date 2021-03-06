$(document).ready(function () {
  const $menu = $("#menu");
  const $sidePanel = $("#side-panel");
  const form = document.getElementById("form");
  const formModal = document.getElementById("form-modal");
  const $greetingCloseButton = $("#greeting-close");
  const $greetingModal = $("#open-greeting");
  let email;
  let name;
  let tel;
  const isValidMail = (field) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.val().trim());
  const isValidName = (field) => field.val().trim() !== '';
  const isValidTel = (field) => /^\d{10}$/.test(field.val().trim());

  $greetingCloseButton.on("click", () => {
    $greetingModal.removeClass("active");
  });

  $(document).mouseup((e) => {
    if (
      !$sidePanel.is(e.target) && // if the target of the click isn't the container...
      $sidePanel.has(e.target).length === 0
    ) {
      // ... nor a descendant of the container
      $sidePanel.removeClass("active");
    }
  });

  $menu.on("click", () => {
    $sidePanel.addClass("active");
  });

  const addClassError = (field) => field[0].classList.add("error");
  const addClassSuccess = (field) => field[0].classList.add("success");
  const removeClassError = (field) => field.classList.remove("error");
  const removeClassSuccess = (field) => field.classList.remove("success");

  
  $(form).on("submit", function () {
    event.preventDefault();

    for (input of form) {
      removeClassError(input);
      removeClassSuccess(input);
    }

    name = $("#name");
    email = $("#email");
    tel = $("#tel");

    const checkName = isValidName(name);
    const checkMail = isValidMail(email);
    const checkTel = isValidTel(tel);

    checkName ? addClassSuccess(name) : addClassError(name);
    checkMail ? addClassSuccess(email) : addClassError(email);
    checkTel ? addClassSuccess(tel) : addClassError(tel);

    if (checkName && checkMail && checkTel) {
      let formData = $(form).serialize();
      $greetingModal.addClass("active")
      $.ajax({
        url: "mailer.php",
        data: formData,
        type: "POST",
        success: function (data) {
          //alert(data);
        },
        error: function (error) {
          //alert('error',error);
        },
      });

      form.reset();
      for (input of form) {
        removeClassError(input);
        removeClassSuccess(input);
      }
    }
    return false;
  });

  $(formModal).on("submit", function () {
    event.preventDefault();

    for (input of formModal) {
      removeClassError(input);
      removeClassSuccess(input);
    }

    name = $("#name-modal");
    email = $("#email-modal");
    tel = $("#tel-modal");

    const checkName = isValidName(name);
    const checkMail = isValidMail(email);
    const checkTel = isValidTel(tel);

    checkName ? addClassSuccess(name) : addClassError(name);
    checkMail ? addClassSuccess(email) : addClassError(email);
    checkTel ? addClassSuccess(tel) : addClassError(tel);

    if (checkName && checkMail && checkTel) {
      let formData = $(formModal).serialize();
      $greetingModal.addClass("active")
      $.ajax({
        url: "mailer.php",
        data: formData,
        type: "POST",
        success: function (data) {
          //alert(data);
        },
        error: function (error) {
          //alert('error',error);
        },
      });

      formModal.reset();
      for (input of formModal) {
        removeClassError(input);
        removeClassSuccess(input);
      }
      $(".modal-close")[0].click();
    }
    return false;
  });

});
