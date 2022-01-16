window.onload = function() {
    var gallery_items = document.querySelectorAll('.gallery_item');

    gallery_items.forEach(item => addEventListener('mouseover', addCaption(item)));
    

    function addCaption(e) {
        e.classListAdd('visible');
    }
};