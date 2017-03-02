### 目录结构
```javascript
    // 创建文件及文件夹
        E:\fullStack>mkdir github-notetaker
        E:\fullStack>cd github-notetaker
        E:\fullStack\github-notetaker>git init
        Initialized empty Git repository in E:/fullStack/github-notetaker/.git/
        E:\fullStack\github-notetaker>touch .gitignore READEM.md
        E:\fullStack\github-notetaker>touch webpack.config.js .babelrc
        E:\fullStack\github-notetaker>mkdir src dist
        E:\fullStack\github-notetaker>cd src
        E:\fullStack\github-notetaker\src>touch app.js index.html

    // ls 查看文件及文件夾
        $ ll
        total 0
        drwxr-xr-x 1 Administrator 197121 0 3月   2 10:55 dist/
        -rw-r--r-- 1 Administrator 197121 0 3月   2 10:54 READEM.md
        drwxr-xr-x 1 Administrator 197121 0 3月   2 10:55 src/
        -rw-r--r-- 1 Administrator 197121 0 3月   2 10:54 webpack.config.js

    // ls 查看文件及文件夾
        $ ls
        dist/  READEM.md  src/  webpack.config.js

    // ls 查看文件及文件夾
        $ ll
        total 0
        drwxr-xr-x 1 Administrator 197121 0 3月   2 10:55 dist/
        -rw-r--r-- 1 Administrator 197121 0 3月   2 10:54 READEM.md
        drwxr-xr-x 1 Administrator 197121 0 3月   2 10:55 src/
        -rw-r--r-- 1 Administrator 197121 0 3月   2 10:54 webpack.config.js

    // ls 查看更详细的文件
        $ ls -all
        total 12
        drwxr-xr-x 1 Administrator 197121 0 3月   2 10:55 ./
        drwxr-xr-x 1 Administrator 197121 0 3月   2 10:53 ../
        -rw-r--r-- 1 Administrator 197121 0 3月   2 10:54 .babelrc
        drwxr-xr-x 1 Administrator 197121 0 3月   2 10:53 .git/
        -rw-r--r-- 1 Administrator 197121 0 3月   2 10:54 .gitignore
        drwxr-xr-x 1 Administrator 197121 0 3月   2 10:55 dist/
        -rw-r--r-- 1 Administrator 197121 0 3月   2 10:54 READEM.md
        drwxr-xr-x 1 Administrator 197121 0 3月   2 10:55 src/
        -rw-r--r-- 1 Administrator 197121 0 3月   2 10:54 webpack.config.js



    // 初始化 package.json 文件
        Administrator@PC-20160308OHEC MINGW64 /e/fullStack/github-notetaker (master)
        $ npm init
        This utility will walk you through creating a package.json file.
        It only covers the most common items, and tries to guess sensible defaults.

        See `npm help json` for definitive documentation on these fields
        and exactly what they do.

        Use `npm install <pkg> --save` afterwards to install a package and
        save it as a dependency in the package.json file.

        Press ^C at any time to quit.
        name: (github-notetaker)
        version: (1.0.0)
        description:
        entry point: (webpack.config.js)
        test command:
        git repository:
        keywords:
        author: Alan
        license: (ISC) MIT
        About to write to E:\fullStack\github-notetaker\package.json:

        {
          "name": "github-notetaker",
          "version": "1.0.0",
          "description": "",
          "main": "webpack.config.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "author": "Alan",
          "license": "MIT"
        }
        Is this ok? (yes) yes

    // ls 查看文件及文件夾
        Administrator@PC-20160308OHEC MINGW64 /e/fullStack/github-notetaker (master)
        $ ls
        dist/  package.json  READEM.md  src/  webpack.config.js

    // ls 查看更详细
        Administrator@PC-20160308OHEC MINGW64 /e/fullStack/github-notetaker (master)
        $ ls -all
        total 17
        drwxr-xr-x 1 Administrator 197121    0 3月   2 11:03 ./
        drwxr-xr-x 1 Administrator 197121    0 3月   2 10:53 ../
        -rw-r--r-- 1 Administrator 197121    0 3月   2 10:54 .babelrc
        drwxr-xr-x 1 Administrator 197121    0 3月   2 10:53 .git/
        -rw-r--r-- 1 Administrator 197121    0 3月   2 10:54 .gitignore
        drwxr-xr-x 1 Administrator 197121    0 3月   2 10:55 dist/
        -rw-r--r-- 1 Administrator 197121  242 3月   2 11:04 package.json
        -rw-r--r-- 1 Administrator 197121 1773 3月   2 11:00 READEM.md
        drwxr-xr-x 1 Administrator 197121    0 3月   2 10:55 src/
        -rw-r--r-- 1 Administrator 197121    0 3月   2 10:54 webpack.config.js



     // 下载开发文件
        》分别下载以下文件
            # 打包编译工具
                webpack            
                webpack-dev-server
                babel-loader
                babel-core
                babel-preset-es2015
                》下载方法
                    注意：如果批量不能一下载，就两个或者一个一个的下载
                    如： yarn add webpack webpack-dev-server --save-dev
                    //  yarn 下载 打包及编译工具
                    $ yarn add webpack webpack-dev-server babel-loader babel-core babel-preset-react babel-preset-es2015 --save-dev

                    /*
                     安装后的结果：
                        $ yarn add webpack webpack-dev-server babel-loader babel-core babel-preset-react babel-preset-es2015 --save-dev                                               
                        yarn add v0.21.3
                        info No lockfile found.
                        [1/4] Resolving packages...
                        [2/4] Fetching packages...
                        warning fsevents@1.1.1: The platform "win32" is incompatible with this module.
                        info "fsevents@1.1.1" is an optional dependency and failed compatibility check. Excluding it from installation.
                        [3/4] Linking dependencies...
                        warning "webpack-dev-middleware@1.10.1" has unmet peer dependency "webpack@1 || ^2.1.0-beta || ^2.2.0-rc.0".
                        warning "ajv-keywords@1.5.1" has unmet peer dependency "ajv@>=4.10.0".
                        warning "webpack-dev-server@2.4.1" has unmet peer dependency "webpack@^2.2.0".
                        warning "babel-loader@6.3.2" has unmet peer dependency "babel-core@^6.0.0".
                        warning "babel-loader@6.3.2" has unmet peer dependency "webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc".
                        [4/4] Building fresh packages...
                        success Saved lockfile.
                        success Saved 365 new dependencies.
                        ├─ accepts@1.3.3
                        ├─ acorn-dynamic-import@2.0.2
                        ├─ acorn@4.0.11
                        ├─ ajv-keywords@1.5.1
                        ├─ ajv@4.11.3
                        ├─ align-text@0.1.4
                        ├─ ansi-html@0.0.7
                        ├─ ansi-regex@2.1.1
                        ├─ ansi-styles@2.2.1
                        ├─ anymatch@1.3.0
                        ├─ arr-diff@2.0.0
                        ├─ arr-flatten@1.0.1
                        ├─ array-flatten@1.1.1
                        ├─ array-unique@0.2.1
                        ├─ arrify@1.0.1
                        ├─ asn1.js@4.9.1
                        ├─ assert-plus@1.0.0
                        ├─ assert@1.4.1
                        ├─ async-each@1.0.1
                        ├─ async@2.1.5
                        ├─ babel-code-frame@6.22.0
                        ├─ babel-core@6.23.1
                        ├─ babel-generator@6.23.0
                        ├─ babel-helper-builder-react-jsx@6.23.0
                        ├─ babel-helper-call-delegate@6.22.0
                        ├─ babel-helper-define-map@6.23.0
                        ├─ babel-helper-function-name@6.23.0
                        ├─ babel-helper-get-function-arity@6.22.0
                        ├─ babel-helper-hoist-variables@6.22.0
                        ├─ babel-helper-optimise-call-expression@6.23.0
                        ├─ babel-helper-regex@6.22.0
                        ├─ babel-helper-replace-supers@6.23.0
                        ├─ babel-helpers@6.23.0
                        ├─ babel-loader@6.3.2
                        ├─ babel-messages@6.23.0
                        ├─ babel-plugin-check-es2015-constants@6.22.0
                        ├─ babel-plugin-syntax-flow@6.18.0
                        ├─ babel-plugin-syntax-jsx@6.18.0
                        ├─ babel-plugin-transform-es2015-arrow-functions@6.22.0
                        ├─ babel-plugin-transform-es2015-block-scoped-functions@6.22.0
                        ├─ babel-plugin-transform-es2015-block-scoping@6.23.0
                        ├─ babel-plugin-transform-es2015-classes@6.23.0
                        ├─ babel-plugin-transform-es2015-computed-properties@6.22.0
                        ├─ babel-plugin-transform-es2015-destructuring@6.23.0
                        ├─ babel-plugin-transform-es2015-duplicate-keys@6.22.0
                        ├─ babel-plugin-transform-es2015-for-of@6.23.0
                        ├─ babel-plugin-transform-es2015-function-name@6.22.0
                        ├─ babel-plugin-transform-es2015-literals@6.22.0
                        ├─ babel-plugin-transform-es2015-modules-amd@6.22.0
                        ├─ babel-plugin-transform-es2015-modules-commonjs@6.23.0
                        ├─ babel-plugin-transform-es2015-modules-systemjs@6.23.0
                        ├─ babel-plugin-transform-es2015-modules-umd@6.23.0
                        ├─ babel-plugin-transform-es2015-object-super@6.22.0
                        ├─ babel-plugin-transform-es2015-parameters@6.23.0
                        ├─ babel-plugin-transform-es2015-shorthand-properties@6.22.0
                        ├─ babel-plugin-transform-es2015-spread@6.22.0
                        ├─ babel-plugin-transform-es2015-sticky-regex@6.22.0
                        ├─ babel-plugin-transform-es2015-template-literals@6.22.0
                        ├─ babel-plugin-transform-es2015-typeof-symbol@6.23.0
                        ├─ babel-plugin-transform-es2015-unicode-regex@6.22.0
                        ├─ babel-plugin-transform-flow-strip-types@6.22.0
                        ├─ babel-plugin-transform-react-display-name@6.23.0
                        ├─ babel-plugin-transform-react-jsx-self@6.22.0
                        ├─ babel-plugin-transform-react-jsx-source@6.22.0
                        ├─ babel-plugin-transform-react-jsx@6.23.0
                        ├─ babel-plugin-transform-regenerator@6.22.0
                        ├─ babel-plugin-transform-strict-mode@6.22.0
                        ├─ babel-preset-es2015@6.22.0
                        ├─ babel-preset-flow@6.23.0
                        ├─ babel-preset-react@6.23.0
                        ├─ babel-register@6.23.0
                        ├─ babel-runtime@6.23.0
                        ├─ babel-template@6.23.0
                        ├─ babel-traverse@6.23.1
                        ├─ babel-types@6.23.0
                        ├─ babylon@6.16.1
                        ├─ balanced-match@0.4.2
                        ├─ base64-js@1.2.0
                        ├─ batch@0.5.3
                        ├─ big.js@3.1.3
                        ├─ binary-extensions@1.8.0
                        ├─ bn.js@4.11.6
                        ├─ brace-expansion@1.1.6
                        ├─ braces@1.8.5
                        ├─ brorand@1.1.0
                        ├─ browserify-aes@1.0.6
                        ├─ browserify-cipher@1.0.0
                        ├─ browserify-des@1.0.0
                        ├─ browserify-rsa@4.0.1
                        ├─ browserify-sign@4.0.0
                        ├─ browserify-zlib@0.1.4
                        ├─ buffer-shims@1.0.0
                        ├─ buffer-xor@1.0.3
                        ├─ buffer@4.9.1
                        ├─ builtin-modules@1.1.1
                        ├─ builtin-status-codes@3.0.0
                        ├─ bytes@2.3.0
                        ├─ camelcase@3.0.0
                        ├─ center-align@0.1.3
                        ├─ chalk@1.1.3
                        ├─ chokidar@1.6.1
                        ├─ cipher-base@1.0.3
                        ├─ cliui@3.2.0
                        ├─ co@4.6.0
                        ├─ code-point-at@1.1.0
                        ├─ commondir@1.0.1
                        ├─ compressible@2.0.9
                        ├─ compression@1.6.2
                        ├─ concat-map@0.0.1
                        ├─ connect-history-api-fallback@1.3.0
                        ├─ console-browserify@1.1.0
                        ├─ constants-browserify@1.0.0
                        ├─ content-disposition@0.5.2
                        ├─ content-type@1.0.2
                        ├─ convert-source-map@1.4.0
                        ├─ cookie-signature@1.0.6
                        ├─ cookie@0.3.1
                        ├─ core-js@2.4.1
                        ├─ core-util-is@1.0.2
                        ├─ create-ecdh@4.0.0
                        ├─ create-hash@1.1.2
                        ├─ create-hmac@1.1.4
                        ├─ crypto-browserify@3.11.0
                        ├─ date-now@0.1.4
                        ├─ debug@2.6.1
                        ├─ decamelize@1.2.0
                        ├─ depd@1.1.0
                        ├─ des.js@1.0.0
                        ├─ destroy@1.0.4
                        ├─ detect-indent@4.0.0
                        ├─ diffie-hellman@5.0.2
                        ├─ domain-browser@1.1.7
                        ├─ ee-first@1.1.1
                        ├─ elliptic@6.4.0
                        ├─ emojis-list@2.1.0
                        ├─ encodeurl@1.0.1
                        ├─ enhanced-resolve@3.1.0
                        ├─ errno@0.1.4
                        ├─ error-ex@1.3.0
                        ├─ escape-html@1.0.3
                        ├─ escape-string-regexp@1.0.5
                        ├─ esutils@2.0.2
                        ├─ etag@1.8.0
                        ├─ eventemitter3@1.2.0
                        ├─ events@1.1.1
                        ├─ eventsource@0.1.6
                        ├─ evp_bytestokey@1.0.0
                        ├─ expand-brackets@0.1.5
                        ├─ expand-range@1.8.2
                        ├─ express@4.15.0
                        ├─ extglob@0.3.2
                        ├─ faye-websocket@0.10.0
                        ├─ filename-regex@2.0.0
                        ├─ fill-range@2.2.3
                        ├─ finalhandler@1.0.0
                        ├─ find-cache-dir@0.1.1
                        ├─ find-up@1.1.2
                        ├─ for-in@1.0.2
                        ├─ for-own@0.1.5
                        ├─ forwarded@0.1.0
                        ├─ fresh@0.5.0
                        ├─ get-caller-file@1.0.2
                        ├─ glob-base@0.3.0
                        ├─ glob-parent@2.0.0
                        ├─ globals@9.16.0
                        ├─ graceful-fs@4.1.11
                        ├─ handle-thing@1.2.5
                        ├─ has-ansi@2.0.0
                        ├─ has-flag@1.0.0
                        ├─ hash.js@1.0.3
                        ├─ hmac-drbg@1.0.0
                        ├─ home-or-tmp@2.0.0
                        ├─ hosted-git-info@2.2.0
                        ├─ hpack.js@2.1.6
                        ├─ html-entities@1.2.0
                        ├─ http-deceiver@1.2.7
                        ├─ http-errors@1.5.1
                        ├─ http-proxy-middleware@0.17.3
                        ├─ http-proxy@1.16.2
                        ├─ https-browserify@0.0.1
                        ├─ ieee754@1.1.8
                        ├─ indexof@0.0.1
                        ├─ inherits@2.0.3
                        ├─ interpret@1.0.1
                        ├─ invariant@2.2.2
                        ├─ invert-kv@1.0.0
                        ├─ ipaddr.js@1.2.0
                        ├─ is-arrayish@0.2.1
                        ├─ is-binary-path@1.0.1
                        ├─ is-buffer@1.1.4
                        ├─ is-builtin-module@1.0.0
                        ├─ is-dotfile@1.0.2
                        ├─ is-equal-shallow@0.1.3
                        ├─ is-extendable@0.1.1
                        ├─ is-extglob@1.0.0
                        ├─ is-finite@1.0.2
                        ├─ is-fullwidth-code-point@1.0.0
                        ├─ is-glob@2.0.1
                        ├─ is-number@2.1.0
                        ├─ is-posix-bracket@0.1.1
                        ├─ is-primitive@2.0.0
                        ├─ is-utf8@0.2.1
                        ├─ isarray@1.0.0
                        ├─ isobject@2.1.0
                        ├─ js-tokens@3.0.1
                        ├─ jsesc@1.3.0
                        ├─ json-loader@0.5.4
                        ├─ json-stable-stringify@1.0.1
                        ├─ json3@3.3.2
                        ├─ json5@0.5.1
                        ├─ jsonify@0.0.0
                        ├─ kind-of@3.1.0
                        ├─ lazy-cache@1.0.4
                        ├─ lcid@1.0.0
                        ├─ load-json-file@1.1.0
                        ├─ loader-runner@2.3.0
                        ├─ loader-utils@0.2.17
                        ├─ lodash@4.17.4
                        ├─ longest@1.0.1
                        ├─ loose-envify@1.3.1
                        ├─ media-typer@0.3.0
                        ├─ memory-fs@0.4.1
                        ├─ merge-descriptors@1.0.1
                        ├─ methods@1.1.2
                        ├─ micromatch@2.3.11
                        ├─ miller-rabin@4.0.0
                        ├─ mime-db@1.26.0
                        ├─ mime-types@2.1.14
                        ├─ mime@1.3.4
                        ├─ minimalistic-assert@1.0.0
                        ├─ minimalistic-crypto-utils@1.0.1
                        ├─ minimatch@3.0.3
                        ├─ minimist@0.0.8
                        ├─ mkdirp@0.5.1
                        ├─ ms@0.7.2
                        ├─ negotiator@0.6.1
                        ├─ node-libs-browser@2.0.0
                        ├─ normalize-package-data@2.3.5
                        ├─ normalize-path@2.0.1
                        ├─ number-is-nan@1.0.1
                        ├─ object-assign@4.1.1
                        ├─ object.omit@2.0.1
                        ├─ obuf@1.1.1
                        ├─ on-finished@2.3.0
                        ├─ on-headers@1.0.1
                        ├─ opn@4.0.2
                        ├─ original@1.0.0
                        ├─ os-browserify@0.2.1
                        ├─ os-homedir@1.0.2
                        ├─ os-locale@1.4.0
                        ├─ os-tmpdir@1.0.2
                        ├─ pako@0.2.9
                        ├─ parse-asn1@5.0.0
                        ├─ parse-glob@3.0.4
                        ├─ parse-json@2.2.0
                        ├─ parseurl@1.3.1
                        ├─ path-browserify@0.0.0
                        ├─ path-exists@2.1.0
                        ├─ path-is-absolute@1.0.1
                        ├─ path-to-regexp@0.1.7
                        ├─ path-type@1.1.0
                        ├─ pbkdf2@3.0.9
                        ├─ pify@2.3.0
                        ├─ pinkie-promise@2.0.1
                        ├─ pinkie@2.0.4
                        ├─ pkg-dir@1.0.0
                        ├─ portfinder@1.0.13
                        ├─ preserve@0.2.0
                        ├─ private@0.1.7
                        ├─ process-nextick-args@1.0.7
                        ├─ process@0.11.9
                        ├─ proxy-addr@1.1.3
                        ├─ prr@0.0.0
                        ├─ public-encrypt@4.0.0
                        ├─ punycode@1.4.1
                        ├─ qs@6.3.1
                        ├─ querystring-es3@0.2.1
                        ├─ querystring@0.2.0
                        ├─ querystringify@0.0.4
                        ├─ randomatic@1.1.6
                        ├─ randombytes@2.0.3
                        ├─ range-parser@1.2.0
                        ├─ read-pkg-up@1.0.1
                        ├─ read-pkg@1.1.0
                        ├─ readable-stream@2.2.3
                        ├─ readdirp@2.1.0
                        ├─ regenerate@1.3.2
                        ├─ regenerator-runtime@0.10.3
                        ├─ regenerator-transform@0.9.8
                        ├─ regex-cache@0.4.3
                        ├─ regexpu-core@2.0.0
                        ├─ regjsgen@0.2.0
                        ├─ regjsparser@0.1.5
                        ├─ repeat-element@1.1.2
                        ├─ repeat-string@1.6.1
                        ├─ repeating@2.0.1
                        ├─ require-directory@2.1.1
                        ├─ require-main-filename@1.0.1
                        ├─ requires-port@1.0.0
                        ├─ right-align@0.1.3
                        ├─ ripemd160@1.0.1
                        ├─ select-hose@2.0.0
                        ├─ semver@5.3.0
                        ├─ send@0.15.0
                        ├─ serve-index@1.8.0
                        ├─ serve-static@1.12.0
                        ├─ set-blocking@2.0.0
                        ├─ set-immediate-shim@1.0.1
                        ├─ setimmediate@1.0.5
                        ├─ setprototypeof@1.0.3
                        ├─ sha.js@2.4.8
                        ├─ slash@1.0.0
                        ├─ sockjs-client@1.1.2
                        ├─ sockjs@0.3.18
                        ├─ source-list-map@0.1.8
                        ├─ source-map-support@0.4.11
                        ├─ source-map@0.5.6
                        ├─ spdx-correct@1.0.2
                        ├─ spdx-expression-parse@1.0.4
                        ├─ spdx-license-ids@1.2.2
                        ├─ spdy-transport@2.0.18
                        ├─ spdy@3.4.4
                        ├─ statuses@1.3.1
                        ├─ stream-browserify@2.0.1
                        ├─ stream-http@2.6.3
                        ├─ string_decoder@0.10.31
                        ├─ string-width@1.0.2
                        ├─ strip-ansi@3.0.1
                        ├─ strip-bom@2.0.0
                        ├─ supports-color@3.2.3
                        ├─ tapable@0.2.6
                        ├─ timers-browserify@2.0.2
                        ├─ to-arraybuffer@1.0.1
                        ├─ to-fast-properties@1.0.2
                        ├─ trim-right@1.0.1
                        ├─ tty-browserify@0.0.0
                        ├─ type-is@1.6.14
                        ├─ uglify-js@2.8.4
                        ├─ uglify-to-browserify@1.0.2
                        ├─ unpipe@1.0.0
                        ├─ url-parse@1.1.8
                        ├─ url@0.11.0
                        ├─ util-deprecate@1.0.2
                        ├─ util@0.10.3
                        ├─ utils-merge@1.0.0
                        ├─ uuid@2.0.3
                        ├─ validate-npm-package-license@3.0.1
                        ├─ vary@1.1.0
                        ├─ vm-browserify@0.0.4
                        ├─ watchpack@1.3.1
                        ├─ wbuf@1.7.2
                        ├─ webpack-dev-middleware@1.10.1
                        ├─ webpack-dev-server@2.4.1
                        ├─ webpack-sources@0.1.4
                        ├─ webpack@2.2.1
                        ├─ websocket-driver@0.6.5
                        ├─ websocket-extensions@0.1.1
                        ├─ which-module@1.0.0
                        ├─ window-size@0.1.0
                        ├─ wordwrap@0.0.2
                        ├─ wrap-ansi@2.1.0
                        ├─ xtend@4.0.1
                        ├─ y18n@3.2.1
                        ├─ yargs-parser@4.2.1
                        └─ yargs@6.6.0
                        Done in 61.37s.

                     */




                》配置文件 E:\fullStack\github-notetaker\.babelrc
                      {
                          "presets":["react", "es2015"],
                          "plugins":[]
                      }




            # 开发框架下载
              react
              react-dom
              react-router
              》下载方法
                $ yarn add react react-dom react-router --save-dev
                /*
                    $ yarn add react react-dom react-router --save-dev
                    yarn add v0.21.3
                    [1/4] Resolving packages...
                    [2/4] Fetching packages...
                    warning fsevents@1.1.1: The platform "win32" is incompatible                                                                                                   with this module.
                    info "fsevents@1.1.1" is an optional dependency and failed c                                                                                                  ompatibility check. Excluding it from installation.
                    [3/4] Linking dependencies...
                    warning "react-dom@15.4.2" has unmet peer dependency "react@                                                                                                  ^15.4.2".
                    warning "react-router@3.0.2" has unmet peer dependency "reac                                                                                                  t@^0.14.0 || ^15.0.0".
                    [4/4] Building fresh packages...
                    success Saved lockfile.
                    success Saved 21 new dependencies.
                    ├─ asap@2.0.5
                    ├─ encoding@0.1.12
                    ├─ fbjs@0.8.9
                    ├─ history@3.3.0
                    ├─ hoist-non-react-statics@1.2.0
                    ├─ iconv-lite@0.4.15
                    ├─ invariant@2.2.2
                    ├─ is-stream@1.1.0
                    ├─ isomorphic-fetch@2.2.1
                    ├─ loose-envify@1.3.1
                    ├─ node-fetch@1.6.3
                    ├─ promise@7.1.1
                    ├─ query-string@4.3.2
                    ├─ react-dom@15.4.2
                    ├─ react-router@3.0.2
                    ├─ react@15.4.2
                    ├─ setimmediate@1.0.5
                    ├─ strict-uri-encode@1.1.0
                    ├─ ua-parser-js@0.7.12
                    ├─ warning@3.0.0
                    └─ whatwg-fetch@2.0.2
                    Done in 13.91s.

                 */



            # 配置文件 E:\fullStack\github-notetaker\webpack.config.js
                import path from "path";
                import webpack from "webpack";

                module.exports = {
                    // 输出文件
                    entry:path.join(__dirname, "./src/app.js"),     // 入口文件
                    output:{                                        // 输出后的产生的文件
                        path:path(__dirname, "dist"),               // 输出在的 dist 的文件夹
                        filename:"bundle.js"                        // 输出后产生的方件,可以随便命名成自己想要的文件
                    },
                    // 输出的时候
                    module:{
                        loaders:[
                            {
                                test:/\.jsx?$/,                     // 解析.jsx的文件，用正则匹配
                                loader:"babel",                     // loader 就是用我们的babel 来解析
                                exclude:/node_modules/              // exclude把一些不需要编译的文件，进行排除,不让它进行操作
                            }
                        ]
                    },
                    // 追加一个文件用 plugins
                    plugins:[

                    ]
                }


                》下载 追加的文件
                    $ npm install html-webpack-plugin --save-dev
                    // 推荐使用 yarn 下载
                    $ yarn add html-webpack-plugin --save-dev
                    /*
                        $ yarn add html-webpack-plugin --save-dev
                        yarn add v0.21.3
                        [1/4] Resolving packages...
                        [2/4] Fetching packages...
                        warning fsevents@1.1.1: The platform "win32" is incompatible                                                                                                   with this module.
                        info "fsevents@1.1.1" is an optional dependency and failed c                                                                                                  ompatibility check. Excluding it from installation.
                        [3/4] Linking dependencies...
                        [4/4] Building fresh packages...
                        success Saved lockfile.
                        success Saved 32 new dependencies.
                        ├─ bluebird@3.4.7
                        ├─ boolbase@1.0.0
                        ├─ camel-case@3.0.0
                        ├─ clean-css@4.0.8
                        ├─ commander@2.9.0
                        ├─ css-select@1.2.0
                        ├─ css-what@2.1.0
                        ├─ dom-converter@0.1.4
                        ├─ dom-serializer@0.1.0
                        ├─ domelementtype@1.3.0
                        ├─ domhandler@2.1.0
                        ├─ domutils@1.1.6
                        ├─ entities@1.1.1
                        ├─ he@1.1.1
                        ├─ html-minifier@3.4.0
                        ├─ html-webpack-plugin@2.28.0
                        ├─ htmlparser2@3.3.0
                        ├─ lodash@4.17.4
                        ├─ lower-case@1.1.4
                        ├─ ncname@1.0.0
                        ├─ no-case@2.3.1
                        ├─ nth-check@1.0.1
                        ├─ param-case@2.1.0
                        ├─ pretty-error@2.0.2
                        ├─ relateurl@0.2.7
                        ├─ renderkid@2.0.0
                        ├─ source-map@0.5.6
                        ├─ toposort@1.0.3
                        ├─ uglify-js@2.8.4
                        ├─ upper-case@1.1.3
                        ├─ utila@0.3.3
                        └─ xml-char-classes@1.0.0
                        Done in 9.87s.

                     */

                》 然后再把这个文件引入到 webpack.config.js 里面去进行配置
                    import path from "path";
                    import webpack from "webpack";
                    import htmlWebpackPlugin from "html-webpack-plugin";

                    module.exports = {
                        // 输出文件
                        entry:path.join(__dirname, "./src/app.js"),     // 入口文件
                        output:{                                        // 输出后的产生的文件
                            path:path(__dirname, "dist"),               // 输出在的 dist 的文件夹
                            filename:"bundle.js"                        // 输出后产生的方件,可以随便命名成自己想要的文件
                        },
                        // 输出的时候
                        module:{
                            loaders:[
                                {
                                    test:/\.jsx?$/,                     // 解析.jsx的文件，用正则匹配
                                    loader:"babel",                     // loader 就是用我们的babel 来解析
                                    exclude:/node_modules/              // exclude把一些不需要编译的文件，进行排除,不让它进行操作
                                }
                            ]
                        },
                        // 追加一个文件用 plugins
                        plugins:[
                            new htmlWebpackPlugin({
                                template:path.join(__dirname, "./src/index.html")
                            });
                        ]
                    }


        ## 创建一个html的文件 E:\fullStack\github-notetaker\src\index.html
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
                <div id="app"></div>
            </body>
            </html>


        ## 打开之前创建好的app.js文件，进行引入一些组件
            import React, {Component} from "react";
            import {render} from "react-dom";

            class App extends Component{
                constructor () {

                }

                render () {
                    return (
                        <p>Hello github noteaker.</p>
                    )
                }
            }




            /*
            TODO: 配置好的文件
            E:\fullStack\github-notetaker\webpack.config.js
            import path from "path";
            import webpack from "webpack";
            import htmlWebpackPlugin from "html-webpack-plugin";
            */
            let path =  require("path");
            let webpack =  require("webpack");
            let htmlWebpackPlugin =  require("html-webpack-plugin");

            module.exports = {
                // 输出文件
                entry:path.join(__dirname, "./src/app.js"),     // 入口文件
                output:{                                        // 输出后的产生的文件
                    path:path(__dirname, "dist"),               // 输出在的 dist 的文件夹
                    filename:"bundle.js"                        // 输出后产生的方件,可以随便命名成自己想要的文件
                },
                // 输出的时候
                module:{
                    loaders:[
                        {
                            test:/\.jsx?$/,                     // 解析.jsx的文件，用正则匹配
                            loader:"babel",                     // loader 就是用我们的babel 来解析
                            exclude:/node_modules/              // exclude把一些不需要编译的文件，进行排除,不让它进行操作
                        }
                    ]
                },
                // 追加一个文件用 plugins
                plugins:[
                    new htmlWebpackPlugin({
                        template:path.join(__dirname, "./src/index.html")
                    })
                ]
            }

            // 最后执行 npm run build










```
