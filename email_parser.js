const fs =require('fs');


const callBack = (err, data) => {
    if (err) {
        console.error(err);
        return;
      }
      processEmails(data);
}

const fileName = './email_addresses.txt';
fs.readFile(fileName, 'utf-8', (err, data) => callBack(err, data));

const processEmails = (emails) => {
    let contactArray = emails.split(', ');
    let emailArray = contactArray.map(contact => getEmail(contact)
    );
    emailArray.sort((a,b) => a.toLowerCase()>b.toLowerCase() ? 1 : -1);
    console.log(emailArray);
}
const getEmail = contact => {
    let index1 = contact.indexOf('<');
    let index2 = contact.indexOf('>');
    return contact.slice(index1 + 1, index2);
}
