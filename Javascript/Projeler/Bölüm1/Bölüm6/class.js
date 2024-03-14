class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
}
logİn(){
    console.log(`${this.username} giri yaptı`);
}
logOut(){
    console.log(`${this.username} çıkış yaptı`);
}}

class Admin {
    constructor(username, password,honors){
        super(username, password);
        this.honors =honors;}

    deleteUser(userid) {
        Users.filter(user => user.id !== userid);
    }}

    const User1 = new User("Batuhan", 3417614);
    const User2 = new User("Hatice",5446658);
    let Users = [User1, User2];
