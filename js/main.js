$(function () {
  $('.content a').attr('target', '_blank')
  $('.autoMenu ul>li:first-child').before('<p class="title" style="color: #b3b3b3;margin-bottom: 0;font-size:14px;">文章目录: </a>')

  // 图片灯箱事件
  $('.slb').simplebox({
    fadeSpeed: 400
  });

  //绑定页面滚动事件
  $('.top').on('click', function () {
    $("html, body").animate({
      scrollTop: 0
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });
  $(window).bind('scroll', function () {
    var len = $(this).scrollTop();
    if (len >= 100) {
      $('.top').fadeIn('1000');
    } else {
      $('.top').fadeOut('1000');
    }
  });

  $('.bq-list .OwO-bar-item:nth-child(1)').addClass('active')
  $('.OwO-emoji ul:nth-child(1)').addClass('active-txt')
  $(".bq-list .OwO-bar-item").each(function (index) {
    $(this).click(function () {
      $(".OwO-bar-item.active").removeClass("active");
      $(this).addClass("active");
      $(".OwO-emoji ul.active-txt").removeClass("active-txt");
      $(".OwO-emoji ul").eq(index).addClass("active-txt");
    });
  })


  jQuery.fn.extend({
    insertAtCaret: function (myValue) {
      return this.each(function (i) {
        if (document.selection) {
          //For browsers like Internet Explorer
          this.focus();
          var sel = document.selection.createRange();
          sel.text = myValue;
          this.focus();
        } else if (this.selectionStart || this.selectionStart == '0') {
          //For browsers like Firefox and Webkit based
          var startPos = this.selectionStart;
          var endPos = this.selectionEnd;
          var scrollTop = this.scrollTop;
          this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos, this.value.length);
          this.focus();
          this.selectionStart = startPos + myValue.length;
          this.selectionEnd = startPos + myValue.length;
          this.scrollTop = scrollTop;
        } else {
          this.value += myValue;
          this.focus();
        }
      });
    }
  });

  $(".bq-list ul li").each(function (index) {
    $(this).click(function () {
      var txt = $(".bq-list ul li").eq(index).attr("data-title")
      $("#textarea").insertAtCaret(txt)
    });
  })

  if (window.location.pathname == '/') {
    $('.cap li:nth-child(1) a').addClass('active')
  }

})