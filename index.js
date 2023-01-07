function get_user(name) {
    console.log(name);
    fetch(`/worker/user/${name}`)
    .then(response => response.json())
    .then(data => {
        var user = `Name: ${name} Tokens: ${data['user']['tokens']} EXP: ${data['user']['exp']}`;
        blacket.socket.send(
        JSON.stringify({
        	type: "chat",
            data: user
        }));
    })
    .catch(error => console.error(error))
}

blacket.socket.onmessage = (msg) => {
    msg = JSON.parse(msg.data);
    if (msg["type"] == "chat") {
        if (msg["message"].startsWith("$stats")) {
            setTimeout(() => {
    		    get_user(msg["message"].split(" ")[1]);
        	}, 1000);
    	}
    }
}
