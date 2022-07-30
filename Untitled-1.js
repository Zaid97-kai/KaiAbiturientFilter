var elem = document.getElementsByTagName('tr');

function tempFunction() 
{
    try
    {
        for(var i = 0; i <= elem.length; i++)
        {
            if(elem[i].getAttribute("bgcolor") == undefined)
            {
                elem[i].remove();
            }
        }   
    }
    catch
    {
        tempFunction();
    } 
}

function tempSecondFunction()
{
    var elemSecond = document.getElementsByTagName('tr');

    for(var i = 0; i <= elemSecond.length; i++)
    {
        var tdElem = document.createElement('td');
        if(i == 0)
        {
            tdElem.innerHTML = "№";
        }
        else
        {
            tdElem.innerHTML = i;
        }
        elem[i].prepend(tdElem);
    }
}

let timerId = setInterval(() => tempFunction(), 250);

setTimeout(() => { clearInterval(timerId); tempSecondFunction(); alert('Успешно!'); }, 5000);