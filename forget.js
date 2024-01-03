var arr=[{username:"dalia",password:"1234"}];
function pass()
{
    let user = document.getElementById('user1').value;
    let pass_ = document.getElementById('pass1').value;
    let confirm = document.getElementById('confirm').value;

    let look = false;
    
    for(let i = 0;i < arr.length;i++)
    {
        if(user == arr[i].username)
        {
            k1 = true;
            index = i;
        }
        else if(user !== arr[i].username)
        {
            alert('falid username')
        }
    }

    if(k1 == true)
    {
        if(pass_ == confirm)
        {
            arr[index].password == pass_;
            alert('secufuuly update');
        }else{
            alert('enter the new password')
        }
    }
    else
    {
         alert('falid update');
    }
}