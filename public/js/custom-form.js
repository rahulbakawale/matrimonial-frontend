$(document).ready(function () {
  $('.login-show').addClass('show-log-panel');
});


function openUpdateModal(){
  $('.login-show').addClass('show-log-panel');

}
function openSignUpModal(){
  $('#login').modal('hide')
  $('#regs').fadeIn('show')
}

function openLoginModal(){
  $('#regs').modal('hide')
  $('#login').fadeIn('show')
}
function opneForgotPasswordModal(){
  $('#login').modal('hide')
  $('#pwd').fadeIn('show')
}

function opneResetPasswordModal() {
  $('#pwd').modal('hide')
  $('#reset').fadeIn('show')
}


$('.login-reg-panel input[type="radio"]').on('change', function () {
  if ($('#log-login-show').is(':checked')) {
    $('.register-info-box').fadeOut();
    $('.login-info-box').fadeIn();

    $('.white-panel').addClass('right-log');
    $('.register-show').addClass('show-log-panel');
    $('.login-show').removeClass('show-log-panel');

  } else if ($('#log-reg-show').is(':checked')) {
    $('.register-info-box').fadeIn();
    $('.login-info-box').fadeOut();

    $('.white-panel').removeClass('right-log');

    $('.login-show').addClass('show-log-panel');
    $('.register-show').removeClass('show-log-panel');
  }
});


/********************/


/********************/
function selectRelation(that) {
  if (that.value == "0") {
    document.getElementById("showRelation").style.display = "block";
  } else if (that.value == "5") {
    document.getElementById("showRelation").style.display = "block";
  } else if (that.value == "6") {
    document.getElementById("showRelation").style.display = "block";
  } else if (that.value == "7") {
    document.getElementById("showRelation").style.display = "block";
  } else if (that.value == "8") {
    document.getElementById("showRelation").style.display = "block";
  } else {
    document.getElementById("showRelation").style.display = "none";
  }
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
/*data tooltip js here*/


$(document).ready(function () {
  $.dobPicker({
    daySelector: '#dobday',
    monthSelector: '#dobmonth',
    yearSelector: '#dobyear',
    dayDefault: 'Day',
    monthDefault: 'Month',
    yearDefault: 'Year',
    minimumAge: 12,
    maximumAge: 80
  });
});
/*data picker js here*/

 $(document).ready(function(){
    $('#timepicker').mdtimepicker(); //Initializes the time picker
  });
/*Time picker js here*/

$(function () {
    set_($('#fifty-max'), 50);
    function set_(_this, max) {
        var block = _this.parent();

        block.find(".increase").click(function () {
            var currentVal = parseInt(_this.val());
            if (currentVal != NaN && (currentVal + 1) <= max) {
                _this.val(currentVal + 1);
            }
        });
        block.find(".decrease").click(function () {
            var currentVal = parseInt(_this.val());
            if (currentVal != NaN && currentVal != 18) {
                _this.val(currentVal - 1);
            }
        });
    }
});
$(function () {
    set_($('#eighty-max'), 80);
    function set_(_this, max) {
        var block = _this.parent();

        block.find(".wtincrease").click(function () {
            var currentVal = parseInt(_this.val());
            if (currentVal != NaN && (currentVal + 1) <= max) {
                _this.val(currentVal + 1);
            }
        });
        block.find(".wtdecrease").click(function () {
            var currentVal = parseInt(_this.val());
            if (currentVal != NaN && currentVal != 18) {
                _this.val(currentVal - 1);
            }
        });
    }
});