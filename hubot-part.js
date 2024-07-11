// Description:
//   Responds with the output of an external command when it hears "where is james".
//
// Commands:
//   where is james - Runs the external command and responds with its output.

const { exec } = require('child_process');

console.log("James module loaded");

module.exports = (robot) => {
    robot.hear(/^where\s?(the\s?(heck|fuck)\s?)?is\s?(@)?james(\.s\.)?\s?white/i, (res) => {

    // TODO Maybe make this an env var
    const command = "/var/lib/burrito/maps/1.py";

    exec(command, (error, stdout, stderr) => {
      if (error) {
        res.send(`There was an error: ${stderr}`);
      } else {
        res.send(stdout);
      }
    });
  });
};

