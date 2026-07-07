/**
 * PhoneCam Connect — Simplified Chinese localization script (injected)
 *
 * How it works:
 *   1. Exact match: exact string replacement on DOM text nodes and attributes
 *      (title/placeholder/alt)
 *   2. Pattern match: regex replacement for dynamic text with variables
 *      (e.g. "${count} phones connected")
 *   3. MutationObserver: watches DOM changes and translates new nodes in real time
 *   4. Does not modify source files — injected at runtime via executeJavaScript
 *
 * Injection: execute this script in main.js on the dom-ready event
 */
(function () {
  'use strict';

  // Prevent duplicate injection
  if (window.__PHONECAM_I18N_ZH_CN__) return;
  window.__PHONECAM_I18N_ZH_CN__ = true;

  // ── Exact translation map (matched after trim) ────────────────────────
  const T = {
    // Title bar
    'PhoneCam Connect': 'PhoneCam Connect',
    'Waiting for connection': '等待连接',
    'Minimize': '最小化',
    'Maximize': '最大化',
    'Close': '关闭',

    // Sidebar navigation
    'Main': '主菜单',
    'Dashboard': '仪表盘',
    'Connect Device': '连接设备',
    'My Devices': '我的设备',
    'Live Preview': '实时预览',
    'Insights': '洞察',
    'Analytics': '数据分析',
    'System': '系统',
    'Settings': '设置',
    'Setup Wizard': '配置向导',
    'Help': '帮助',
    'Click to open Setup Wizard': '点击打开配置向导',
    'Virtual Webcam': '虚拟摄像头',
    'Inactive': '未启用',

    // Dashboard page
    'Welcome back —': '欢迎回来 —',
    'no phones connected': '暂无手机连接',
    'Refresh': '刷新',
    'Refresh app': '刷新应用',
    'Connect Phone': '连接手机',
    'Start Webcam': '启动摄像头',
    'Stop Webcam': '停止摄像头',
    'Connected Phones': '已连接手机',
    'Scan QR to add': '扫描二维码添加',
    'Avg Latency': '平均延迟',
    'ms': '毫秒',
    'Resolution': '分辨率',
    'Active stream': '当前推流',
    'Uptime': '运行时长',
    'This session': '本次会话',
    'No phones yet': '暂无手机',
    'Open the PhoneCam app on your Android and scan the QR code.': '在 Android 手机上打开 PhoneCam 应用并扫描二维码。',
    'Connect a Phone': '连接手机',
    'No active stream': '无活跃推流',
    'Stream to OBS / Zoom / Meet': '推流到 OBS / Zoom / Meet',
    'Connect a phone to get your stream URL': '连接手机以获取推流地址',
    'Waiting for phone': '等待手机连接',
    'Stream URL': '推流地址',
    'Waiting for connection…': '等待连接…',
    'Copy URL': '复制地址',
    'OBS Studio': 'OBS Studio',
    'Zoom': 'Zoom',
    'Meet / Teams': 'Meet / Teams',
    '✅ Recommended — Browser Source': '✅ 推荐 — 浏览器源',
    'In OBS → Sources panel → click': '在 OBS → 来源面板 → 点击',
    'Select': '选择',
    'Browser Source': '浏览器源',
    'Paste the': '粘贴',
    'above': '上方的',
    'Set Width/Height to your resolution → OK': '设置宽/高为你的分辨率 → 确定',
    'Native Driver / Virtual Camera': '原生驱动 / 虚拟摄像头',
    'Never use Window Capture': '切勿使用窗口捕获',
    '— it captures the whole PhoneCam app with its UI. Use Browser Source instead.': '— 它会捕获整个 PhoneCam 应用界面。请改用浏览器源。',
    'Use phone camera in Zoom': '在 Zoom 中使用手机摄像头',
    'Click': '点击',
    'above (starts OBS Virtual Camera)': '上方按钮（启动 OBS 虚拟摄像头）',
    'Open OBS → click': '打开 OBS → 点击',
    'Start Virtual Camera': '启动虚拟摄像头',
    'in Controls': '（在控件中）',
    'In Zoom → Settings →': '在 Zoom → 设置 →',
    'Video': '视频',
    '→ Camera →': '→ 摄像头 →',
    'OBS Virtual Camera': 'OBS 虚拟摄像头',
    'Done — your phone camera appears in Zoom ✅': '完成 — 手机摄像头已出现在 Zoom ✅',
    'Use phone camera in Google Meet / Teams': '在 Google Meet / Teams 中使用手机摄像头',
    'above': '上方',
    'Open OBS → click': '打开 OBS → 点击',
    'Done ✅': '完成 ✅',
    'Quick Start': '快速开始',
    '1. Install App': '1. 安装应用',
    'Download PhoneCam from Google Play on your Android': '在 Android 手机上从 Google Play 下载 PhoneCam',
    '2. SameWiFi': '2. 同一 WiFi',
    'Make sure phone and computer are on the same network': '确保手机和电脑在同一网络',
    '3. Scan QR': '3. 扫描二维码',
    'Tap Scan in the app and point at the QR code here': '在应用中点击扫描并对准此处的二维码',
    '4. Go Live': '4. 开始直播',
    'Select PhoneCam in Zoom, Meet, OBS, or any app': '在 Zoom、Meet、OBS 或任何应用中选择 PhoneCam',

    // Connect Device page
    'Scan the QR code with your Android phone': '用 Android 手机扫描二维码',
    'Scan to verify & connect': '扫描以验证并连接',
    'Scan with your phone camera — it opens a webpage confirming the server is running and shows the address to enter in the PhoneCam app. Or tap': '用手机摄像头扫描 — 它会打开一个网页确认服务器正在运行，并显示在 PhoneCam 应用中输入的地址。或点击',
    'Manual Connect': '手动连接',
    'and type the address below.': '并输入下方地址。',
    '🔄 Refresh QR': '🔄 刷新二维码',
    '📋 Copy URL': '📋 复制地址',
    '🌐 Open in Browser': '🌐 在浏览器中打开',
    'Manual Connection (Advanced)': '手动连接（高级）',
    'If QR scan doesn\'t work': '如果二维码扫描不工作',
    'In the PhoneCam app, tap Manual Connect and enter this address:': '在 PhoneCam 应用中，点击手动连接并输入此地址：',
    'Copy': '复制',

    // My Devices page
    'Manage all connected phones': '管理所有已连接手机',
    '🔦 All Torch': '🔦 全部闪光',
    '✕ Disconnect All': '✕ 全部断开',
    '+ Add Device': '+ 添加设备',
    'Global Controls — Apply to All Devices': '全局控制 — 应用到所有设备',
    'FPS': '帧率',
    '↔ Mirror All': '↔ 全部镜像',
    '🔦 Toggle Torch': '🔦 切换闪光',

    // Live Preview page
    'See your phone camera feed in real time': '实时查看手机摄像头画面',
    'No source': '无信号源',
    'Aspect Ratio': '宽高比',
    'Auto (detect)': '自动（检测）',
    '16:9 — Wide': '16:9 — 宽屏',
    '9:16 — Portrait': '9:16 — 竖屏',
    '4:3  — Classic': '4:3  — 经典',
    '1:1  — Square': '1:1  — 正方形',
    '21:9 — Ultrawide': '21:9 — 超宽',
    'Rotate preview': '旋转预览',
    '0° — Upright': '0° — 正立',
    '90° Clockwise': '90° 顺时针',
    '180° Flipped': '180° 翻转',
    '270° (CCW 90°)': '270°（逆时针 90°）',
    'Toggle front/back camera': '切换前置/后置摄像头',
    '🔄 Flip': '🔄 翻转',
    'Mirror horizontally': '水平镜像',
    '↔ Mirror': '↔ 镜像',
    '⛶ Fullscreen': '⛶ 全屏',
    'Connect a phone to see the live feed': '连接手机以查看实时画面',
    'LIVE': '直播',
    'Camera Controls': '摄像头控制',
    'Flip front/back camera': '切换前置/后置摄像头',
    '🔄 Flip Camera': '🔄 翻转摄像头',
    'Frame Rate': '帧率',
    'Flash / Torch': '闪光灯 / 手电筒',
    'Mirror Image': '镜像画面',
    'Flip preview horizontally': '水平翻转预览',
    'Audio': '音频',
    'Phone Microphone': '手机麦克风',
    'Noise Suppression': '降噪',
    'Stream Info': '推流信息',
    'Latency': '延迟',
    '— ms': '— 毫秒',
    'Frames/sec': '帧/秒',
    'Data Rate': '数据速率',
    '— Mbps': '— Mbps',
    'Signal': '信号',
    'Excellent': '优秀',

    // Analytics page
    'Session performance and usage stats': '会话性能和使用统计',
    'Latency Over Time': '延迟随时间变化',
    'Session Summary': '会话摘要',
    'Total Uptime': '总运行时长',
    'Peak FPS': '峰值帧率',
    'Frames Dropped': '丢帧数',
    'Connection Quality': '连接质量',
    'Quality Score': '质量评分',
    'Data Usage': '数据用量',
    'Video Received': '已接收视频',
    'Audio Received': '已接收音频',

    // Settings page
    'Customize your PhoneCam experience': '个性化你的 PhoneCam 体验',
    '⚙️ General': '⚙️ 通用',
    '🎬 Video': '🎬 视频',
    '🎙 Audio': '🎙 音频',
    '📶 Network': '📶 网络',
    '🔧 Advanced': '🔧 高级',
    'Launch at startup': '开机启动',
    'Start PhoneCam when your computer boots': '开机时启动 PhoneCam',
    'Minimize to tray on close': '关闭时最小化到托盘',
    'Keep running in the background': '在后台保持运行',
    'Show desktop notifications': '显示桌面通知',
    'Get alerts when phones connect or disconnect': '手机连接或断开时提醒',
    'Auto-start virtual webcam': '自动启动虚拟摄像头',
    'Activate virtual camera when a phone connects': '手机连接时自动激活虚拟摄像头',
    'Default Resolution': '默认分辨率',
    'Default Frame Rate': '默认帧率',
    'Video Quality': '视频质量',
    'Balanced': '平衡',
    'High Quality': '高质量',
    'Low Latency': '低延迟',
    'Hardware Acceleration': '硬件加速',
    'Use GPU for video decoding (recommended)': '使用 GPU 解码视频（推荐）',
    'Enable Phone Microphone': '启用手机麦克风',
    'Echo Cancellation': '回声消除',
    'Audio Bitrate': '音频码率',
    'WebSocket Port': 'WebSocket 端口',
    'Default: 7779': '默认：7779',
    'Discovery (HTTP) Port': '发现页（HTTP）端口',
    'Default: 7780': '默认：7780',
    'Bind to Interface': '绑定到网卡',
    'All Interfaces (0.0.0.0)': '所有网卡（0.0.0.0）',
    'WiFi Only': '仅 WiFi',
    'Debug Logging': '调试日志',
    'Write detailed logs to file': '写入详细日志到文件',
    'Reset All Settings': '重置所有设置',
    'Reset': '重置',

    // Setup Wizard page
    'Virtual Camera Setup': '虚拟摄像头配置',
    'Install drivers & configure your virtual webcam for all apps': '安装驱动并为所有应用配置虚拟摄像头',
    '↻ Re-check': '↻ 重新检查',
    'PhoneCam Native Driver': 'PhoneCam 原生驱动',
    'Optional — Not Installed': '可选 — 未安装',
    'Without driver': '未安装驱动',
    '— app works via MJPEG stream through OBS. Works great now.': '— 应用通过 OBS 的 MJPEG 流工作。现在就能正常使用。',
    'With native driver': '安装原生驱动',
    '— phone appears directly in': '— 手机直接出现在',
    'Zoom, WhatsApp, Teams, Meet': 'Zoom、WhatsApp、Teams、Meet',
    'as a real webcam. No OBS needed, lower RAM, zero lag.': '中作为真实摄像头。无需 OBS，内存占用更低，零延迟。',
    '⬇ Coming Soon: Native Driver': '⬇ 即将推出：原生驱动',
    'Windows 10/11 • 64-bit': 'Windows 10/11 • 64 位',
    '📋 Already downloaded? Manual install steps': '📋 已下载？手动安装步骤',
    'Download': '下载',
    'from ...': '从 ...',
    'Right-click the file →': '右键点击文件 →',
    'Extract and Run as Administrator': '解压并以管理员身份运行',
    'Installation completes silently in ~5 seconds': '安装约 5 秒内静默完成',
    'Click': '点击',
    'Re-check': '重新检查',
    'above — status will update to Installed': '上方按钮 — 状态将更新为已安装',
    'Installed & Active': '已安装并启用',
    'is registered as a Windows webcam.': '已注册为 Windows 摄像头。',
    'Open any app → camera settings → select': '打开任意应用 → 摄像头设置 → 选择',
    '🗑 Uninstall': '🗑 卸载',
    'Detecting your OS…': '正在检测你的系统…',
    'Checking installed components': '正在检查已安装的组件',
    'Checking…': '检查中…',
    'How to Use Virtual Camera': '如何使用虚拟摄像头',
    'Install Log': '安装日志',
    'Clear': '清除',

    // Help page
    'Help & Support': '帮助与支持',
    'Troubleshooting and documentation': '故障排除与文档',
    'Troubleshooting': '故障排除',
    'Phone can\'t find computer': '手机找不到电脑',
    'Make sure both devices are on the same WiFi network. Check firewall — allow port 7779 (TCP/UDP).': '确保两台设备在同一 WiFi 网络。检查防火墙 — 放行 7779 端口（TCP/UDP）。',
    'High latency / laggy video': '高延迟 / 视频卡顿',
    'Lower resolution to 720p. Make sure you\'re on 5GHz WiFi, not 2.4GHz.': '降低分辨率到 720p。确保使用 5GHz WiFi，而非 2.4GHz。',
    'PhoneCam not showing in apps': 'PhoneCam 未出现在应用中',
    'Click "Start Virtual Webcam" on the Dashboard. On Linux, install v4l2loopback first.': '在仪表盘点击"启动虚拟摄像头"。Linux 用户请先安装 v4l2loopback。',
    'Linux Setup (v4l2loopback)': 'Linux 配置（v4l2loopback）',
    'Install the kernel module for virtual webcam on Linux:': '在 Linux 上安装虚拟摄像头内核模块：',

    // Onboarding
    'Welcome to PhoneCam!': '欢迎使用 PhoneCam！',
    'Turn your Android into a professional webcam in seconds. 100% local, no cloud, ultra-low latency. Let\'s get you set up.': '几秒钟将 Android 变成专业摄像头。100% 本地，无云端，超低延迟。让我们开始设置吧。',
    'Install the Android App': '安装 Android 应用',
    'Download the PhoneCam app from Google Play on your Android phone. It\'s free and under 5MB.': '在 Android 手机上从 Google Play 下载 PhoneCam 应用。免费且不到 5MB。',
    'Same WiFi Network': '同一 WiFi 网络',
    'Make sure your phone and this computer are connected to the same WiFi network. 5GHz is recommended for best performance.': '确保手机和此电脑连接到同一 WiFi 网络。推荐使用 5GHz 以获得最佳性能。',
    'All Set!': '一切就绪！',
    'Open the PhoneCam app → tap "Scan QR" → point at the QR code on the Connect page. Your phone will stream instantly.': '打开 PhoneCam 应用 → 点击"扫描二维码" → 对准连接页面的二维码。手机将立即开始推流。',
    'Skip': '跳过',
    'Continue →': '继续 →',
    'Get Started →': '开始使用 →',

    // Dynamic status text
    'Starting…': '启动中…',
    'Stopping…': '停止中…',
    'Stopping': '停止中',
    'QR code refreshed': '二维码已刷新',
    'URL copied!': '地址已复制！',
    'Copy failed': '复制失败',
    'App info not loaded yet': '应用信息尚未加载',
    'Connect a phone first': '请先连接手机',
    'Starting virtual webcam…': '正在启动虚拟摄像头…',
    'Unknown error — check Setup Wizard': '未知错误 — 请查看配置向导',
    'Virtual webcam stopped': '虚拟摄像头已停止',
    'Virtual webcam error:': '虚拟摄像头错误：',
    'No phone connected': '未连接手机',
    'No phones connected': '未连接手机',
    'Device not found': '未找到设备',
    'Failed to switch webcam source': '切换摄像头源失败',
    'Generating…': '生成中…',
    'No URL —': '无地址 —',
    'check connection': '请检查连接',
    'Installed ✓': '已安装 ✓',
    'Not installed': '未安装',
    '✅ Ready to stream': '✅ 可以推流',
    '⚠ Setup required': '⚠ 需要配置',
    'Driver installed — waiting for stream': '驱动已安装 — 等待推流',
    '✅ Native Driver — No OBS Needed': '✅ 原生驱动 — 无需 OBS',
    'Virtual Camera (install driver first)': '虚拟摄像头（需先安装驱动）',
    'Or use the MJPEG Stream URL in OBS Browser Source (always works).': '或在 OBS 浏览器源中使用 MJPEG 推流地址（始终可用）。',
    '⏳ Reinstalling…': '⏳ 重新安装中…',
    '⏳ Uninstalling…': '⏳ 卸载中…',
    '⏳ Switching…': '⏳ 切换中…',
    'Installing…': '安装中…',
    'Driver reinstalled successfully.': '驱动重新安装成功。',
    'Reinstall failed — see log below.': '重新安装失败 — 请查看下方日志。',
    'Driver removed — restart your PC to fully clear from camera pickers.': '驱动已移除 — 重启电脑以从摄像头选择器中完全清除。',
    'Driver uninstalled successfully.': '驱动卸载成功。',
    'Reinstall error:': '重新安装错误：',
    'Uninstall error:': '卸载错误：',
    'Error:': '错误：',
    'Reinstall': '重新安装',
    'Uninstall': '卸载',
    '↺ Reinstall': '↺ 重新安装',
    'Command copied': '命令已复制',
    'Auto Install': '自动安装',
    'Waiting for frames…': '等待画面…',
    'ACTIVE': '使用中',
    '● LIVE': '● 直播',
    'ACTIVE WEBCAM': '当前摄像头',
    'Android Phone': 'Android 手机',
    '🔦 Torch': '🔦 闪光',
    '⬜ Landscape': '⬜ 横屏',
    '📱 Portrait': '📱 竖屏',
    '👁 Preview': '👁 预览',
    '📹 Use as Webcam': '📹 设为摄像头',
    'No devices connected': '未连接设备',
    'Open the PhoneCam app and scan the QR code to connect.': '打开 PhoneCam 应用并扫描二维码以连接。',
    '🔦 On': '🔦 开启',
    '🔄 Back Cam': '🔄 后置',
    '🔄 Front Cam': '🔄 前置',
    '🔄 Back': '🔄 后置',
    '🔄 Flip': '🔄 翻转',
    '↔ Mirrored': '↔ 已镜像',
    'Select a source above to see the live feed': '在上方选择信号源以查看实时画面',
    'Normal (0°)': '正常（0°）',
    '90° Counter-CW': '90° 逆时针',
    'Aspect: Auto': '宽高比：自动',

    // Quality settings modal
    'Camera Quality': '摄像头质量',
    'JPEG Quality —': 'JPEG 质量 —',
    'Higher = sharper but more data': '越高 = 越清晰但数据量越大',
    '40% — Low RAM': '40% — 低内存',
    '70% — Balanced': '70% — 平衡',
    '100% — Max quality': '100% — 最高质量',
    '💡': '💡',
    'Recommended:': '推荐：',
    '1080p 30fps 85% — balanced quality and performance': '1080p 30fps 85% — 质量与性能平衡',
    'Cancel': '取消',
    'Apply Settings': '应用设置',

    // Resolution / FPS options
    '1080p (1920×1080)': '1080p (1920×1080)',
    '720p (1280×720)': '720p (1280×720)',
    '4K (3840×2160)': '4K (3840×2160)',
    '30 fps': '30 帧/秒',
    '60 fps': '60 帧/秒',
    '24 fps': '24 帧/秒',
    '15 fps': '15 帧/秒',
    '128 kbps': '128 kbps',
    '256 kbps': '256 kbps',
    '64 kbps': '64 kbps',

    // Miscellaneous
    'Done — no OBS required ✅': '完成 — 无需 OBS ✅',
    'button above': '上方按钮',
    'on the Dashboard': '在仪表盘上',
    '— no OBS needed': '— 无需 OBS',
    '🎉 Your phone camera is live!': '🎉 手机摄像头已上线！',
    '🎉 Your phone camera now appears as a webcam in every app!': '🎉 手机摄像头现已作为摄像头出现在所有应用中！',
    '🎉 Streaming live as a Linux webcam!': '🎉 已作为 Linux 摄像头实时推流！',
    '🎉 Live on macOS!': '🎉 macOS 上已上线！',
    'in PhoneCam': '在 PhoneCam 中',

    // Language selector
    'Language': '语言',
    'Change interface language': '切换界面显示语言',
    'English': 'English',
    '中文': '中文',
  };

  // ── Pattern matching (for dynamic text with variables) ─────────────────
  const PATTERNS = [
    // Phone connect/disconnect toast
    { p: /^📱 (.+) connected!$/, r: (m) => `📱 ${m[1]} 已连接！` },
    { p: /^📵 (.+) disconnected$/, r: (m) => `📵 ${m[1]} 已断开` },
    { p: /^(.+) disconnected$/, r: (m) => `${m[1]} 已断开` },
    { p: /^Disconnect failed: (.+)$/, r: (m) => `断开失败：${m[1]}` },
    { p: /^Disconnect all (\d+) devices\?$/, r: (m) => `断开所有 ${m[1]} 台设备？` },

    // Quantity-related
    { p: /^(\d+) phones? connected$/, r: (m) => `${m[1]} 台手机已连接` },
    { p: /^(\d+) devices? connected — click a preview to set active$/, r: (m) => `${m[1]} 台设备已连接 — 点击预览设为活跃` },

    // Webcam start/stop
    { p: /^✅ Webcam active — (.+)$/, r: (m) => `✅ 摄像头已启用 — ${m[1]}` },
    { p: /^📡 MJPEG fallback: (.+)$/, r: (m) => `📡 MJPEG 回退：${m[1]}` },
    { p: /^❌ Webcam failed: (.+)$/, r: (m) => `❌ 摄像头启动失败：${m[1]}` },
    { p: /^📹 (.+) is now your webcam!$/, r: (m) => `📹 ${m[1]} 现在是你的摄像头！` },
    { p: /^Failed to update camera: (.+)$/, r: (m) => `更新摄像头失败：${m[1]}` },

    // Settings change toast
    { p: /^Resolution → (.+)$/, r: (m) => `分辨率 → ${m[1]}` },
    { p: /^Frame rate → (.+) fps$/, r: (m) => `帧率 → ${m[1]} 帧/秒` },
    { p: /^Quality → (.+)%$/, r: (m) => `质量 → ${m[1]}%` },
    { p: /^(.+): resolution → (.+)$/, r: (m) => `${m[1]}：分辨率 → ${m[2]}` },
    { p: /^(.+): fps → (.+)$/, r: (m) => `${m[1]}：帧率 → ${m[2]}` },
    { p: /^(.+): quality → (.+)%$/, r: (m) => `${m[1]}：质量 → ${m[2]}%` },
    { p: /^(.+) → (.+) on all devices$/, r: (m) => `${m[1]} → ${m[2]}（所有设备）` },
    { p: /^(.+) applied to all devices$/, r: (m) => `${m[1]} 已应用到所有设备` },

    // Camera switch
    { p: /^📱 Switched to (front|back) camera$/, r: (m) => `📱 已切换到${m[1] === 'front' ? '前置' : '后置'}摄像头` },

    // Rotation
    { p: /^🔄 (.+)$/, r: (m) => {
      const map = { 'Normal (0°)': '正常（0°）', '90° Clockwise': '90° 顺时针', '180° Flipped': '180° 翻转', '90° Counter-CW': '90° 逆时针' };
      return `🔄 ${map[m[1]] || m[1]}`;
    }},

    // Aspect ratio
    { p: /^Aspect: (.+)$/, r: (m) => {
      const map = { 'Auto (detect)': '自动（检测）', '16:9 — Wide': '16:9 — 宽屏', '9:16 — Portrait': '9:16 — 竖屏', '4:3  — Classic': '4:3 — 经典', '1:1  — Square': '1:1 — 正方形', '21:9 — Ultrawide': '21:9 — 超宽' };
      return `宽高比：${map[m[1]] || m[1]}`;
    }},

    // Quality hints
    { p: /^⚠ High settings — needs fast WiFi \(5GHz recommended\)$/, r: () => '⚠ 高设置 — 需要快速 WiFi（推荐 5GHz）' },
    { p: /^✅ Low bandwidth — great for slow networks or saving RAM$/, r: () => '✅ 低带宽 — 适合慢速网络或节省内存' },
    { p: /^✅ (.+) (.+)fps (.+)% — balanced quality and performance$/, r: (m) => `✅ ${m[1]} ${m[2]}fps ${m[3]}% — 质量与性能平衡` },
    { p: /^Camera updated — (.+) @ (.+)fps · (.+)% quality$/, r: (m) => `摄像头已更新 — ${m[1]} @ ${m[2]}fps · ${m[3]}% 质量` },

    // Device card meta info
    { p: /^Pick a device to use as webcam, then click "Preview →"$/, r: () => '选择一个设备作为摄像头，然后点击"预览 →"' },

    // Driver-related
    { p: /^Reinstall PhoneCam driver\?\n\nThis will remove and reinstall the driver to fix any issues\.$/, r: () => '重新安装 PhoneCam 驱动？\n\n这将移除并重新安装驱动以修复问题。' },
    { p: /^Uninstall PhoneCam driver\?\n\n"PhoneCam Connect" will be removed from all Windows camera pickers\.$/, r: () => '卸载 PhoneCam 驱动？\n\n"PhoneCam Connect" 将从所有 Windows 摄像头选择器中移除。' },
    { p: /^Reinstall error: (.+)$/, r: (m) => `重新安装错误：${m[1]}` },
    { p: /^Uninstall error: (.+)$/, r: (m) => `卸载错误：${m[1]}` },
    { p: /^Error: (.+)$/, r: (m) => `错误：${m[1]}` },
    { p: /^Virtual webcam error: (.+)$/, r: (m) => `虚拟摄像头错误：${m[1]}` },

    // Install log
    { p: /^▶ Installing (.+)\.\.\.$/, r: (m) => `▶ 正在安装 ${m[1]}...` },
    { p: /^✅ (.+) installed$/, r: (m) => `✅ ${m[1]} 已安装` },
    { p: /^❌ Failed \(code (.+)\): (.+)$/, r: (m) => `❌ 失败（代码 ${m[1]}）：${m[2]}` },
    { p: /^❌ Error: (.+)$/, r: (m) => `❌ 错误：${m[1]}` },

    // Stream URL copy
    { p: /^✅ Stream URL copied — paste it in OBS Browser Source$/, r: () => '✅ 推流地址已复制 — 粘贴到 OBS 浏览器源中' },

    // OBS status
    { p: /^🟢 Live$/, r: () => '🟢 直播中' },
    { p: /^Copy the URL below and paste it into OBS Browser Source$/, r: () => '复制下方地址并粘贴到 OBS 浏览器源中' },

    // How-to steps
    { p: /^In OBS Sources → Add →$/, r: () => '在 OBS 来源 → 添加 →' },
    { p: /^→ paste the Stream URL$/, r: () => '→ 粘贴推流地址' },
    { p: /^In Zoom \/ Meet → Camera →$/, r: () => '在 Zoom / Meet → 摄像头 →' },
    { p: /^— FFmpeg pipes to$/, r: () => '— FFmpeg 管道输出到' },
    { p: /^or$/, r: () => '或' },
    { p: /^Open Zoom \/ Meet \/ Teams → Settings → Camera$/, r: () => '打开 Zoom / Meet / Teams → 设置 → 摄像头' },
    { p: /^Open Zoom \/ Meet → Camera →$/, r: () => '打开 Zoom / Meet → 摄像头 →' },

    // Platform descriptions
    { p: /^Uses v4l2loopback kernel module \+ FFmpeg — no code signing needed$/, r: () => '使用 v4l2loopback 内核模块 + FFmpeg — 无需代码签名' },
    { p: /^Native DirectShow driver \(recommended\) or MJPEG via OBS Browser Source$/, r: () => '原生 DirectShow 驱动（推荐）或通过 OBS 浏览器源的 MJPEG' },
    { p: /^Uses OBS Studio Virtual Camera \+ FFmpeg — requires Homebrew$/, r: () => '使用 OBS Studio 虚拟摄像头 + FFmpeg — 需要 Homebrew' },

    // Setup wizard hints
    { p: /^On Windows, install the$/, r: () => '在 Windows 上，安装' },
    { p: /^above for the best experience\.$/, r: () => '以获得最佳体验。' },
    { p: /^Optionally install FFmpeg and OBS for the MJPEG Browser Source workflow\.$/, r: () => '可选：安装 FFmpeg 和 OBS 以使用 MJPEG 浏览器源工作流。' },
    { p: /^Install the$/, r: () => '安装' },
    { p: /^on the Setup page for direct Zoom\/Meet\/Teams integration\.$/, r: () => '在配置页面以直接集成 Zoom/Meet/Teams。' },
  ];

  // ── Translation core function ──────────────────────────────────────────
  function translateText(text) {
    if (!text) return text;
    const trimmed = text.trim();
    if (!trimmed) return text;

    // Exact match
    if (T[trimmed]) {
      return text.replace(trimmed, T[trimmed]);
    }

    // Pattern match
    for (const { p, r } of PATTERNS) {
      const match = text.match(p);
      if (match) {
        return r(match);
      }
    }

    return null;
  }

  // ── Translate text nodes ──────────────────────────────────────────────
  function translateNode(node) {
    if (!node) return;
    // Text node
    if (node.nodeType === Node.TEXT_NODE) {
      const original = node.nodeValue;
      if (!original || !original.trim()) return;
      // Skip script/style content
      const parent = node.parentNode;
      if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) return;
      const translated = translateText(original);
      if (translated && translated !== original) {
        node.nodeValue = translated;
      }
      return;
    }
    // Element node
    if (node.nodeType === Node.ELEMENT_NODE) {
      // Translate attributes
      ['title', 'placeholder', 'alt'].forEach(attr => {
        const val = node.getAttribute(attr);
        if (val && val.trim()) {
          const translated = translateText(val);
          if (translated && translated !== val) {
            node.setAttribute(attr, translated);
          }
        }
      });
      // Translate child text nodes
      if (node.childNodes && node.childNodes.length > 0) {
        node.childNodes.forEach(translateNode);
      }
    }
  }

  // ── Translate entire DOM ─────────────────────────────────────────────
  function translateAll() {
    translateNode(document.body);
  }

  // ── MutationObserver: watch for dynamic changes ──────────────────────
  let debounceTimer = null;
  function scheduleTranslation() {
    if (debounceTimer) return;
    debounceTimer = setTimeout(() => {
      debounceTimer = null;
      translateAll();
    }, 50);
  }

  function startObserver() {
    const observer = new MutationObserver((mutations) => {
      let needTranslate = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          needTranslate = true;
          break;
        }
        if (mutation.type === 'characterData' && mutation.target.nodeValue && mutation.target.nodeValue.trim()) {
          needTranslate = true;
          break;
        }
        if (mutation.type === 'attributes' &&
            (mutation.attributeName === 'title' || mutation.attributeName === 'placeholder' || mutation.attributeName === 'alt')) {
          needTranslate = true;
          break;
        }
      }
      if (needTranslate) scheduleTranslation();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['title', 'placeholder', 'alt'],
    });

    return observer;
  }

  // ── Intercept confirm() dialogs ───────────────────────────────────────
  const originalConfirm = window.confirm;
  window.confirm = function (message) {
    if (typeof message === 'string') {
      const translated = translateText(message);
      if (translated) message = translated;
    }
    return originalConfirm.call(this, message);
  };

  // ── Initialization ────────────────────────────────────────────────────
  function init() {
    if (!document.body) {
      setTimeout(init, 10);
      return;
    }

    translateAll();
    startObserver();

    console.log('[i18n] 简体中文汉化已加载');
  }

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
