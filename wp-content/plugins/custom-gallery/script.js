document.addEventListener('DOMContentLoaded', function () {
    var galleryImages = document.querySelectorAll('.woocommerce-product-gallery__image');

    galleryImages.forEach(function (image, index) {
        image.addEventListener('mouseover', function () {
            // Hide all thumbnails
            var thumbnails = document.querySelectorAll('.woocommerce-product-gallery__image img');
            thumbnails.forEach(function (thumb) {
				thumb.style.display = 'none';
            });

            // Display the second image on hover
            var secondImage = document.querySelector('.woocommerce-product-gallery__image:nth-child(2) img');
            secondImage.style.display = 'block';
			secondImage.classList.add('hovered_img');
        });

        image.addEventListener('mouseout', function () {
            // Reset to display all thumbnails on mouseout
            var secondImage = document.querySelector('.woocommerce-product-gallery__image:nth-child(2) img');
            var thumbnails = document.querySelectorAll('.woocommerce-product-gallery__image img');
            thumbnails.forEach(function (thumb) {
                thumb.style.display = 'block';
				thumb.style.opacity = '1';
				secondImage.classList.remove('hovered_img');
            });
        });
    });
});