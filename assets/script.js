<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XelerDL 文件下载站</title>
    <!-- 添加Font Awesome图标库 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        .search-container {
            margin: 20px 0 30px;
            display: flex;
        }
        .search-box {
            flex: 1;
            padding: 12px 15px;
            border: 2px solid #3498db;
            border-radius: 4px 0 0 4px;
            font-size: 16px;
        }
        .search-button {
            padding: 0 20px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
            font-size: 16px;
        }
        .search-button:hover {
            background-color: #2980b9;
        }
        .category {
            margin-top: 30px;
            padding-bottom: 10px;
            border-bottom: 2px solid #3498db;
            color: #2c3e50;
        }
        .download-item {
            background: #f9f9f9;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 5px;
            border-left: 4px solid #3498db;
        }
        .download-link {
            display: inline-block;
            margin-top: 10px;
            color: #3498db;
            text-decoration: none;
            font-weight: bold;
            padding: 5px 10px;
            border-radius: 3px;
            background-color: #f0f7ff;
        }
        .download-link:hover {
            background-color: #e0efff;
        }
        .file-info {
            font-size: 14px;
            color: #666;
        }
        footer {
            margin-top: 40px;
            text-align: center;
            color: #666;
            font-size: 14px;
            padding: 20px;
            border-top: 1px solid #eee;
        }
        .title-icon {
            color: #3498db;
            margin-right: 10px;
        }
        .recommended {
            color: orange;
            font-weight: bold;
        }
        .note {
            color: red;
            font-size: 13px;
        }
        .no-results {
            text-align: center;
            padding: 30px;
            color: #666;
            font-size: 18px;
            display: none;
        }
    </style>
</head>
<body>
    <h1><i class="fas fa-cloud-download-alt title-icon"></i>XelerDL 文件下载站</h1>
    
    <!-- 新增搜索框 -->
    <div class="search-container">
        <input type="text" class="search-box" id="searchInput" placeholder="搜索软件名称..." aria-label="搜索软件">
        <button class="search-button" id="searchButton"><i class="fas fa-search"></i> 搜索</button>
    </div>
    <div class="no-results" id="noResults">没有找到匹配的软件</div>
    
    <h2 class="category"><i class="fas fa-globe"></i> 浏览器</h2>
    <div class="download-item" data-search="google chrome 谷歌浏览器">
        <h3>Google Chrome <span class="recommended">(推荐)</span></h3>
        <p>快速、安全且免费的网络浏览器 <span class="note">（无法下载可以尝试开VPN）</span></p>
        <div class="file-info">
            大小: 85.5 MB | 版本: 最新稳定版 | 更新: 2025-06-05
        </div>
        <a href="https://dl.google.com/chrome/install/ChromeSetup.exe" 
           class="download-link"
           download="ChromeSetup.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    
    <div class="download-item" data-search="microsoft edge 微软浏览器">
        <h3>Microsoft Edge</h3>
        <p>基于Chromium的新版Edge浏览器</p>
        <div class="file-info">
            大小: 1.5 MB | 版本: 自动更新版 | 更新: 2025-06-05
        </div>
        <a href="https://go.microsoft.com/fwlink/?linkid=2108834" 
           class="download-link"
           download="EdgeSetup.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    
    <h2 class="category"><i class="fas fa-comments"></i> 通讯社交</h2>
    <div class="download-item" data-search="微信 wechat">
        <h3>微信 Windows 版</h3>
        <p>微信，是一种生活方式</p>
        <div class="file-info">
            大小: 191 MB | 版本: 3.9.5 | 更新: 2025-06-05
        </div>
        <a href="https://dldir1v6.qq.com/weixin/Windows/WeChatSetup.exe"
           class="download-link"
           download="WeChatSetup.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    
    <div class="download-item" data-search="qq 腾讯qq">
        <h3>腾讯QQ</h3>
        <p>全新版本QQ9上线了！轻松聊天，兴趣社区</p>
        <div class="file-info">
            大小: 168 MB | 版本: 9.9.19 | 更新: 2025-06-05
        </div>
        <a href="https://dldir1.qq.com/qqfile/qq/QQNT/Windows/QQ_9.9.19_250523_x64_01.exe"
           class="download-link"
           download="QQ_9.9.19.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    
    <h2 class="category"><i class="fas fa-briefcase"></i> 办公学习</h2>
    <div class="download-item" data-search="wps office 金山办公">
        <h3>WPS Office <span class="recommended">(推荐)</span></h3>
        <p>国产办公套件，兼容微软Office格式</p>
        <div class="file-info">
            大小: 210 MB | 版本: 2023专业版 | 更新: 2025-05-20
        </div>
        <a href="https://wps-community-production.oss-cn-shanghai.aliyuncs.com/wps/download/ep/WPS2019Pro_11.8.2.12195.exe"
           class="download-link"
           download="WPSOffice.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    
    <h2 class="category"><i class="fas fa-music"></i> 影音娱乐</h2>
    <div class="download-item" data-search="网易云音乐 netease cloud music">
        <h3>网易云音乐</h3>
        <p>发现和分享音乐的平台</p>
        <div class="file-info">
            大小: 85 MB | 版本: 2.10.5 | 更新: 2025-05-15
        </div>
        <a href="https://d1.music.126.net/dmusic/netease-cloud-music_2.10.5_amd64_ubuntu_20240523185721.deb"
           class="download-link"
           download="CloudMusic.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    
    <h2 class="category"><i class="fas fa-shield-alt"></i> 安全防护</h2>
    <div class="download-item" data-search="火绒安全 huorong">
        <h3>火绒安全</h3>
        <p>轻量级安全软件，无弹窗广告</p>
        <div class="file-info">
            大小: 23 MB | 版本: 5.0 | 更新: 2025-04-10
        </div>
        <a href="https://down5.huorong.cn/sysdiag-full-5.0.75.1-2024.04.10.1.exe"
           class="download-link"
           download="Huorong.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    
    <h2 class="category"><i class="fas fa-download"></i> 下载工具</h2>
    <div class="download-item" data-search="迅雷 xunlei thunder">
        <h3>迅雷</h3>
        <p>老牌下载工具，支持P2P加速</p>
        <div class="file-info">
            大小: 85 MB | 版本: 11.3 | 更新: 2025-03-28
        </div>
        <a href="https://down.sandai.net/thunder11/XunLeiSetup11.3.12.1912.exe"
           class="download-link"
           download="Thunder.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    
    <h2 class="category"><i class="fas fa-gamepad"></i> 游戏平台</h2>
    <div class="download-item" data-search="steam 游戏平台">
        <h3>Steam</h3>
        <p>畅玩游戏、讨论游戏、创造游戏的快乐所在</p>
        <div class="file-info">
            大小: 2.27 MB | 版本: 最新版 | 更新: 2024-06-05
        </div>
        <a href="https://media.st.dl.eccdnx.com/client/installer/SteamSetup.exe" 
           class="download-link"
           download="SteamSetup.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    
    <h2 class="category"><i class="fas fa-cloud"></i> 云存储</h2>
    <div class="download-item" data-search="百度网盘 baidu netdisk">
        <h3>百度网盘</h3>
        <p>提供文件的网络备份、同步和分享服务</p>
        <div class="file-info">
            大小: 65 MB | 版本: 7.29 | 更新: 2025-05-12
        </div>
        <a href="https://issuecdn.baidupcs.com/issue/netdisk/yunguanjia/BaiduNetdisk_7.29.0.9.exe"
           class="download-link"
           download="BaiduNetdisk.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>

    <!-- 新增分类和软件 -->
    <h2 class="category"><i class="fas fa-cog"></i> 系统工具</h2>
    <div class="download-item" data-search="ccleaner 系统清理优化工具">
        <h3>CCleaner</h3>
        <p>系统清理优化工具</p>
        <div class="file-info">
            大小: 44.5 MB | 版本: 6.11.10542 | 更新: 2025-05-18
        </div>
        <a href="https://www.ccleaner.com/ccleaner/download" 
           class="download-link"
           download="CCleaner.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="dism++ 系统优化工具箱">
        <h3>Dism++</h3>
        <p>系统优化工具箱</p>
        <div class="file-info">
            大小: 23.8 MB | 版本: 10.1.1000.1 | 更新: 2025-04-25
        </div>
        <a href="https://www.chuyu.me/zh-Hans/" 
           class="download-link"
           download="Dism++.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="spacesniffer 磁盘空间分析工具">
        <h3>SpaceSniffer</h3>
        <p>磁盘空间分析工具</p>
        <div class="file-info">
            大小: 1.5 MB | 版本: 1.3.2.14 | 更新: 2024-12-10
        </div>
        <a href="http://www.uderzo.it/main_products/space_sniffer/" 
           class="download-link"
           download="SpaceSniffer.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>

    <h2 class="category"><i class="fas fa-code"></i> 开发工具</h2>
    <div class="download-item" data-search="vs code 轻量级代码编辑器">
        <h3>VS Code</h3>
        <p>轻量级代码编辑器</p>
        <div class="file-info">
            大小: 110 MB | 版本: 1.82.2 | 更新: 2025-06-01
        </div>
        <a href="https://code.visualstudio.com/download" 
           class="download-link"
           download="VSCode.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="git 版本控制工具">
        <h3>Git</h3>
        <p>版本控制工具</p>
        <div class="file-info">
            大小: 54.9 MB | 版本: 2.42.0 | 更新: 2025-05-23
        </div>
        <a href="https://git-scm.com/downloads" 
           class="download-link"
           download="Git.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="python 编程语言环境">
        <h3>Python</h3>
        <p>编程语言环境</p>
        <div class="file-info">
            大小: 27.5 MB | 版本: 3.11.4 | 更新: 2025-05-10
        </div>
        <a href="https://www.python.org/downloads/" 
           class="download-link"
           download="Python.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>

    <h2 class="category"><i class="fas fa-palette"></i> 设计工具</h2>
    <div class="download-item" data-search="gimp 免费开源图片编辑器">
        <h3>GIMP</h3>
        <p>免费开源图片编辑器</p>
        <div class="file-info">
            大小: 324 MB | 版本: 2.10.34 | 更新: 2025-05-05
        </div>
        <a href="https://www.gimp.org/downloads/" 
           class="download-link"
           download="GIMP.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="inkscape 矢量图形设计工具">
        <h3>Inkscape</h3>
        <p>矢量图形设计工具</p>
        <div class="file-info">
            大小: 155 MB | 版本: 1.3 | 更新: 2025-04-15
        </div>
        <a href="https://inkscape.org/release/" 
           class="download-link"
           download="Inkscape.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="blender 3d建模与动画制作">
        <h3>Blender</h3>
        <p>3D建模与动画制作</p>
        <div class="file-info">
            大小: 290 MB | 版本: 4.1.1 | 更新: 2025-05-30
        </div>
        <a href="https://www.blender.org/download/" 
           class="download-link"
           download="Blender.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>

    <h2 class="category"><i class="fas fa-stopwatch"></i> 效率工具</h2>
    <div class="download-item" data-search="everything 文件快速搜索工具">
        <h3>Everything</h3>
        <p>文件快速搜索工具</p>
        <div class="file-info">
            大小: 2.2 MB | 版本: 1.4.1.1022 | 更新: 2025-03-18
        </div>
        <a href="https://www.voidtools.com/downloads/" 
           class="download-link"
           download="Everything.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="snipaste 截图贴图工具">
        <h3>Snipaste</h3>
        <p>截图贴图工具</p>
        <div class="file-info">
            大小: 12.5 MB | 版本: 3.6.2 | 更新: 2025-05-08
        </div>
        <a href="https://zh.snipaste.com/download.html" 
           class="download-link"
           download="Snipaste.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="listary 文件快速启动器">
        <h3>Listary</h3>
        <p>文件快速启动器</p>
        <div class="file-info">
            大小: 4.7 MB | 版本: 6.0.0.2 | 更新: 2025-04-05
        </div>
        <a href="https://www.listary.com/download" 
           class="download-link"
           download="Listary.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>

    <h2 class="category"><i class="fas fa-network-wired"></i> 网络工具</h2>
    <div class="download-item" data-search="postman api开发测试工具">
        <h3>Postman</h3>
        <p>API开发测试工具</p>
        <div class="file-info">
            大小: 128 MB | 版本: 10.19.0 | 更新: 2025-05-20
        </div>
        <a href="https://www.postman.com/downloads/" 
           class="download-link"
           download="Postman.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="wireshark 网络封包分析工具">
        <h3>Wireshark</h3>
        <p>网络封包分析工具</p>
        <div class="file-info">
            大小: 65.5 MB | 版本: 4.0.8 | 更新: 2025-05-15
        </div>
        <a href="https://www.wireshark.org/download.html" 
           class="download-link"
           download="Wireshark.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="qbittorrent 开源bt下载工具">
        <h3>qBittorrent</h3>
        <p>开源BT下载工具</p>
        <div class="file-info">
            大小: 31.2 MB | 版本: 4.5.5 | 更新: 2025-05-25
        </div>
        <a href="https://www.qbittorrent.org/download.php" 
           class="download-link"
           download="qBittorrent.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>

    <h2 class="category"><i class="fas fa-film"></i> 多媒体工具</h2>
    <div class="download-item" data-search="obs studio 直播与录屏工具">
        <h3>OBS Studio</h3>
        <p>直播与录屏工具</p>
        <div class="file-info">
            大小: 68.5 MB | 版本: 30.0.2 | 更新: 2025-05-12
        </div>
        <a href="https://obsproject.com/download" 
           class="download-link"
           download="OBSStudio.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="vlc 万能媒体播放器">
        <h3>VLC</h3>
        <p>万能媒体播放器</p>
        <div class="file-info">
            大小: 40.8 MB | 版本: 3.0.18 | 更新: 2025-04-28
        </div>
        <a href="https://www.videolan.org/vlc/" 
           class="download-link"
           download="VLC.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="handbrake 视频格式转换工具">
        <h3>HandBrake</h3>
        <p>视频格式转换工具</p>
        <div class="file-info">
            大小: 85.5 MB | 版本: 1.6.1 | 更新: 2025-05-01
        </div>
        <a href="https://handbrake.fr/downloads.php" 
           class="download-link"
           download="HandBrake.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>

    <h2 class="category"><i class="fas fa-toolbox"></i> 实用小工具</h2>
    <div class="download-item" data-search="7-zip 高压缩率解压工具">
        <h3>7-Zip</h3>
        <p>高压缩率解压工具</p>
        <div class="file-info">
            大小: 2.4 MB | 版本: 23.11 | 更新: 2025-04-01
        </div>
        <a href="https://www.7-zip.org/download.html" 
           class="download-link"
           download="7-Zip.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="notepad++ 文本代码编辑器">
        <h3>Notepad++</h3>
        <p>文本代码编辑器</p>
        <div class="file-info">
            大小: 4.5 MB | 版本: 8.5.6 | 更新: 2025-05-18
        </div>
        <a href="https://notepad-plus-plus.org/downloads/" 
           class="download-link"
           download="Notepad++.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="screentogif gif录制工具">
        <h3>ScreenToGif</h3>
        <p>GIF录制工具</p>
        <div class="file-info">
            大小: 10.2 MB | 版本: 2.48.1 | 更新: 2025-05-03
        </div>
        <a href="https://www.screentogif.com/" 
           class="download-link"
           download="ScreenToGif.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>

    <h2 class="category"><i class="fas fa-desktop"></i> 虚拟机与容器</h2>
    <div class="download-item" data-search="virtualbox 开源虚拟机">
        <h3>VirtualBox</h3>
        <p>开源虚拟机</p>
        <div class="file-info">
            大小: 182 MB | 版本: 7.0.12 | 更新: 2025-05-22
        </div>
        <a href="https://www.virtualbox.org/wiki/Downloads" 
           class="download-link"
           download="VirtualBox.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="docker desktop 容器化平台">
        <h3>Docker Desktop</h3>
        <p>容器化平台</p>
        <div class="file-info">
            大小: 1.1 GB | 版本: 4.24.0 | 更新: 2025-05-17
        </div>
        <a href="https://www.docker.com/products/docker-desktop" 
           class="download-link"
           download="DockerDesktop.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="vmware workstation player">
        <h3>VMware Workstation Player</h3>
        <p>虚拟机软件</p>
        <div class="file-info">
            大小: 491 MB | 版本: 17.5.0 | 更新: 2025-05-10
        </div>
        <a href="https://www.vmware.com/products/workstation-player.html" 
           class="download-link"
           download="VMwareWorkstationPlayer.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>

    <h2 class="category"><i class="fas fa-star"></i> 其他推荐</h2>
    <div class="download-item" data-search="calibre 电子书管理工具">
        <h3>Calibre</h3>
        <p>电子书管理工具</p>
        <div class="file-info">
            大小: 214 MB | 版本: 7.2.0 | 更新: 2025-05-28
        </div>
        <a href="https://calibre-ebook.com/download" 
           class="download-link"
           download="Calibre.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="keepass 密码管理工具">
        <h3>KeePass</h3>
        <p>密码管理工具</p>
        <div class="file-info">
            大小: 13.8 MB | 版本: 2.54 | 更新: 2025-05-06
        </div>
        <a href="https://keepass.info/download.html" 
           class="download-link"
           download="KeePass.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    <div class="download-item" data-search="rufus usb启动盘制作工具">
        <h3>Rufus</h3>
        <p>USB启动盘制作工具</p>
        <div class="file-info">
            大小: 1.4 MB | 版本: 4.4 | 更新: 2025-05-19
        </div>
        <a href="https://rufus.ie/zh/" 
           class="download-link"
           download="Rufus.exe">
           <i class="fas fa-download"></i> 官方下载
        </a>
    </div>
    
    <footer>
        <p><i class="fas fa-envelope"></i> 联系我们: muyuyv2@outlook.com</p>
        <p>&copy; 2025 XelerDL资源下载站 | 所有软件均来自官方渠道</p>
    </footer>

    <script>
        // 搜索功能实现
        document.getElementById('searchButton').addEventListener('click', function() {
            performSearch();
        });
        
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        function performSearch() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const items = document.querySelectorAll('.download-item');
            let hasResults = false;
            
            items.forEach(item => {
                const searchData = item.getAttribute('data-search').toLowerCase();
                if (searchData.includes(searchTerm)) {
                    item.style.display = 'block';
                    hasResults = true;
                } else {
                    item.style.display = 'none';
                }
            });
            
            // 显示/隐藏"没有结果"提示
            document.getElementById('noResults').style.display = hasResults ? 'none' : 'block';
            
            // 显示所有类别标题
            document.querySelectorAll('.category').forEach(category => {
                category.style.display = 'block';
            });
        }
    </script>
</body>
</html>
