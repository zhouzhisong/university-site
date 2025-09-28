import { message } from 'antd'; 

// 通用请求工具
export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, options);
    const res = await response.json();

    if (res.code !== 200) {
      message.error(res.msg || '请求失败，请稍后重试'); 
      
      throw new Error(res.msg || '请求失败');
    }

    return res as T;
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : '网络异常，请检查网络连接';
    message.error(errorMsg); 
    throw error;
  }
}