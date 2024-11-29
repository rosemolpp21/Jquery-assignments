let completedCount = 0;
let alltaskcount = 0;
$("#task-list").on("click", "li", function () {
    $(this).toggleClass("task");
    update()
})


$("#add-task").on("click", function () {
    if ($("#input-new-task").val() !== "") {
        $("#task-list").append(`<li >${$("#input-new-task").val()}</li><button class="delete-task">Delete task</button>`)
    }
    else {
        alert("input cannnot be empty");
    }
    showall()
})


$("#task-list").on("click", ".delete-task", function () {
    $(this).fadeOut(200);
    $(this).prev("li").fadeOut(200)
    $(this).prev("li").attr("id", `${$(this)}-deleted`)
    update()
})


$("#completed").on("click", function () {
    $("#task-list li").each(function () {
        if ($(this).hasClass("task") && $(this).attr("id") !== `${$(this)}-deleted`) {
            $(this).show();
            $(this).next().show();
        } else {
            $(this).hide();
            $(this).next().hide();
        }
        update()
    });
})


$("#show-all").on("click", showall)


$("#incomplete").on("click", function () {
    $("#task-list li").each(function () {
        if ($(this).hasClass("task") || $(this).attr("id") === `${$(this)}-deleted`) {
            $(this).hide();
            $(this).next().hide();
        }
        else {
            $(this).show();
            $(this).next().show();
        }
    });
    update()
})


function showall() {
    $("#task-list li").each(function () {
        if ($(this).attr("id") === `${$(this)}-deleted`) {
            $(this).hide();
            $(this).next().hide();
        }
        else {
            $(this).show();
            $(this).next().show();
        }
    })
    update()
}


function update() {
    alltaskcount = 0;
    completedCount = 0;
    $("#task-list li").each(function () {
        alltaskcount = alltaskcount + 1;
        if ($(this).hasClass("task") && $(this).attr("id") !== `${$(this)}-deleted`) {
            completedCount = completedCount + 1
        }
        if ($(this).attr("id") === `${$(this)}-deleted`) {
            alltaskcount = alltaskcount - 1;
        }

    })
    $("#count-id1").text(`Count of completed tasks -${completedCount} `)
    $("#count-id2").text(` Count of incomplete tasks -${alltaskcount - completedCount} `)
    $("#count-id3").text(` Count of total tasks -${alltaskcount} `)
}
update()
