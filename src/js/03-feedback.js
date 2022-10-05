const throttle = require('lodash.throttle');


    const form = document.querySelector('.feedback-form');
    const feedbackFormData = JSON.parse(localStorage.getItem("feedback-form-state")) || {}

    populateFormValue()

    form.addEventListener('input', throttle((onFormInput), 500))

    form.addEventListener('submit', onFormSubmit)

    function onFormInput(evt) {
        
      feedbackFormData[evt.target.name] = evt.target.value;
      setLocalTarget(feedbackFormData)

    }

    function setLocalTarget (feedbackFormData) {

        localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormData))

       }

    function onFormSubmit (evt) {
        evt.preventDefault();
        const {email, message } = evt.currentTarget.elements


        if(email.value.length === 0 || message.value.length === 0) {
        alert("Please fill in all the fields!")
        } 
        else {
            console.log (feedbackFormData)
            evt.target.reset()
            localStorage.removeItem('feedback-form-state')
        }}

    function populateFormValue () {
        try {

        const formDataSaveValue = localStorage.getItem("feedback-form-state")

        const formDataSaveParse = JSON.parse(formDataSaveValue);

        if(formDataSaveParse) {
            const keys = Object.keys(formDataSaveParse)

            for (let i = 0; i < keys.length; i+=1 ) {

            form.elements[keys[i]].value = formDataSaveParse[keys[i]]
            }

        }} catch (e) {
            console.log(e)

        }
    }

