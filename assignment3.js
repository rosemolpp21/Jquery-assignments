$(document).ready(function () {
    $("#form-submit").on("click", function (event) {
        event.preventDefault();
        $(".error").html("");
        $("#succes-msg").html("");
        let valid = true;
        let fullname = $("#fname").val().trim();
        let emailid = $("#emailid").val().trim();
        let feedback = $("#feedback").val().trim();
        if (fullname.length < 3) {
            $("#name-error").html("name should have atleast 3 letters");
            valid = false;
        }
        const emailpattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailpattern.test(emailid)) {
            $('#mail-error').text('Enter a valid email id');
            valid = false;
        }
        if (feedback.length < 10) {
            $("#feedback-error").html("feedback should conatain atleast 10 characters");
            valid = false;
        }
        if (!valid) {
            return;
        }
        $.post("https://jsonplaceholder.typicode.com/posts",
            { Name: `${fullname}`, Email: `${emailid}`, Feedback: `${feedback}` },
            function (data, status) {
                console.log(data);
                if (status == "success") {
                    $("#succes-msg").append("Feedback submitted successfully")
                    for (i in data) {
                        $("#succes-msg").append(`<br>${i} : ${data[i]}`)
                    }
                    $('#myform')[0].reset();
                }
                else {
                    $("#succes-msg").html("Data delivery is unsuccessfull");
                }
            });

    })
})