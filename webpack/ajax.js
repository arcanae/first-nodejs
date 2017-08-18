    function disImg(ajax) {
        let arr = new Uint8Array(ajax.response);
        let raw = String.fromCharCode.apply(null, arr);
        document.body.innerHTML += "<img alt='lol' src='data:image/jpg;base64," + btoa(raw) + "'>";
        add_event();
    }

    function new_ajax_img(url, cb) {
        let ajax = new XMLHttpRequest();
        ajax.open('GET', url, true);
        ajax.responseType = 'arraybuffer';
        ajax.send();
        console.log(ajax);
        ajax.addEventListener("readystatechange", function() {
            if (this.readyState === 4 && this.status === 200) {
                cb(this);
            }
        });
    }

    function new_ajax_txt(url, loc, type) {
        let ajax = new XMLHttpRequest();
        ajax.open('GET', url, true);
        ajax.send();
        ajax.addEventListener("readystatechange", function() {
            if (this.readyState === 4 && this.status === 200) {
                let test = loc + type;
                if (type === 'tc') {
                    loc.textContent += ajax.response;
                } else if (type === 'ih') {
                    loc.innerHTML += ajax.response;
                }

            }
        });
    }

    function new_ajax_json(url) {
        let ajax = new XMLHttpRequest();
        ajax.open('GET', url, true);
        ajax.send();
        ajax.addEventListener("readystatechange", function() {
            if (this.readyState === 4 && this.status === 200) {
                let json = JSON.parse(ajax.response)
                for (let value in json) {
                    document.querySelector("#list").innerHTML += '<li>Nom : <b>' + json[value]['name'] + '</b>, race : <i>' + json[value]['race'] + '</i>.';
                }
            }
        });
    }

    function eval_evil(url) {
        let ajax = new XMLHttpRequest();
        ajax.open('GET', url, true);
        ajax.send();
        ajax.addEventListener("readystatechange", function() {
            if (this.readyState === 4 && this.status === 200) {
                eval(ajax.response);
            }
        });
    }

    add_event();

    function add_event() {
        document.querySelector("#but1").addEventListener("click", function() {
            console.log('a');
            new_ajax_img("gel.png", disImg);
        });

        document.querySelector("#but2").addEventListener("click", function() {
            console.log('b');
            new_ajax_txt("test.txt", document.querySelector("#txt"), 'tc');
            new_ajax_txt("snippet.html", document.querySelector("#snippet"), 'ih');
        });

        document.querySelector("#but3").addEventListener("click", function() {
            new_ajax_json('data.json');
        });

        document.querySelector("#but4").addEventListener("click", function() {
            eval_evil("evil.js");
        });
    }