// Function to select image and preview it
function previewImage(event) {
    const input = event.target;
    const file = input.files[0];
    const reader = new FileReader();
    const imgElement = document.getElementById("image-preview");

    reader.onload = function() {
        imgElement.src = reader.result;
    };

    reader.readAsDataURL(file);
}
