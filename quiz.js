function quiz(){
    var main=document.querySelectorAll('.rel');
    var yes=0;
    var no=0;
    main.forEach(function(i)
    {
        if(i.checked&&i.value=="yes")
        {
            yes++;
        }
        else if(i.checked&&i.value=="no")
        {
            no++;
        }
    });
    alert(`the answer yes id:${yes} and the no=${no}`);
}