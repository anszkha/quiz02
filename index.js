let dbUsers = [
    {
        Username : "Anis",
        password : "Anis14",
        name : "anis",
        email : "Anis99@gmail.com"
    }
    ,
    {
        Username : "Ali",
        password : "1234",
        name : "ALi",
        email : "ali@gmail.com"
    }
    ,
    {
        Username : "abu",
        password : "12345",
        name : "Abut",
        email : "abu88@gmail.com"
    }
]

function login(reqUsername,reqpassword)
{
    let matchuser= dbUsers.find(
        x => x.Username == reqUsername)

    if (!matchuser)return "User not found"
    if(matchuser.password==reqpassword)
{
    return matchuser
}
else
{
    return "invalid password"
}

}

function register(reqUsername, reqpassword, reqname,reqemail)
{
    dbUsers.push
    (
        {
        Username: reqUsername,
        password: reqpassword,
        name:   reqname,
        email : reqemail    
        }
    )
}


//try to log in
console.log(login ("Anis","Anis14"))

register("alibaba","1234","alisepet","alisepet@gmail.com")
console.log(login ("alibaba","1234"))