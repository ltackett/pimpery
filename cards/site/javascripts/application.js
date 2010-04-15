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
            
            return false
        });
    });
});