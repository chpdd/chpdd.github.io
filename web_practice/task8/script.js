function is_telephone(str)
{
    if (str in (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/))
    {
        return true;
    }
    return false;
}

function main()
{
    window.addEventListener("popstate",  function ()
    {
        if (history.state == null)
        {
            $("#no-pop-up").fadeTo("fast", "1").removeClass("user-select-none");
            $("#pop-up").fadeTo("fast", "0").hide();
            $("a").removeClass("pointer-event-none");
        }
        if (history.state == "pop-up")
        {
            $("#no-pop-up").fadeTo("fast", "0.25").addClass("user-select-none");
            $("#pop-up").fadeTo("fast", "1").addClass("user-select-none");
            $("a").addClass("pointer-event-none");
            $("#close-pop-up").addClass("user-select-none");
        }
    });
/*    window.addEventListener("beforeunload", function ()
    {
        history.replaceState(null, null, "")
    });*/
    $("#button-to-pop-up").click(function ()
    {
        history.pushState("pop-up", null, "form-pop-up");
        $("#no-pop-up").fadeTo("fast", "0.25").addClass("user-select-none");
        $("#pop-up").fadeTo("fast", "1").addClass("user-select-none");
        $("a").addClass("pointer-event-none");
        $("#close-pop-up").addClass("user-select-none");
    });
    $("#close-pop-up").click(function ()
    {
        history.back();
        $("#no-pop-up").fadeTo("fast", "1").removeClass("user-select-none");
        $("#pop-up").fadeTo("fast", "0").hide();
        $("a").removeClass("pointer-event-none");
    });
    $("#button_request").click(function ()
    {
        let request_string = "";
        if (is_telephone($("#telephone").val()))
        {
            alarm("kaif");
        }
        else
        {
            alarm("nekaif");
        }
    });
}

$(document).ready(main());
