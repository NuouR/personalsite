function Function(inputtxt)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(inputtxt.value.match(letters))
{
alert('الامر الذي قمت بادخاله صحيح ، بامكانك المحاولة مرة اخرى');
X.focus();
return true;
}
else
{
alert('يرجى ادخال فقط حروف وارقام :: يرجى المحاولة مرة اخرى ؟؟؟');
return false;
}
}