$.noConflict();
jQuery(function($) {
  let erroArr = [];
  $("input[type='text'], input[type='email'], input[type='password']").on({
    keyup: function() {
      if ($(this).val() == "") {
        erroArr.push("Required ?!");
        $(this).append("<p>Required ?!!!</p>");
        $(this).css({
          borderColor: "#f00"
        });
      } else {
        $(this).css({
          borderColor: "rgba(0, 0, 0, 0.8)"
        });
        erroArr.pop();
      }
    }
  });
  $("input[type='password']").on({
    keyup: function() {
      if ($(this).val().length < 6) {
        erroArr.push("Password must be at Least 6");
        $(this).css({
          borderColor: "#f00"
        });
      } else {
        $(this).css({
          borderColor: "rgba(0, 0, 0, 0.8)"
        });
        erroArr.pop();
      }
    }
  });
  $("input[type='password']")
    .last()
    .on({
      keyup: function() {
        if (
          $(this).val() !==
          $("input[type='password']")
            .first()
            .val()
        ) {
          erroArr.push("Password dose not match !!");
          $(this).css({
            borderColor: "#f00"
          });
        } else {
          $(this).css({
            borderColor: "rgba(0, 0, 0, 0.8)"
          });
          erroArr.pop();
        }
      }
    });
  $("input[type='submit']").on({
    click: function(e) {
      e.preventDefault();
      var tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*.?[a-zA-Z0-9])*.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      let valid = tester.test($("#emailVal").val());
      $("input").each(function() {
        if ($(this).val() == "" || !valid) {
          erroArr.push("Required ?!");
          $(this).css({
            borderColor: "#f00"
          });
        } else {
          $(this).css({
            borderColor: "rgba(0, 0, 0, 0.8)"
          });
          erroArr.pop();
        }
      });
    }
  });
  $("i.fa").on({
    click: function() {
      if ($("#firstPass").attr("type") == "password") {
        $("#firstPass").attr("type", "text");
        $(this)
          .removeClass("fa-eye")
          .addClass("fa-eye-slash");
      } else {
        $("#firstPass").attr("type", "password");
        $(this)
          .removeClass("fa-eye-slash")
          .addClass("fa-eye");
      }
    }
  });
});
