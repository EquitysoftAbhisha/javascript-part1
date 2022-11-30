// -------------- object inside array ----------------
// very useful in real world applicatons 

const users = [

    {
        userId: 1,
        firstname : 'abhisha',
        gender : 'female'
    },
    {
        userId: 2,
        firstname : 'zeel',
        gender : 'female'
    },
    {
        userId: 3,
        firstname : 'nency',
        gender : 'female'
    }

];

// console.log(users);

for(let user of users){

    // console.log(user);
    console.log(user.firstname);

}

// -------- nested destructuring ---------

// const [user1 ,user2, user3] = users;

const [{userId,firstname : user1firstName} , , {gender : user3gender}] = users; // destructuring of object

console.log(userId);

console.log(user1firstName);

console.log(user3gender);
