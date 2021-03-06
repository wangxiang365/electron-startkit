const { app } = require('electron')

/**
 * chrome 参数定义
 * 
 * 参考 https://peter.sh/experiments/chromium-command-line-switches/
 */
const args = {
  'disable-web-security': true,
  // 启用 GPU 渲染可降低 renderer 进程的 CPU 计算
  'enable-gpu-rasterization': true,
  'gpu-rasterization-msaa-sample-count': 16,
  'enable-zero-copy': true
}

for (let [key, val] of Object.entries(args)) {
  app.commandLine.appendSwitch(key, val)
}
