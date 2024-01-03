
    function signup(){
        var obj=[{user:"dalia",pass:"111"}];
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
        else if(AGE.value<10||AGE.value>50){
               alert('age error');
        }
        else if(phone.length<10||phone.length>11){
           alert('check the phone number')
        }
        else{
            var arr=[{username:user,password:password}];
            console.log(arr);
            obj.push(arr);
            alert('seccusfuly login"'+"welcome"+" "+user);
        }
    }