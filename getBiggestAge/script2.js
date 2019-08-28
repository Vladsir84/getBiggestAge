const users = [
    { name: 'Jonny Walker', birthDate: '1995-12-17' },
    { name: 'Andrew', birthDate: '2001-10-29' }
];

const birthDate = users.sort((a, b) => a.birthDate.localeCompare(b.birthDate))[0].birthDate;
let getBiggestAge;
if (birthDate) {
    getBiggestAge = new Date().getFullYear() - new Date(birthDate).getFullYear();
}
console.log(getBiggestAge);