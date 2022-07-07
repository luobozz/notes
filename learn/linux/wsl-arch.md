# 安装
  1. 下载 [archwsl](https://github.com/yuk7/ArchWSL)
  2. 运行 Arch.exe 提取 rootfs 并注册到 WSL。此外，EXE 文件的名称用作 WSL 实例的名称。这意味着，如果您复制多个 EXE 文件并将它们重命名为不同的名称，您可以同时拥有多个不同的 ArchWSL 而不会发生冲突。

# Xserve
  - [vcxsrv](https://sourceforge.net/projects/vcxsrv/)
  - [wslg](https://github.com/microsoft/wslg)

# 问题
  # arch安装后pacman无法下载
  ```
  https://github.com/yuk7/ArchWSL/issues/268

  pacman-key --refresh-keys
  ```
  
  # systemd
  ```
  https://wsldl-pg.github.io/ArchW-docs/Known-issues/#systemdsystemctl
  ```