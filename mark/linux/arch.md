# 记录一次关于archlinux的折腾过程

# 教程
[b站单系统的教程](https://www.bilibili.com/read/cv5124933?from=search&spm_id_from=333.337.0.0)
[双系统的教程](https://zhuanlan.zhihu.com/p/138951848)
[知乎单系统教程](https://zhuanlan.zhihu.com/p/99448314)

# 选择
- 引导
  - EFI引导
- 硬盘
  - swap 使用swapfile方便
  - 主分区不区分/ 根分区和/home 分区了第一次折腾先这样以后重装就手动备份了再根据经验分根分区独立
- 显卡
  - 目前先在intel继显上操作后面更换到独显
- aur包管理三个都在用，空了删除无用插件
  - yay
  - pacman
  - paru
- 网络管理
  - 无线暂时用iwd+systemd来管理，卸载了networkmanager
- 可视化
  - kde
    - 登录
      - sddm 
      - 
  - dwn
    - init
      - [ ] 状态栏基础显示
      - [ ] 安装基本工作环境
        - [ ] google
          - [ ] 安装中文包
          - [ ] 设置全局代理
        - [ ] vscode
          - [ ] 通过snap安装 [https://snapcraft.io/install/code/arch#install](https://snapcraft.io/install/code/arch#install)
        - [ ] hyper
        - [ ] IDEA
        - [ ] v2ranN
        - [ ] 中文输入
        - [ ] qq
        - [ ] 微信
      - [ ] 美化
        - [ ] 字体
        - [ ] 配色
        - [ ] 其他