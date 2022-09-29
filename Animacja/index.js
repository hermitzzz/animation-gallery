$(document).ready(function(){

    $(".image-slider").click(function(){
        if (this.id == "item1") animation1();
        if (this.id == "item2") animation2();
        if (this.id == "item3") animation3();
        //if (this.id == "item1") animation4();
        //if (this.id == "item2") animation5();
        //if (this.id == "item3") animation6();
    });

    let t = 220; let width1 = 200; let height1 = 200; let width2 = 500; let height2 = 500; let sizeFontsmall = "3em"; let sizeFontlarge = "9em";

    function animation1(){
        $("#item1").animate({left: "0px",height: width2,width: width2, fontSize: sizeFontlarge},t).css("z-index", 2);
        $("#item2").animate({left: "600px",height: height1,width: width1, fontSize: sizeFontsmall},t).css("z-index", 0);
        $("#item3").animate({left: "-300px",height: height1,width: width1, fontSize: sizeFontsmall},t).css("z-index", 0);
    }
    function animation2(){
        $("#item1").animate({left: "-300px",height: height1,width: width1, fontSize: sizeFontsmall},t).css("z-index", 0);
        $("#item2").animate({left: "0px",height: height2,width: width2, fontSize: sizeFontlarge},t).css("z-index", 2);
        $("#item3").animate({left: "600px",height: height1,width: width1, fontSize: sizeFontsmall},t).css("z-index", 0);
    }
    function animation3(){
        $("#item1").animate({left: "600px",height: height1,width: width1, fontSize: sizeFontsmall},t).css("z-index", 0);
        $("#item2").animate({left: "-300px",height: height1,width: width1, fontSize: sizeFontsmall},t).css("z-index", 0);
        $("#item3").animate({left: "0px",height: height2,width: width2, fontSize: sizeFontlarge},t).css("z-index", 2);
    }
    function animation4(){
        $("#item1").toggle(function(){
            $(this).delay(100).animate({height: "200px"});
        },function () {
            $(this).delay(100).animate({height: "150px"});
        });
    }
    function animation5(){
        $("#item2").toggle(function(){
            $(this).delay(100).animate({height: "200px"});
        },function () {
            $(this).delay(100).animate({height: "150px"});
        });
    }
    function animation6(){
        $("#item3").toggle(function(){
            $(this).delay(100).animate({height: "200px"});
        },function () {
            $(this).delay(100).animate({height: "150px"});
        });
    }
    $(function() {
        animation2();
    })
});