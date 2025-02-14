// console.log('button clicking file added')


// document.getElementById('')
//      .addEventListener('click', function(){})

// search: form submit reloading the page 

// step: Event handler
document.getElementById('button-login')
    .addEventListener('click', function(event){
// step: Prevent default behavior (prevent reloading browser)
        event.preventDefault(); /* difficult for beginners */
        // console.log('login button clicked');

        // step-3: Get the phone number
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        // console.log(phoneNumber, pinNumber);

        // Will not use this in future
        if(phoneNumber === '5' && pinNumber === '1234'){
            console.log('You are logged in.')
            window.location.href = '/home.html';
        }
        else{
            alert('Wrong phone number or pin.')
        }
    })