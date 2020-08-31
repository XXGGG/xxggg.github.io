# 🥝SSH-公钥私钥🥝

## 如何创建SSH
打开Shell（Windows下打开Git Bash）
```sh
ssh-keygen -t rsa -C "你的邮@箱地址.com"
```
接着一路回车  

- **id_rsa是私钥，不能泄露出去**
- **id_rsa.pub是公钥，可以放心地告诉任何人**

>公钥可以添加到GitHub或者码云个人账户-><code>SSH Keys</code>里，这样就绑定了电脑和远程仓库，以后提交push就可以不用输入密码了

## 如何查看SSH

### 查看公钥
在终端输入
```sh
cat ~/.ssh/id_rsa.pub
```
### 查看私钥
```sh
cat ~/.ssh/id_rsa
```