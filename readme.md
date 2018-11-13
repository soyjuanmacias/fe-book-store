# FE Book Store

### Project configuration from scratch
- 📦 commitizen and 📦 cz-conventional-changelog for cli commit interface and as changelog auto create.
- 📦 standard-version for launch releases.
- 📦 husky to handle git hooks (pre-commit and commit-msg).
- 📦 @commitlint/cli and 📦 @commitlint/config-conventional for commit standard syntax,
- 📦 lint-staged with launch eslint and stylelint before each commit. If sintax is wrong you shouldn't be able to commit
- 📦 eslint-config-react-app 
- 📦 stylelint with google rules and className prefix (to avoid conflicts when we work with external libraries)
- 📦 webpack and 📦 webpack-cli (💾  with basic js config)
- 📦 babel with basic config and all babel dependencies
- 📦 react and 📦 react-dom 
-  Configuring webpack!
    * JS Loader
    * Resolve (for file extensions js, jsx)
    * Plugins -> HtmlWebPackPlugin (for render App in html root div)
    * Plugins -> MiniCssExtractPlugin (and rest of sass config)
- 📦 react-router-dom
- 📦 json-serve to create a fake localhost server acting like an API Restfull
- 📦 superagent for http requests

### [HELP] ¿How to commit with Commitizen?
* Stage files as always: `git add`
* Don't use `git commit`, instead, use `npm run commit` and commitizen will give you options.
* To launch release and update CHANGELOG.md run `npm run release`
