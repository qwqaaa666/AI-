// worker.js

// 从 CDN 导入 Web Worker 引擎处理器
import { WebWorkerMLCEngineHandler } from "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.53/dist/web-llm.js";

// 创建一个处理器实例
const handler = new WebWorkerMLCEngineHandler();

// 监听来自主线程的消息
onmessage = (event) => {
    handler.onmessage(event);
};
