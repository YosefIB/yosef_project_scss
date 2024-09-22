var jokes = [];
insert_jokes();
function insert_jokes() {
    var form = document.getElementById("form");
    if (!form)
        return console.error();
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var the_joke = document.getElementById("input_joke");
        if (!the_joke)
            return console.error();
        var the_category = document.getElementById("select_catagory");
        if (!the_category)
            return console.error();
        jokes.push({
            id: jokes.length + 1,
            joke: the_joke.value,
            catagory: the_category.value
        });
        the_joke.value = "";
        console.log(jokes);
        render_array(jokes);
    });
}
function render_array(jokes2) {
    var print_to_screen = document.getElementById("print_to_screen");
    if (!print_to_screen)
        return console.error();
    print_to_screen.innerHTML = "";
    jokes2.forEach(function (x) {
        print_to_screen.innerHTML += "<div id=\"joke\"> <br>\" + " < h1 > the;
        joke;
        is: $;
        {
            x.joke;
        }
        /h1>` + `<h2>from catagory: ${x.catagory}</h2 >
            onclick;
        "delete_array(${x.id})" > Delete < /button>`})};;
        function delete_array(id) {
            var i_deleted = jokes.findIndex(function (x) { return x.id === id; });
            if (i_deleted === -1)
                return console.error();
            jokes.splice(i_deleted, 1);
            render_array(jokes);
        }
    });
}
