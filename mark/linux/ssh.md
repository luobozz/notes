
# sshd重置客户端公钥后可以重置host记录
```
ssh-keygen -f "/home/luobo/.ssh/known_hosts" -R "192.168.1.37"
```