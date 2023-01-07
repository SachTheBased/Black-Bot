function get_user(name) {
    console.log(name);
    fetch(`/worker/user/${name}`)
    .then(response => response.json())
    .then(data => {
        var user = `Name: ${name} Tokens: ${data['user']['tokens']} EXP: ${data['user']['exp']} Boxes Opened: ${data['user']['misc']['opened']} Messages: ${data['user']['misc']['messages']}`;
        blacket.socket.send(
        JSON.stringify({
        	type: "chat",
            data: user
        }));
    })
    .catch(error => console.error(error))
}

function get_blooks(name) {
    console.log(name);
    fetch(`/worker/user/${name}`)
    .then(response => response.json())
    .then(data => {
        var user = ``;

        for (const blook in data["user"]["blooks"]) {
            user += `${blook}: ${data["user"]["blooks"][blook]} `;
        }

        if (user.length > 1000) {
            user = "too long!!!"
        }
        
        blacket.socket.send(
        JSON.stringify({
        	type: "chat",
            data: user
        }));
    })
    .catch(error => console.error(error))
}

function help() {
    blacket.socket.send(
    JSON.stringify({
        type: "chat",
        data: "Help | $blooks [user] - shows user blooks | $stats [user] - shows user stats"
    }));
}

blacket.socket.onmessage = (msg) => {
    msg = JSON.parse(msg.data);
    if (msg["type"] == "chat") {
        if (msg["message"].startsWith("$stats")) {
            setTimeout(() => {
    		    get_user(msg["message"].split(" ")[1]);
        	}, 1000);
    	} else if (msg["message"].startsWith("$blooks")) {
            setTimeout(() => {
    		    get_blooks(msg["message"].split(" ")[1]);
        	}, 1000);
        } else if (msg["message"].startsWith("$help")) {
            setTimeout(() => {
                help();
            }, 1000);
        }
    }
}
