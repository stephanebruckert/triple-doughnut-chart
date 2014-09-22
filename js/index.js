$(document).ready(function () {
    /* The data of our chart */
    var data = {
        1: 3,
        2: 1,
        3: 3,
        4: 2,
        5: 2,
        6: 1,
        7: 3,
        8: 1,
        9: 3,
        10: 2,
        11: 2,
        12: 3,
        13: 1,
        14: 2,
        15: 2
    };
    setDoughnut(data);

    /* Function that fills the doughtnut with our data */
    function setDoughnut(data) {
        for (key in data) {
            var piece = ".piece-" + key;

            var color;
            if (key < 5 || key >= 15) {
                color = "blue";
            } else if (key >= 5 && key < 10) {
                color = "green";
            } else {
                color = "red";
            }

            if (data[key] > 1) {
                $(".doughnuts-in").find(piece).addClass(color + "in");
                if (data[key] >= 2) {
                    $(".doughnuts-mid").find(piece).addClass(color + "mid");
                    if (data[key] == 3) {
                        $(".doughnuts-out").find(piece).addClass(color + "out");
                    } else {
                        $(".doughnuts-out").find(piece).addClass("grey");
                    }
                } else {
                    $(".doughnuts-mid").find(piece).addClass("grey");
                    $(".doughnuts-out").find(piece).addClass("greyout");
                }
            } else {
                $(".doughnuts-in").find(piece).addClass("empty");
                $(".doughnuts-mid").find(piece).addClass("grey");
                $(".doughnuts-out").find(piece).addClass("greyout");
            }
        }
    }

    /* Hovering a piece */
    $(".ounch-logo-pieces").hover(function () {
        var piece = $(this).attr('class').split(' ')[1];
        $("." + piece).darken(30);
    }, function () {
        var piece = $(this).attr('class').split(' ')[1];
        $("." + piece).darken(-44);
    });

    /* Clicking a piece */
    $('.ounch-logo-pieces').click(function () {
        var piece = $(this).attr('class').split(' ')[1];
        var title = $("#labels #" + piece).html();
        $('#dialog').dialog();
        $("#dialog").dialog( "option", "title", title);
        $("#dialog").dialog().siblings('.ui-dialog-titlebar').removeClass('ui-widget-header');
    });

    /* jQuery darkener */
    jQuery.fn.darken = function (darkenPercent) {
        $(this).each(function () {
            var rgb = $(this).css('background-color');
            rgb = rgb.replace('rgb(', '').replace(')', '').split(',');
            var red = $.trim(rgb[0]);
            var green = $.trim(rgb[1]);
            var blue = $.trim(rgb[2]);

            // darken
            red = parseInt(red * (100 - darkenPercent) / 100);
            green = parseInt(green * (100 - darkenPercent) / 100);
            blue = parseInt(blue * (100 - darkenPercent) / 100);
            // lighten
            /* red = parseInt(red * (100 - darkenPercent) / 100);
		green = parseInt(green * (100 - darkenPercent) / 100);
		blue = parseInt(blue * (100 - darkenPercent) / 100); */

            rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

            $(this).css('background-color', rgb);
        });
        return this;
    }
});