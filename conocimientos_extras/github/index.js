const { Octokit, App, Action  } = require("octokit");
const octokit = new Octokit({ auth: `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`  });

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
// const {
//   data: { login  },
//   } = await octokit.rest.users.getAuthenticated();
//   console.log("Hello, %s", login);
// }
