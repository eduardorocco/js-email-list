function generateEmail() {

    return axios

      .get('https://flynn.boolean.careers/exercises/api/random/mail')

      .then(result => result.data.response)
  }
  

function refreshEmails() {

  const mailList = document.getElementById('mail-list')

  mailList.innerHTML = '' 



  for (let i = 0; i < 10; i++) {

    generateEmail().then(email => {

      const listItem = document.createElement('li')

      listItem.textContent = email;

      listItem.classList.add('list-group-item')

      mailList.appendChild(listItem);

    })
  }
}

document.getElementById('refresh-button').addEventListener('click', refreshEmails);

refreshEmails();