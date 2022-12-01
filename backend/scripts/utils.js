const exec = require("child_process").execSync

// factory
const args = (msg = "scripted") => (
    console.log(msg),
    process.argv.slice(2).reduce(
        (a, c) => {
            const kv = c.split("=")
            return { ...a, [kv[0]]: kv[1] }
        },
        { job: null, msg }
    )
)

module.exports = {
    exec,
    args,
}
