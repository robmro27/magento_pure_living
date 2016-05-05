$jq(window).load(function() {
    $jq('#slider').nivoSlider();
});


$jq(document).ready(function() {	
try {
    
    var oHandlerHorizontal = $jq("#carouseldiv").msCarousel({boxClass:'div.set', width:907, height:302, scrollSpeed:500}).data("msCarousel");
    
    $jq("#next").click(function() {
            oHandlerHorizontal.next();
    });
    
    $jq("#previous").click(function() {
        oHandlerHorizontal.previous();
    });			

    } catch(e) {
        alert(e.message);
    }

});