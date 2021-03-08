---
title: shadowsocks 搭梯子
tag:
- shadowsocks
---

# shadowsocks 搭梯子

## 软件和插件

- [shadowsocks-libev](https://github.com/shadowsocks/shadowsocks-libev)
- [simple-obfs](https://github.com/shadowsocks/simple-obfs)

## 安装

### shadowsocks-libev

```bash
## Debian Or Ubuntu

apt install shadowsocks-libev
```

### simple-obfs 混淆插件

[参考官方编译方式](https://github.com/shadowsocks/simple-obfs#build)

```bash
# ps: 示例是使用root用户，如不是请使用 sudo 或自行百度

# Debian / Ubuntu
apt-get install --no-install-recommends build-essential autoconf libtool libssl-dev libpcre3-dev libev-dev asciidoc xmlto automake

git clone https://github.com/shadowsocks/simple-obfs.git

cd simple-obfs

git submodule update --init --recursive

./autogen.sh

./configure && make

make install
```

## 配置

```json
// shadowsocks-libev 配置文件
// /etc/shadowsocks-libev/config.json
{
  "server":["::0","0.0.0.0"],
  "server_port": 65300,
  "password":"", 
  "fast_open":true,
  "reuse_port":true,
  "no_delay":true,
  "timeout":60,
  "mode":"tcp_and_udp",
  "method":"aes-256-gcm",
  "plugin":"obfs-server",
  "plugin_opts":"obfs=http"
}
```

## 启动

```bash
# start | restart | reload | status
# 默认在 root 下执行命令

systemctl start shadowsocks-libev
# or
/etc/init.d/shadowsocks-libev start
```


## 参考

- [搭建 Shadowsocks+obfs 混淆 + BBR 加速以及客户端配置](http://hisyc.com/index.php/archives/3/)
- [安装 shadowsocks-libev 启用 obfs 混淆](https://www.meirenji.info/2019/03/19/%E5%AE%89%E8%A3%85-shadowsocks-libev%E5%90%AF%E7%94%A8-obfs-%E6%B7%B7%E6%B7%86/)