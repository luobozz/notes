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
        - [ ] 
      - [ ] 安装基本工作环境
        - [ ] google
          - [ ] 安装中文包
          - [ ] 设置全局代理
        - [ ] vscode
          - [ ] 通过snap安装 [https://snapcraft.io/install/code/arch#install](https://snapcraft.io/install/code/arch#install)
        - [ ] terminal
          - [ ] ~~hyper~~
          - [ ] 终端使用st
        - [ ] IDEA
        - [ ] v2ranN
        - [ ] 中文输入
        - [ ] qq
        - [ ] 微信
      - [ ] 美化
        - [x] 字体
          - [x] aur安装
          - [x] 把ttf字体文件复制到/usr/share/fonts/TTF目录下。 更新字体库fc-cache -vf
        - [ ] 配色
        - [ ] 其他
          - [ ] picom研究
      - [ ] 远程
        - [ ] todesk方案
          - [ ] 非x11环境下直接启动todesk然后脚本切换分辨率
        - [x] ~~TightVNC方案~~
          - ~~[https://blog.csdn.net/u010563350/article/details/106793148/](https://blog.csdn.net/u010563350/article/details/106793148/) ~~
          - ~~[https://wiki.archlinux.org/title/TigerVNC#Installation](https://wiki.archlinux.org/title/TigerVNC#Installation)~~
          - ~~tight退出全屏方案ctrl+shift+alt+f~~

# 问题
  1. 在VMware里分辨率不正确的问题
     1. [参照教程](https://www.bilibili.com/video/BV1sE41137dW?spm_id_from=333.788.top_right_bar_window_history.content.click)
    ```console
    sudo pacman -S xf86-input-vmmouse xf86-video-vmware mesa
    xrandr --addmode Virtual1 1920x1080
    sudo pacman -S xf86-input-vmmouse xf86-video-vmware mesa
    sudo pacman -S open-vm-tools
    sudo pacman -S gtkmm3
    sudo systemctl start vmtoolsd.service
    sudo systemctl enable vmtoolsd.service
    sudo systemctl start vmware-vmblock-fuse.service
    sudo systemctl enable vmware-vmblock-fuse.servicesud
    sudo pacman -S gtkmm gtk2
    sudo vim /etc/mkinitcpio.conf
      MODULES()改成
      MODULES=(vsock vmw_vsock_vmci_transport vmw_balloon vmw_vmci vmwgfx)
    sudo mkinitcpio -p linuk
    ```
  2. xrandr切换屏幕分辨率
     https://wiki.archlinux.org/index.php/xrandr#Adding_undetected_resolutions
    ```console
    xrandr --newmod "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync
    xrandr --addmode eDP-1 1920x1080_60.00
    xrandr --output eDP-1 --mode 1920x1080_60.00
    ```
  3. dwm补丁不正确
     1. 把自己的修改打成补丁