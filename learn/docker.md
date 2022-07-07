
# 利用exec和管道传输在非交互的模式下快速执行命令
```
sudo docker exec -t redis /bin/bash -c "redis-cli -a '111111' -n 4 keys 'PFTRACK_CURRENT_*'|xargs redis-cli -a '111111' -n 4 DEL"
sudo docker exec -t oracle12 /bin/bash -c "echo 'delete SYS_BREAK_INOUT where id>794;' | sqlplus bank/bank"
```