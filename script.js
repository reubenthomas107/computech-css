// This is javascript for the Enquiry Form
function validateForm()
{
    var ln=document.getElementById("lastname").value;
    var fn=document.getElementById("firstname").value;
    var nam= /^[a-zA-Z]+$/;
    var mn=document.getElementById("mobileno").value;
    var em=document.getElementById("email").value;
    var prodname=document.getElementById("prod").value;
    var descrip=document.getElementById("desc").value;
    var num= /^[0-9]+$/;
        
        if(fn=="" || fn==null || !fn.match(nam))
        {
            alert('Enter first name (Only Alphabets)');
            document.myForm.firstname.focus();
            return false;
        }
        if(ln=="" || ln==null || !ln.match(nam))
        {
            alert('Enter last name (Only Alphabets)');
            document.myForm.lastname.focus();
            return false;
        }
        if(mn=="" || mn==null || !mn.match(num) || mn.length!=10)
        {
            if(mn.length!=10)
            {
                alert('Enter a 10 Digit Mobile Number');
                document.myForm.mobileno.focus();
                return false;
            }
        }
        if(em=="")
        {
            alert('Please provide your email address');
            document.myForm.email.focus();
            return false;
        }
        if(prodname=="")
        {
            alert('Please provide the Product details');
            document.myForm.prod.focus();
            return false;
        }
        if(descrip=="")
        {
            alert('Kindly describe your issue');
            document.myForm.desc.focus();
            return false;
        }
        return (true);
} 

// This is javascript for signup form
function validateSignup()
{
    var ln=document.getElementById("lastname").value;
    var fn=document.getElementById("firstname").value;
    var uname=document.getElementById("username").value;
    var pwd=document.getElementById("password").value;
    var em=document.getElementById("email").value;
    var date=document.getElementById("dob").value;
    var gen=document.getElementById("gender").value;
    var mn=document.getElementById("mobileno").value;
    var pro=document.getElementById("promo").value;
    var trm=document.getElementById('terms');
    var nam= /^[a-zA-Z]+$/;
    var pass = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/;
    var usernamechk= /^[a-z0-9_-]{4,12}$/;

        if(fn=="" || fn==null || !fn.match(nam))
        {
            alert('Enter first name (Only Alphabets)');
            document.myForm2.firstname.focus();
            return false;
        }
        if(ln=="" || ln==null || !ln.match(nam))
        {
            alert('Enter last name (Only Alphabets)');
            document.myForm2.lastname.focus();
            return false;
        }
        if(uname=="" || uname==null || !uname.match(usernamechk))
        {
            alert('Enter correct username [minimum 4 characters]');
            document.myForm2.username.focus();
            return false;
        }
        if(pwd=="" || pwd==null || !pwd.match(pass))
        {
            if(pwd=="")
            {
                alert('Enter a password');
                document.myForm2.password.focus();
                return false;
            }
            else if(!pwd.match(pass))
            {
                alert('Password must be atleast 6 character long and sust contain 1 Uppercase, 1 Lowercase, 1 Numeric.');
                return false;
            }
        }
        if(em=="")
        {
            alert('Please provide your email address');
            document.myForm2.email.focus();
            return false;
        }
        if(date=="")
        {
            alert('Please provide your Date of Birth');
            document.myForm2.dob.focus();
            return false;
        }
    
        if(mn=="" || mn==null || mn.length!=10)
        {
            if(mn=="")
            {
                alert('Enter a number');
                document.myForm2.mobileno.focus();
                return false;
            }
            if(mn.length!=10)
            {
                alert('Enter a 10 Digit Mobile Number');
                document.myForm2.mobileno.focus();
                return false;
            }
        }
        if(!trm.checked)
        {
            alert('You must agree to the terms and conditions');
            return false; 
        }
    return (true);
}
