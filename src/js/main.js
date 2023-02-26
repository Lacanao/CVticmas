const d = document;
const api = axios.create({
    method: 'GET',
    baseURL: 'https://randomuser.me/api/',
    headers: { 'Content-type': 'application/json;charset=utf-8' },
});
const userInfo = d.querySelector(".get-info");

async function getUser() {
    const { data } = await api('?results=1');
    const users = data.results;

    userInfo.innerHTML = '';
    users.forEach(user => {
        //Create IMG
        const userImg = d.createElement('img');
        userImg.classList.add('user-img');
        userImg.setAttribute('alt', user.name);
        userImg.setAttribute('src', user.picture.large);
        //Create User name and job
        const userName = d.createElement('h1');
        userName.textContent = `${user.name.first} ${user.name.last}`;
        const userJob = d.createElement('p');
        userJob.textContent = 'Developer';

        userInfo.append(userImg, userName, userJob)

    });
}

getUser()


