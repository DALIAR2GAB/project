var arr=[{username:"dalia",password:"1234"}];
function login(){
    var username=document.getElementById('user').value;
    var password=document.getElementById('pass').value;

    if(username==""||password=="")
    {
        confirm('please enter the falid ');
    }
    else{
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].username==username.value&&arr[i].password==password.value)
            {
                alert('seccfully login');
                window.location.href="quiz.html";
            }
            else
            {
              alert('check the username or password');
            }
        }
    }
}
//signup funcation
function signup(){
    var user=document.getElementById('user1').value;
    var password=document.getElementById('pass1').value;
    var con=document.getElementById('confirm1').value;
    var AGE=document.getElementById('age').value;
    var phone=document.getElementById('phone').value;

    var regexpattern = /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{5,12}$/; 

    if(user==""||password==""||con==""||AGE==""||phone=="")
    {
        confirm('please enter the falid');
    }
    else if(user.length<5||user.length>15)
    {
        alert('username falid');
    }
    else if(password!==con)
    {
      alert('password no match');
    }
    else if(!password.match(regexpattern))
    {
        alert('passord not strong');
    }
    else if(AGE<18||AGE>60){
           alert('age error');
    }
    else if(phone.length<10||phone.length>11){
       alert('check the phone number')
    }
    else{
        var obj=[{username:user,password:password}];
        console.log(obj);
        arr.push(obj);
        alert('seccusfuly login"'+"welcome"+" "+user);
        
    }
     console.log(arr)
}

//FORGET
function pass()
{
    let user = document.getElementById('user1').value;
    let pass_ = document.getElementById('pass1').value;
  
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i].username=user)
        {
            arr[i].password==pass_;
            alert('changes password');
        }
        else{
            alert('username not found');
        }
    }
    console.log(arr)
}
  