const fs =require('fs');

const fileName = './email_addresses.txt';
fs.readFile(fileName, 'utf-8', (err, data) => callBack(err, data));




// Methods

const callBack = (err, data) => {
    if (err) {
        console.error(err);
        return;
      }
      const emailArray = processEmails(data);
      console.log(emailArray);
      console.log(emailArray.length);
}

const processEmails = (emails) => {
    let contactArray = emails.split(', ');
    let emailArray = contactArray.map(contact => 
        getEmailFromContact(contact)
    );
    emailArray.sort((a,b) => a.toLowerCase()>b.toLowerCase() ? 1 : -1);
    return emailArray;
}

const getEmailFromContact = contact => {
    let index1 = contact.indexOf('<');
    let index2 = contact.indexOf('>');
    return contact.slice(index1 + 1, index2);
}
