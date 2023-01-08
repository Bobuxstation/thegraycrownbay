fetch("https://zeankundev.github.io/cdn/Store.json")
          .then((res) => {
            return res.json();
          })
          .then((data) => 
                    data.store.forEach(items => {
                        let gameList = document.getElementById("table");
                        let btn = document.createElement("tr");
                        gamename = "<div id='gamecard1'><h4>" + items.name + "</h4></div>";
                        gamedetails = "<div id='gamecard2'>" + items.summary + "</div>"
                        btn.innerHTML = "<td>" + gamename + "</td><td>" + gamedetails + "</td><td><a href='" + items.download + "'>Download</a></td>";
                        gameList.appendChild(btn);
                    })
                        );
