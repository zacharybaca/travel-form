

// Add Event Listener on Form
document.airlineForm.addEventListener("submit", (e) => {
    e.preventDefault();
    /* Grab Values From Input Fields */
    let form = document.airlineForm;
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let location = form.location.value;

    // Loop Over Checkbox Options to Get Checked Options
    let checked = document.querySelectorAll('input[name=restrictions]:checked');
    let checkedOptions = [];

    for (let i = 0; i < checked.length; i++) {
        checkedOptions.push(checked[i].value);
    }

    alert(`First Name: ${firstName}\n Last Name: ${lastName}\n Age: ${age}\n Gender: ${gender}\n Location: ${location}\n Dietary Restrictions: ${[...checkedOptions]}`);

    // Clear Out all Input Fields on Form
    document.airlineForm.firstName.value = '';
    document.airlineForm.lastName.value = '';
    document.airlineForm.age.value = '';
    document.airlineForm.gender.value = '';
    document.airlineForm.location.value = '';

    for (let i = 0; i < checked.length; i++) {
        if (checked[i].checked) {
            checked[i] = checked[i].checked = false;
        }
    }
});
