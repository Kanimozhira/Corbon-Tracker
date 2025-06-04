// JavaScript functionality for settings page

document.addEventListener('DOMContentLoaded', function() {
    const saveSettingsBtn = document.getElementById('save-settings-btn');

    saveSettingsBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Gather settings data
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Perform validation (if needed)

        // Save settings (simulate saving with a console log for demonstration)
        console.log('Saving settings:');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // You can add additional logic here to save settings to server or local storage
    });
});
