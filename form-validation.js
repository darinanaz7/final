window.onload = function() {
    const form = document.querySelector('.validation');


        form.addEventListener('submit', event => {
            let isValid = true;

            const nameField = form.querySelector('#validationCustom01');
            const surnameField = form.querySelector('#validationCustom02');
            const cityField = form.querySelector('#validationCustom03');
            const phoneNumberField = form.querySelector('#validationCustom05');

            const name = nameField.value.trim();
            const surname = surnameField.value.trim();
            const city = cityField.value.trim();
            const phoneNumber = phoneNumberField.value.trim();

            // Reset validation classes
            nameField.classList.remove('is-valid', 'is-invalid');
            surnameField.classList.remove('is-valid', 'is-invalid');
            cityField.classList.remove('is-valid', 'is-invalid');
            phoneNumberField.classList.remove('is-valid', 'is-invalid');

            if (name.length < 2 || /^[a-zA-Z]+$/.test(name) === false || /\d/.test(name) === true) {
                isValid = false;
                nameField.classList.add('is-invalid');
                console.log('Name invalid:', nameField.classList);
            } else {
                nameField.classList.add('is-valid');
                console.log('Name valid:', nameField.classList);
            }

            if (surname.length < 2 || /^[a-zA-Z]+$/.test(surname) === false || /\d/.test(surname) === true) {
                isValid = false;
                surnameField.classList.add('is-invalid');
                console.log('Surname invalid:', surnameField.classList);
            } else {
                surnameField.classList.add('is-valid');
                console.log('Surname valid:', surnameField.classList);
            }

            if (city.length < 2 || /^[a-zA-Z]+$/.test(city) === false || /\d/.test(city) === true) {
                isValid = false;
                cityField.classList.add('is-invalid');
                console.log('City invalid:', cityField.classList);
            } else {
                cityField.classList.add('is-valid');
                console.log('City valid:', cityField.classList);
            }

            if (phoneNumber.length < 10 || /\D/.test(phoneNumber)) {
                isValid = false;
                phoneNumberField.classList.add('is-invalid');
                console.log('Phone number invalid:', phoneNumberField.classList);
            } else {
                phoneNumberField.classList.add('is-valid');
                console.log('Phone number valid:', phoneNumberField.classList);
            }

            if (!form.checkValidity() || !isValid) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
                alert('Form is invalid!');
            } else {
                form.classList.remove('was-validated');
                alert('Form submitted successfully!');
                console.log('Form valid');
            }
        }, false);
};