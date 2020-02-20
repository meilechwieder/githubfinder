
const searchUserUI =document.getElementById('search-user');

const github = new Github;

searchUserUI.addEventListener('keyup', e =>{
    const inputText = e.target.value;


    if(inputText !== ''){
        github.getUser(inputText)
            .then(data => {
                if(data.profile.message === 'Not Found'){

                } else {
                    console.log(data);
                }
            })
    }else{
        
    }
})