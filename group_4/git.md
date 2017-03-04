# 今天组长都用了哪些 git && github 技能呢？

#####  用[马克飞象](https://maxiang.io/)写MD不错

## 2017.02.26

### Fork

1 首先我fork了老师的作业提交仓库

>GitHub中**Fork** 即是 服务端的仓库克隆，包含了原来的仓库（即upstream repository，上游仓库）所有内容，如分支、Tag、提交；代码托管服务（如Github、BitBucket）提供了方便的完成**Fork**操作的功能（在仓库页面点一下Fork按钮）。这样有了一个你自己的可以自由提交的仓库，然后可以通过的**PullRequest**把你的提交贡献给 原仓库。 --[知乎](https://www.zhihu.com/question/20431718/answer/74250205)
简单来说就是将别人账号下的一个仓库复制到自己的账号下，必如 我Fork老师的仓库[https://github.com/zhufengreact/react-201703.git](https://github.com/zhufengreact/react-201703.git) 后，我的账号下就会出现[https://github.com/Rococolate/react-201703.git](https://github.com/Rococolate/react-201703.git)



2 然后复制这个仓库的地址并在本地使用`git clone [url]`将代码从远程拉取到本地

3  `git branch` 查看现在所在的分支是*master*

4 并使用 `git branch group_4` 新建*group_4*分支

5 然后`git checkout group_4` 切换到*group_4分支*

6 `git branch` 一下现在分支是*group_4*

8 在仓库根目录新建 文件夹 **group_4**

9 最后 `git push origin group_4` 推送到github

### Collaborators

10 在本库的[github网页](https://github.com/Rococolate/react-201703/)里 点击[settings](https://github.com/Rococolate/react-201703/settings) 侧边栏找到[Collaborators](https://github.com/Rococolate/react-201703/settings/collaboration) 然后在搜索框输入组员的 github账号，邀请加入这个仓库 组员接受后，就可以克隆这个仓库并在*group_4*分支下提交作业了

11 在group_4文件夹里新建member_16文件夹并在里面新建profile.txt文件写入内容

12 `git add -A`新增的文件添加到暂存区(index)

13 `git commit -m 'first commit'`将INDEX区的提交到本地库

14 `git push origin group_4`往远程仓库的group_4分支push代码

## 2017.02.27

小伙伴也成功往仓库里提交代码，现在我想本地同步远程仓库，这样就可以在本地参考小伙伴的代码了👻

1 先来个`git pull`试试
```
➜  group_4 git:(group_4) git pull
remote: Counting objects: 20, done.
remote: Compressing objects: 100% (13/13), done.
remote: Total 20 (delta 3), reused 20 (delta 3), pack-reused 0
Unpacking objects: 100% (20/20), done.
From github.com:Rococolate/react-201703
   55a90ec..c538293  group_4    -> origin/group_4
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> group_4
```

git提示我有错，原因是没有指定本地group_4分支与远程origin/group_4分支的链接，根据提示，设置group_4和origin/group_4的链接

2 `git branch --set-upstream-to=origin/group_4 group_4`

```
➜  group_4 git:(group_4) git branch --set-upstream-to=origin/group_4 group_4
Branch group_4 set up to track remote branch group_4 from origin.
```
成功连接

3 再次`git pull`
```
➜  group_4 git:(group_4) git pull
Updating 55a90ec..c538293
Fast-forward
 group_4/member_18/1.atom/atom_learn.md           |  37 +++
 group_4/member_18/2.github/github_learn.md       | 212 ++++++++++++++++
 group_4/member_18/3.babel/.babelrc               |   3 +
 group_4/member_18/3.babel/.gitignore             |   0
 group_4/member_18/3.babel/README.md              | 242 +++++++++++++++++++
 group_4/member_18/3.babel/babel_learn.js         | 194 +++++++++++++++
 group_4/member_18/3.babel/dist/index.js          | 189 +++++++++++++++
 group_4/member_18/3.babel/index.html             |  13 +
 group_4/member_18/3.babel/package.json           |  18 ++
 group_4/member_18/3.babel/src/index.js           | 203 ++++++++++++++++
 .../function-programming_learn.md                | 164 +++++++++++++
 group_4/member_18/profile.txt                    |   3 +
 12 files changed, 1278 insertions(+)
 create mode 100644 group_4/member_18/1.atom/atom_learn.md
 create mode 100644 group_4/member_18/2.github/github_learn.md
 create mode 100644 group_4/member_18/3.babel/.babelrc
 create mode 100644 group_4/member_18/3.babel/.gitignore
 create mode 100644 group_4/member_18/3.babel/README.md
 create mode 100644 group_4/member_18/3.babel/babel_learn.js
 create mode 100644 group_4/member_18/3.babel/dist/index.js
 create mode 100644 group_4/member_18/3.babel/index.html
 create mode 100644 group_4/member_18/3.babel/package.json
 create mode 100644 group_4/member_18/3.babel/src/index.js
 create mode 100644 group_4/member_18/9.js-functional-programming/function-programming_learn.md
 create mode 100644 group_4/member_18/profile.txt
```
成功拉取代码👻

## 2017.03.05

### 第一次 pull request

小组的同学都提交作业完毕，现在来进行 第一次 激动人心的 **pull request**

1.首先来到仓库首页的 **Pull requests**栏 点击 *New pull request*按钮
![enter image description here](http://rococolate.github.io/blog/images/github/WechatIMG6.jpeg)

2.选好要Pull进的分支Master 和我们的分支group_4
![enter image description here](http://rococolate.github.io/blog/images/github/WechatIMG11.jpeg)

3.点击*Create pull request*按钮

4.检查diff和填写commit并提交！

5.成功并等待老师合并
![enter image description here](http://rococolate.github.io/blog/images/github/WechatIMG31.jpeg)


