// let users = []
// let name = document.getElementById('user-name')
// let email = document.getElementById('user-email')
// let password = document.getElementById('user-password')
// let age = document.getElementById('user-age')

// document.getElementById('registration-form').addEventListener('submit', (ev) => {
//     ev.preventDefault()
//     let formData = new FormData(ev.target)
//     let newFormData = [...formData]
//     console.log(newFormData)

//     let user = {}
//     newFormData.forEach((item) => {
//         console.log(item)
//         user[item[0]] = item[1]
//     })
//     console.log(user)

//     console.log(user.name)
//     console.log(user.email)
//     console.log(user.age)

//     if ((user.name.includes('.')
//         || user.name.includes('_')) &&
//         !user.name.includes(' ') &&
//         user.name[0] != user.name[0].toUpperCase() &&
//         user.email.endsWith('.ru') &&
//         parseInt(user.age) >= 18) {
//         users.push(user)
//     }

//     else {  
//         alert('WRONG')
//         return
//     }

//     console.log(users)
// })




let login = document.getElementById('user-login');
let email = document.getElementById('user-email');
let myName = document.getElementById('user-name');
let surname = document.getElementById('user-surname');
let pass = document.getElementById('user-password');


// function checkBtn() {
//     let obj = {
//         login: loginRegex.test(login.value),
//         email: emailRegex.test(email.value),
//         myName: nameAndSurnameRegex.test(myName.value),
//         surname: nameAndSurnameRegex.test(surname.value),
//         pass: passwordRegex.test(pass.value),
//     }

//     if (Object.values(obj).every((item) => item === true)) {
//         document.getElementById('sendButton').disabled = false
//     } else {
//         document.getElementById('sendButton').disabled = true
//     }
// }


function checkBtn2 () {
    if(loginRegex.test(login.value) === true && emailRegex.test(email.value) === true && nameAndSurnameRegex.test(myName.value) === true && nameAndSurnameRegex.test(surname.value) && passwordRegex.test(pass.value) === true) 
    {
        document.getElementById('sendButton').disabled = false
    }
    else {
        document.getElementById('sendButton').disabled = true

    }
}

const loginRegex = /^[a-z][a-z0-9._]{4,17}$/;
const emailRegex = /^[a-z0-9]+(\.[a-z0-9]+)*@[a-z]+\.[a-z]{2,}$/;
const nameAndSurnameRegex = /^[A-Z][a-z]*$/;
const passwordRegex = /^[a-zA-Z0-9._]{8,18}$/;

login.addEventListener('input', (ev) => {
    if (loginRegex.test(ev.target.value)) {
        document.getElementById('check-login').innerHTML = "Right login"
    } else {
        document.getElementById('check-login').innerHTML = "Wrong login"
    }
    checkBtn2()
})

email.addEventListener('input', (ev) => {
    if (emailRegex.test(ev.target.value)) {
        document.getElementById('check-email').innerHTML = "Right Email"
    }
    else {
        document.getElementById('check-email').innerHTML = "WRONG Email"
    }
    checkBtn2()
})

myName.addEventListener('input', (ev) => {
    if (nameAndSurnameRegex.test(ev.target.value)) {
        document.getElementById('check-name').innerHTML = "Right Name"
    }
    else {
        document.getElementById('check-name').innerHTML = "WRONG Name"
    }
    checkBtn2()
})

surname.addEventListener('input', (ev) => {
    if (nameAndSurnameRegex.test(ev.target.value)) {
        document.getElementById('check-surname').innerHTML = "Right SurName"
    }
    else {
        document.getElementById('check-surname').innerHTML = "WRONG SurName"
    }
    checkBtn2()
})

pass.addEventListener('input', (ev) => {
    if (passwordRegex.test(ev.target.value)) {
        document.getElementById('check-pass').innerHTML = "Right Pass"
        pass.style.border = "none"

    }
    else {
        document.getElementById('check-pass').innerHTML = "WRONG Pass"
        pass.style.border = "2px solid red"
    }
    checkBtn2()
})

document.getElementById('register-form').addEventListener('submit', (ev) => {
    ev.preventDefault()
    let formData = new FormData(ev.target)
    let newFormData = [...formData]

    let user = {}
    newFormData.forEach((item) => {
        user[item[0]] = item[1]
    })
    console.log(user)
})