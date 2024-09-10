/*Name this external file gallery.js*/

function upDate(previewPic) {
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;

    // Log for testing
    console.log('Image src:', previewPic.src);
    console.log('Alt text:', previewPic.alt);
}

function unDo() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";

    // Log for testing
    console.log('Image reset to original');
}

// New function to add tabindex and log on load
function addTabFocus() {
    const images = document.querySelectorAll('img.preview');
    images.forEach((img, index) => {
        img.setAttribute('tabindex', '0');
        console.log('Tabindex added to image', index + 1);
    });
}
