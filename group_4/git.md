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