

class Github {
    constructor(){
        this.client_id = 'ae64fee8db26697208d5';
        this.client_secret = 'cee079f6910b33c740ce7dc95949f2f700309870';
     }

     async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}