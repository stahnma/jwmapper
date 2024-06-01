// Description:
//   Responds with the output of an external command when it hears "where is james".
//
// Commands:
//   hubot where is james - Runs the external command and responds with its output.

const { exec } = require('child_process');

module.exports = (robot) => {
  robot.hear(/^where\s?(the\s?(heck|fuck)\s?)?is\s?james\s?white/i, (res) => {
    const command = "maps/1.py";

    exec(command, (error, stdout, stderr) => {
      if (error) {
        res.send(`There was an error: ${stderr}`);
      } else {
        res.send(stdout);
      }
    });
  });
};
