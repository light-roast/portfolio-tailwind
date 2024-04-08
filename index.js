
const anchorTags = document.querySelectorAll('a');


anchorTags.forEach(anchor => {
    anchor.addEventListener('click', function(event) {
   
       


        const checkbox = document.getElementById('menu');


        checkbox.checked = false;
    });
});
