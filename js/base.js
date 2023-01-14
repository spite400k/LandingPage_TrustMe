/* slide */
$(window).load(function () {
    // 設定
    var $interval = 7000; // 切り替わりの間隔
    var $fade_speed = 350; // フェード処理の早さ
    $("#slide ul li").css({ position: "relative", overflow: "hidden" });
    $("#slide ul li").hide().css({ position: "absolute", top: 0, left: 0 });
    $("#slide ul li:first").addClass("active").show();
    setInterval(function () {
        var $active = $("#slide ul li.active");
        var $next = $active.next("li").length
            ? $active.next("li")
            : $("#slide ul li:first");
        $active.fadeOut($fade_speed).removeClass("active");
        $next.fadeIn($fade_speed).addClass("active");
    }, $interval);
});

/* windowHeight */

$(function () {
  $(".windowHeight").css("height", $(window).outerHeight());
  $(window).resize(function () {
    $(".windowHeight").css("height", $(window).outerHeight());
  });
});

/* easingScroll */
$(function () {
    $("a[href^=#]").click(function () {
        var speed = 800;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top;
        $("body,html").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

/* map グーグルマップの表示制御 */
function initialize() {
    var latlng = new google.maps.LatLng(35.003482, 135.699841);
  var myOptions = {
    zoom: 14 /*拡大比率*/,
    minZoom: 9,
    maxZoom: 19,
    center: new google.maps.LatLng(35.003482, 135.699841) /*表示枠内の中心点*/,
    scrollwheel: false, /* マウスホイールによるズーム操作の有効/無効 */
    mapTypeControl: false, /* 地図もしくは航空写真の切り替え */
    scaleControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ["maparea", google.maps.MapTypeId.HYBRID],
    } /*表示タイプの指定*/,
  };
  var map = new google.maps.Map(document.getElementById("maparea"), myOptions);
  /* icon begin */
  var icon = new google.maps.MarkerImage(
    "./img/access/mapIcon.png",
    new google.maps.Size(100, 70) /*アイコンサイズ設定*/,
    new google.maps.Point(0, 0) /*アイコン位置設定*/
  );
  var markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
    title: "サンプル鍼灸整骨院",
  };
  var marker = new google.maps.Marker(markerOptions);
  /* style begin */
  var styleOptions = [];
  var styledMapOptions = { name: "サンプル鍼灸整骨院" };
  var sampleType = new google.maps.StyledMapType(
    styleOptions,
    styledMapOptions
  );
  map.mapTypes.set("maparea", sampleType);
  map.setMapTypeId("maparea");    
}

/* accordion */
$(function () {
  $(".acMenu>dt").on("click", function () {
    $(this).next().slideToggle(500);
    $(this).toggleClass("active");
  });
});

/* gnavEx */
$(function () {
    $("#gnavBtn").click(function () {
        $("#gnavBtn").toggleClass("on");
        $("#gnavSp").fadeToggle(200);
        $("#gnavBtnIcon").toggleClass("close");
        return false;
    });
});
$(function () {
    $("#gnavSp>ul>li>a.content").click(function () {
        $("#gnavBtn").toggleClass("on");
        $("#gnavSp").fadeToggle(200);
        $("#gnavBtnIcon").toggleClass("close");
        return false;
    });
});
