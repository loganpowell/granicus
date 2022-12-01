const { exec, args } = require("./utils")

const msg = "priming cronJobs for new `amplify push`"

const prime = ({ job }) => {
    exec(
        `rm -rf amplify/backend/function/cronJob${job}/src/index.js &&` +
            `rm -rf amplify/backend/function/cronJob${job}/src/package.json &&` +
            `rm -rf amplify/backend/function/cronJob${job}/dist &&` +
            //`rm -rf amplify/backend/function/cronJob${job}/src/node_modules &&` +
            `cp -a lambdas/${job}/index.js amplify/backend/function/cronJob${job}/src &&` +
            `cp -a lambdas/${job}/package.json amplify/backend/function/cronJob${job}/src/package.json"`,
        { stdio: [0, 1, 2] }
    )
}

prime(args(msg))

// CLI use
// node scripts\types job=spool
