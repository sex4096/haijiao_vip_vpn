# 海角社区(haijiao.com) - 解锁收费视频,VIP,去广告 Surge|QuantumultX 模块

## 说明

由于移动端对于油猴的支持性很差,所以制作了这么一个脚本,用于注入解锁脚本. 

安装模块后,全局浏览器都可以使用脚本了.

有一定使用门槛,小白建议不要折腾,老老实实浏览器添加脚本.

## Surge

1. `首页` -> `修改` -> `模块`
2. 安装新模块,填入地址: https://raw.githubusercontent.com/sex4096/haijiao_vip_vpn/master/haijiao.sgmodule 
3. 勾选新安装的启用并保存.
4. 开启 `脚本` `HTTP重写`
5. 进入到`捕获`,开启`MitM`,点击配置,安装并信任证书.
6. 浏览器进入haijiao.com,刷新页面,看看右下角是否出现了设置界面.

## Quantumult X

1. 进入`设置`
2. 启用`重写`,并进入`规则资源`.
3. 右上角点击添加图标
4. 资源路径填入: https://raw.githubusercontent.com/sex4096/haijiao_vip_vpn/master/haijiao.conf
5. 资源标签随便写,别的不用修改,默认值就好
6. 保存,返回上一页,全部更新.
7. 启用`MitM`, 生成并配置证书. 
8. 浏览器进入haijiao.com,刷新页面,看看右下角是否出现了设置界面.