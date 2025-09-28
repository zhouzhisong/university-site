export interface ApiResponse<T = any> {
  code: number;
  msg: string;
  data: T;
}

/**
 * 通用 GET 请求
 * @param url 接口地址
 * @returns Promise<T>
 */
export const fetcher = async <T = any>(url: string): Promise<T> => {
  const res = await fetch(url, { method: "GET", headers: { "Content-Type": "application/json" } });
  if (!res.ok) throw new Error(`请求失败: ${res.status}`);

  const json: ApiResponse<T> = await res.json();
  if (json.code !== 200) throw new Error(`接口返回异常: ${json.msg}`);

  return json.data; // TS 知道一定有值
};

