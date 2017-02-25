###### 课时1：git介绍
```javascript
    /*
    01.使用Git和Github来拉近和大牛的距离

    02. 介绍
        -GitHub是一个面向开源及私胡软件项目的插管平台，因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。

        -Git是一款免费，开源的分布式版本控制系统，用于敏捷高效的处理任何小域大的项目。

        -和大家一起熟悉GitHub和Git的基本使用

        -使用Git快速参与项目开发


    03. 跳上github这艘大船
        -基本的账号注册
        -找到些流行的开源框架项目、获取第一手资料
        -follow一些技术牛人，持续关注他们的动态，以及关注一些感兴趣的项目
        -创建仓库，以及github上可对项目的基本操作
        -未来是否你也有兴趣参与开源

     */
```
###### 课时2：github介绍
```javascript
    /*
    01. 介绍
        -GitHub是一个面向开源及私胡软件项目的插管平台，因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。

        -Git是一款免费，开源的分布式版本控制系统，用于敏捷高效的处理任何小域大的项目。

        -和大家一起熟悉GitHub和Git的基本使用

        -使用Git快速参与项目开发


    02. 跳上github这艘大船
        -基本的账号注册
        -找到些流行的开源框架项目、获取第一手资料
        -follow一些技术牛人，持续关注他们的动态，以及关注一些感兴趣的项目
        -创建仓库，以及github上可对项目的基本操作
        -未来是否你也有兴趣参与开源

     */

```
###### 课时3：git的基本操作
```javascript
    /*
    01. git安装和基本使用
        -下载:http://git-scm.com/downloads

        -基本的config
            -username & email

        -创建仓库
            -init or clone

        -git基本操作
            [enter image description here]
            (http://www.ruanyifeng.com/blogimg/asset/2015/bg2015120901.png)


            $ git --help                                    查看帮助文件，和如何使用
            $ git config --golbal user.name "cc"            配置全局用户名
            $ git config --golbal user.email "cc@sina.com"  配置全局用的邮箱  
            $ mkdir git-demos                                
            $ git init   
            $ ls   
            $ ls -al                                        查看文件列表
            $ git status                                    查看状态
            $ cd ../
            $ pwd                                           查看当前目录
            $ cd .git/                                      查看.git下面的目录文件
            $ touch index.html                              创建一个文件
            $ git add index.html                            把文件添加到暂存区
            $ git commit -m"描述"                           添加提交文件的说明
            $ git push origin master                        反文件提交到远程仓库上面去

            接下来就是要要求你输入你的用户名和密码

            在线文档：https://maxiang.io/#preview



     */
```
###### 课时4：github的远程操作
```javascript
    /*
     01.remte 运程操作

        在管理Git项目上，很多时候都是直接使用https url克隆到本地，当然也有、有些人使用SSH url克隆到本地。这两种方式的主要区别在于：

        -使用https url克隆对初学者来说会比较方便，复制https url然后到git Bash里面直接使用clone命令克隆到本地就好了，但是每次fetch和push代码都需要输入账号和密码，这也是https方式的麻烦之处。

        -而使用SSH url克隆却需要在克隆之前先配置和添加好SSH key，因此，如果你想使用SHH url克隆的话，你必须是这个项目的拥有者。否则你是无法添加SSH key的，另外ssh默认是每次fetch的push代码都不需要输入账号和密码。如果你想每次都输入账号密码才能进行fetch和push也可以另外进行设置



    公钥、私钥



    02.解决问题
        -git remote
            # 查看 remote
                $ git remote -v
            # 删除 remote
                $ git remote rm origin

            # 添加 remote
                $ git remote add origin https://github.com/practiceNotes/react-master.git

            #

        -ssh keys
        查看要地是否有 SSH Keys
            $ cd ~/.ssh    进入这个私钥的目录
            $ ls           查看文件列表
                id_rsa  id_rsa.pub  known_hosts
            $ cat id_rsa   查看这个私钥文件内容
                -----BEGIN RSA PRIVATE KEY-----
                MIIEogIBAAKCAQEAr0+jL8AgsQe7bBlVGqAMLHroaBQjd0kw1NDLhuUZuUimgYW6
                MBS0W6rHSCLOZUtMwRC7eFrNXn5G5f5J+fPbu1kPIzptBcUOMvbTfC6M/hlcveDg
                auwZ9rH4REPQOWjzNwRp9uz9Ihrj9ixjB0Fq6bqiCd2V4lcErMsumUfpLTstsF+1
                dX+B9rs9hF7Pp7T8wd5CLII7c11LtewxbMJWHyt/WrqkdnWgPrXk4I8zYGhbhEu8
                40OxbAga+VziqaG2x0QU2k4WHhsFJFBpCpwAYnzhldnatJlwHxU88QRZT724YtJ5
                gs8qXXNYxTCNULN7Y2uadh6tkHRJVYrv444x2QIDAQABAoIBAENKylTV5raNRT/l
                KWmi7YlVVEg/Eq4DBh9qVfVdk1YvsNoevq0eBWz6TKw/0AHJuZiSF6PHFvWiewxl
                Y3fyRvHO6aSYFKkWTrD5VYxhQfV3PsYTv5DLN9wdzDJH5XFj+5eutg32QeQJdl9U
                Al8SmTtGTFSFHbdXt4+sHiLwG20kmxiEwzlvFIJ5U5XANzPMXcItVr3nUG958Qo6
                7R/bZ7ZO5BQR4Ff7DlgCiEVKaSw7oAlCKjHWrWOV+NiOKDPTOoZDi0CpFe3c8c2e
                I4mLnYoCwvTwN6n7dvDBHiqrUcRYFm+5EXcJPBZkRdJ22X6JnU2brgL2g6sXSh9y
                5mwYyJECgYEA4eNNA/BtvlVDvytM0yhFOSOXc0lutbUFoxSNjmW94N6hJRH2LiHn
                GogwxhneSQVpnb+1mjzy5pzFY1DG0RKz+wE3nY9X+9/pRLOZHB/sIx0j0YLXboN6
                gB1tmi8YMYfX7UQeakQu+HiZhKTHL/spAkmvxjbK8wHEjqL89Evh3FMCgYEAxq5X
                aGO1LdEdY+X/Fssx4Au+g9+i0w535IHSp81pvSmD2yuFSEXeM3SmFtcb6AyL6Cyw
                o/j7CFWD9viqQEzEoyGduvGwjOG4xuLwCGlp0ZJcTzZZxYTnFFrM5IpiZuDptq/8
                86+ER42nrTl6yYQ9YKTlwphDqe7YOCqLpLxwU6MCgYA4Q6m3RXfQZOSPBXYJUoqL
                hPYAXVYaJJDW4hOwWF9HV6zD0wmCzCcIUMv1TBQ2FAcOp+XQGUZXcs0nw8MB6Kqz
                5sW3lTDRKCCuYB3PB5SF2ohFc1W9zToCF1JpiTl5fOCn1MPOrFUWxtNWWsTSirjY
                PQpvUM6UYOhYrvha0VvcyQKBgHI1e+d1EYxB3hwz9Rv8ODJrbdvOrYGXmpHPkvGE
                4hisCbDuZpJyH1YC4wrUIqWUuMQBFJVdpahXyCErNmr59js0MsBo+K0zgA1MHOEo
                /3xKHyglvRsO1+rae1eQuRochhzPM6A9L9QV+OJZ3VyD2Oh6Qd1Hu/WuZ7p5soZD
                EGrzAoGAPUi5iJR3D6+rieD/0NjYMfsOuNTRy0efZbR4HixkiuLbnDEd5Zyr7fAn
                ucezudqmqZiJSuDflS3ZG4v9mQh47m7+pV7H5UCctKXglAnFebzzNdxrLotJWO6+
                NpxDSzSvmPEKnm68w1dzplmMDMF2LYeYzsBNGcvExy3AIzvFSts=
                -----END RSA PRIVATE KEY-----

            $ cat id_rsa.pub   查看这个公钥文件内容
                ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvT6MvwCCxB7tsGVUaoAwseuhoFCN3STDU0MuG5Rm5SKaBhbowFLRbqsdIIs5lS0zBELt4Ws1efkbl/kn589u7WQ8jOm0FxQ4y9tN8Loz+GVy94OBq7Bn2sfhEQ9A5aPM3BGn27P0iGuP2LGMHQWrpuqIJ3ZXiVwSsyy6ZR+ktOy2wX7V1f4H2uz2EXs+ntPzB3kIsgjtzXUu17DFswlYfK39auqR2daA+teTgjzNgaFuES7zjQ7FsCBr5XOKpobbHRBTaThYeGwUkUGkKnABifOGV2dq0mXAfFTzxBFlPvbhi0nmCzypdc1jFMI1Qs3tja5p2Hq2QdElViu/jjjHZ chengjin@sina.com



        如果没有就生成一个
            $ ssh-keygen -t rsa -C "liangchengjin@chenjin.com"

        --在github上， settings->ssh keys->add









     */

```
###### 课时5：git&github的分支操作
```javascript

```
