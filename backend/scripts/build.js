const { exec, args } = require("./utils")

const msg = "building cronJob"

const build = ({ job }) => {
    exec(
        `rm -rf amplify/backend/function/cronJob${job}/src/lib &&` +
            `cp -a dist amplify/backend/function/cronJob${job}/src/lib`,
        { stdio: [0, 1, 2] }
    )
}
build(args(msg))

// CLI use
// node scripts\types job=spool
