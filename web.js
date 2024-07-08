// You can add JavaScript for any interactive features, such as form validation or animations.
// Example: form submission with AJAX

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // You can add form submission logic here, e.g., AJAX request
    // Example:
    // fetch('submit_form.php', {
    //     method: 'POST',
    //     body: new FormData(this)
    // }).then(response => {
    //     // Handle response
    // }).catch(error => {
    //     // Handle error
    // });
});
