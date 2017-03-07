
```javascript

// 第1步：
    $ atom ./


// 第2步：
    $ mkdir github-notetaker

// 第3步：
    $ cd github-notetaker/

// 第4步：全局安装yarn
    $ npm install yarn -g
    C:\Users\CJLEU\AppData\Roaming\npm\yarn -> C:\Users\CJLEU\AppData\Roaming\npm\no                                                                                                                                  de_modules\yarn\bin\yarn.js
    C:\Users\CJLEU\AppData\Roaming\npm\yarnpkg -> C:\Users\CJLEU\AppData\Roaming\npm                                                                                                                                  \node_modules\yarn\bin\yarn.js
    - diff@2.2.3 node_modules\yarn\node_modules\diff
    - user-home@2.0.0 node_modules\yarn\node_modules\user-home
    C:\Users\CJLEU\AppData\Roaming\npm
    `-- yarn@0.21.3
      +-- inquirer@3.0.5
      `-- object-path@0.11.4


// 第5步： 本地环境安装 yarn
    $ npm install yarn -save-dev
    npm WARN saveError ENOENT: no such file or directory, open 'E:\fullStack\github-                                                                                                                                  notetaker\package.json'
    E:\fullStack\github-notetaker
    `-- yarn@0.21.3
      +-- babel-runtime@6.23.0
      | +-- core-js@2.4.1
      | `-- regenerator-runtime@0.10.3
      +-- bytes@2.4.0
      +-- camelcase@3.0.0
      +-- chalk@1.1.3
      | +-- ansi-styles@2.2.1
      | +-- escape-string-regexp@1.0.5
      | +-- has-ansi@2.0.0
      | | `-- ansi-regex@2.1.1
      | +-- strip-ansi@3.0.1
      | `-- supports-color@2.0.0
      +-- cmd-shim@2.0.2
      | `-- graceful-fs@4.1.11
      +-- commander@2.9.0
      | `-- graceful-readlink@1.0.1
      +-- death@1.1.0
      +-- debug@2.6.1
      | `-- ms@0.7.2
      +-- defaults@1.0.3
      | `-- clone@1.0.2
      +-- detect-indent@5.0.0
      +-- ini@1.3.4
      +-- inquirer@3.0.5
      | +-- ansi-escapes@1.4.0
      | +-- cli-cursor@2.1.0
      | | `-- restore-cursor@2.0.0
      | |   `-- onetime@2.0.0
      | |     `-- mimic-fn@1.1.0
      | +-- cli-width@2.1.0
      | +-- external-editor@2.0.1
      | | `-- tmp@0.0.31
      | +-- figures@2.0.0
      | +-- lodash@4.17.4
      | +-- mute-stream@0.0.7
      | +-- run-async@2.3.0
      | | `-- is-promise@2.1.0
      | +-- rx@4.1.0
      | +-- string-width@2.0.0
      | | `-- is-fullwidth-code-point@2.0.0
      | `-- through@2.3.8
      +-- invariant@2.2.2
      | `-- loose-envify@1.3.1
      |   `-- js-tokens@3.0.1
      +-- is-builtin-module@1.0.0
      | `-- builtin-modules@1.1.1
      +-- is-ci@1.0.10
      | `-- ci-info@1.0.0
      +-- leven@2.1.0
      +-- loud-rejection@1.6.0
      | +-- currently-unhandled@0.4.1
      | | `-- array-find-index@1.0.2
      | `-- signal-exit@3.0.2
      +-- minimatch@3.0.3
      | `-- brace-expansion@1.1.6
      |   +-- balanced-match@0.4.2
      |   `-- concat-map@0.0.1
      +-- mkdirp@0.5.1
      | `-- minimist@0.0.8
      +-- node-emoji@1.5.1
      | `-- string.prototype.codepointat@0.2.0
      +-- node-gyp@3.5.0
      | +-- fstream@1.0.10
      | +-- glob@7.1.1
      | | +-- fs.realpath@1.0.0
      | | +-- inflight@1.0.6
      | | | `-- wrappy@1.0.2
      | | +-- once@1.4.0
      | | `-- path-is-absolute@1.0.1
      | +-- nopt@3.0.6
      | | `-- abbrev@1.1.0
      | +-- npmlog@4.0.2
      | | +-- are-we-there-yet@1.1.2
      | | | `-- delegates@1.0.0
      | | +-- console-control-strings@1.1.0
      | | +-- gauge@2.7.3
      | | | +-- aproba@1.1.1
      | | | +-- has-unicode@2.0.1
      | | | +-- object-assign@4.1.1
      | | | +-- string-width@1.0.2
      | | | | +-- code-point-at@1.1.0
      | | | | `-- is-fullwidth-code-point@1.0.0
      | | | |   `-- number-is-nan@1.0.1
      | | | `-- wide-align@1.1.0
      | | |   `-- string-width@1.0.2
      | | |     `-- is-fullwidth-code-point@1.0.0
      | | `-- set-blocking@2.0.0
      | +-- osenv@0.1.4
      | | +-- os-homedir@1.0.2
      | | `-- os-tmpdir@1.0.2
      | `-- which@1.2.12
      |   `-- isexe@1.1.2
      +-- object-path@0.11.4
      +-- proper-lockfile@2.0.0
      | `-- retry@0.10.1
      +-- read@1.0.7
      +-- request@2.79.0
      | +-- aws-sign2@0.6.0
      | +-- aws4@1.6.0
      | +-- caseless@0.11.0
      | +-- combined-stream@1.0.5
      | | `-- delayed-stream@1.0.0
      | +-- extend@3.0.0
      | +-- forever-agent@0.6.1
      | +-- form-data@2.1.2
      | | `-- asynckit@0.4.0
      | +-- har-validator@2.0.6
      | | +-- is-my-json-valid@2.16.0
      | | | +-- generate-function@2.0.0
      | | | +-- generate-object-property@1.2.0
      | | | | `-- is-property@1.0.2
      | | | `-- jsonpointer@4.0.1
      | | `-- pinkie-promise@2.0.1
      | |   `-- pinkie@2.0.4
      | +-- hawk@3.1.3
      | | +-- boom@2.10.1
      | | +-- cryptiles@2.0.5
      | | +-- hoek@2.16.3
      | | `-- sntp@1.0.9
      | +-- http-signature@1.1.1
      | | +-- assert-plus@0.2.0
      | | +-- jsprim@1.3.1
      | | | +-- extsprintf@1.0.2
      | | | +-- json-schema@0.2.3
      | | | `-- verror@1.3.6
      | | `-- sshpk@1.10.2
      | |   +-- asn1@0.2.3
      | |   +-- assert-plus@1.0.0
      | |   +-- bcrypt-pbkdf@1.0.1
      | |   +-- dashdash@1.14.1
      | |   | `-- assert-plus@1.0.0
      | |   +-- ecc-jsbn@0.1.1
      | |   +-- getpass@0.1.6
      | |   | `-- assert-plus@1.0.0
      | |   +-- jodid25519@1.0.2
      | |   +-- jsbn@0.1.1
      | |   `-- tweetnacl@0.14.5
      | +-- is-typedarray@1.0.0
      | +-- isstream@0.1.2
      | +-- json-stringify-safe@5.0.1
      | +-- mime-types@2.1.14
      | | `-- mime-db@1.26.0
      | +-- oauth-sign@0.8.2
      | +-- qs@6.3.1
      | +-- stringstream@0.0.5
      | +-- tough-cookie@2.3.2
      | | `-- punycode@1.4.1
      | +-- tunnel-agent@0.4.3
      | `-- uuid@3.0.1
      +-- request-capture-har@1.1.4
      +-- rimraf@2.6.1
      +-- roadrunner@1.1.0
      +-- semver@5.3.0
      +-- strip-bom@3.0.0
      +-- tar@2.2.1
      | +-- block-stream@0.0.9
      | `-- inherits@2.0.3
      +-- tar-stream@1.5.2
      | +-- bl@1.2.0
      | +-- end-of-stream@1.1.0
      | | `-- once@1.3.3
      | +-- readable-stream@2.2.3
      | | +-- buffer-shims@1.0.0
      | | +-- core-util-is@1.0.2
      | | +-- isarray@1.0.0
      | | +-- process-nextick-args@1.0.7
      | | +-- string_decoder@0.10.31
      | | `-- util-deprecate@1.0.2
      | `-- xtend@4.0.1
      `-- validate-npm-package-license@3.0.1
        +-- spdx-correct@1.0.2
        | `-- spdx-license-ids@1.2.2
        `-- spdx-expression-parse@1.0.4

    npm WARN enoent ENOENT: no such file or directory, open 'E:\fullStack\github-not                                                                                                                                  etaker\package.json'
    npm WARN github-notetaker No description
    npm WARN github-notetaker No repository field.
    npm WARN github-notetaker No README data
    npm WARN github-notetaker No license field.

    // 第6步：
    $ yarn init -y
    yarn init v0.21.3
    warning The yes flag has been set. This will automatically answer yes to all que                                                                                                                                  stions which may have security implications.
    success Saved package.json
    Done in 0.53s.

    CJLEU@ThinkPadS3Yoga MINGW64 /e/fullStack/github-notetaker
    $
```


http://www.zhufengpeixun.cn/course/67/learn#lesson/1394http://www.zhufengpeixun.cn/course/67/learn#lesson/1394http://www.zhufengpeixun.cn/course/67/learn#lesson/1394
