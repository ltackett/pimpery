jQuery.fn.classcade = function() {
    $(this).prev('.unit').addClass('prev');
    $(this).next('.unit').addClass('next');
}

$(document).ready(function() {
    
    // Curse through each unit
    $('.unit').each(function(index) {
        
        // Add mirror'd elements.
        $(this).append('<div class="mirrord">&nbsp;</div>')
        
        // Add ID's for :target
        $(this).attr('id', 'card-' + (index+1))
        
        // click for the animation, hover is gay.
        $(this).click(function() {
            
            // Update the URL
            document.location = '#' + $(this).attr('id');
            
            // Remove classes on all units
            $('.unit').removeClass('prev').removeClass('current').removeClass('next');
            // Then add em via classcade
            $(this).classcade();
            
            return false
        });
    });
});




// $(document).ready(function() {
//     
//     var offsetR = $('.unit').css('margin-right');
//     var offsetL = $('.unit').css('margin-left');
//     var offsetT = $('.unit').css('margin-top');
//     var skew = $('.unit .mirror-me').css('transform')
// 
//     jQuery.fn.cardflow = function(degrees) {
//         $(this).animate({
//             'margin-right': offsetR,
//             'margin-left': offsetL,
//             'margin-top': offsetT}, 300)
//         .find('.mirror-me, .mirrord')
//         .rotate3Di(degrees, 300)
//     }
//     
//     jQuery.fn.flashy = function() {
//         
//         var color = '#000';
//         var flashColor = '#F00';
//         
//         $(this).animate({
//             'color': flashColor}, 100, function(){
//                 $(this).animate({
//                     'color': color}, 700)
//             });
//     }
//     
//     
//     // create the reflections for non-webkit browsers
//     
//     $('.unit').each(function(index) {
//         
//         // eventually I wanna put the contents in here...
//         mirrorContents = "&nbsp;";
//         $(this).append('<div class="mirrord">' +mirrorContents+ '</div>')
//     });
//     
//     // angle em so they don't jump
//     $('.unit').cardflow(-15);
//     
//     $('.unit').each(function(index) {
//         
//         $(this).attr('rel', index)
//         $(this).click(function() {
// 
//             // close the panels to the left
//             $('.unit').not(this).cardflow(-15);
//             $('.unit').not(this).removeClass('current');
//             
//             // open the currently clicked one  
//             $(this)
//                 .addClass('current')
//                 .animate({
//                     'margin-right': -30 + 'px',
//                     'margin-left': 60 + 'px',
//                     'margin-top': '75px'}, 300, function(){
//                         $(this).find('h1').flashy();
//                     })
//                 .find('.mirror-me, .mirrord')
//                 .rotate3Di(0, 300);
//         });
//         
//     });
// });
