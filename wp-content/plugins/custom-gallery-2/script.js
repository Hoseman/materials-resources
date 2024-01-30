// document.addEventListener('DOMContentLoaded', function () {
//     // Get the main product image container
//     var mainImageContainer = document.querySelector('.woocommerce-product-gallery__wrapper');

//     // Create a new image element for the second image
//     var secondImage = document.createElement('img');
//     secondImage.src = 'https://placehold.co/600x338';
//     secondImage.alt = 'alternative image';

//     // Append the second image below the main product image
//     mainImageContainer.appendChild(secondImage);
// });




document.addEventListener('DOMContentLoaded', function () {
    var galleryImages = document.querySelectorAll('.woocommerce-product-gallery__image');

    galleryImages.forEach(function (image, index) {
        image.addEventListener('mouseover', function () {
            // Hide all thumbnails
            var thumbnails = document.querySelectorAll('.woocommerce-product-gallery__image img');
            thumbnails.forEach(function (thumb) {
				//thumb.style.display = 'none';
                //thumb.style.opacity = '0';
                thumb.classList.remove('hovered_fadeout');
                thumb.classList.add('hovered_fade');
            });

            // Display the second image on hover
            // var secondImage = document.querySelector('.woocommerce-product-gallery__image:nth-child(2) img');
            // secondImage.style.display = 'block';
			//secondImage.classList.add('hovered_img');
        });

        image.addEventListener('mouseout', function () {
            // Reset to display all thumbnails on mouseout
            var secondImage = document.querySelector('.woocommerce-product-gallery__image:nth-child(2) img');
            var thumbnails = document.querySelectorAll('.woocommerce-product-gallery__image img');
            thumbnails.forEach(function (thumb) {
                thumb.classList.remove('hovered_fade');
                thumb.classList.add('hovered_fadeout');
                thumb.style.display = 'block';
				thumb.style.opacity = '1';
				//secondImage.classList.remove('hovered_img');
            });
        });
    });
});