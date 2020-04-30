const user = { id: 10, name: 'mehmet' };
const friends = [ { id: 11, name: 'kenan' }, { id: 12, name: 'murat' } ];

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, 4000);
    });
};

const getFriends = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(friends);
        }, 1000);
    });
};

 async function myFuncAsync() {
    const user1 = await getUser();
    const friends1 = await getFriends();
    console.log(user1);
    console.log(friends1);
}

myFuncAsync();