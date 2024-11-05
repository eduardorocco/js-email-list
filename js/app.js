function generateEmail() {

    return axios

      .get('https://flynn.boolean.careers/exercises/api/random/mail')

      .then((result) => {

        console.log(result.data.response)

        return result.data.response

      })

  }





const mailList = document.getElementById('mail-list')

for (let i = 0; i < 10; i++) {

    generateEmail().then((email) => {

      const listItem = document.createElement('li')

      listItem.textContent = email

      mailList.appendChild(listItem)
    });
  }