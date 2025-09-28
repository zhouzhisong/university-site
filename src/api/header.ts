// src/api/nav.ts
import { fetcher } from "./fetcher";

export interface NavChild {
  title: string;
  path: string;
}

export interface NavItem {
  title: string;
  path: string;
  children?: {
    title: string;
    path: string;
  }[];
}

export type SiteSettings = {
  website: {
    title: string;
    keywords: string;
    description: string;
  };
  contact: string;
  copyright: string;
  quick_access: QuickAccessItem[];
};

export type QuickAccessItem = {
  name: string;
  url: string;
};

interface Item {
  id: number;
  name: string;
  jumpUrl?: string;
  children?: {
    id: number;
    name: string;
    jumpUrl?: string;
  }[];
}

interface ApiResponse<T> {
  code: number;
  msg: string;
  data: T; // data 字段才是实际需要的数组
}
/**
 * 获取导航数据
 * @param url 接口地址
 */
export const getNavMenus = async (url: string = "/api/nav_menus"): Promise<NavItem[]> => {
  const response = await fetcher<ApiResponse<Item[]>>(url);

   if (response.code !== 200) {
    console.error("获取导航菜单失败：", response.msg);
    return [];
  }
    
    const data = response.data;
    return data.map((item: Item) => ({
    title: item.name,
    path: item.jumpUrl || `/${item.id}`,
    children: (item.children || []).map((child: any) => ({
      title: child.name,
      path: child.jumpUrl || `/channel?id=${child.id}`,
    })),
  }));
};


/**
 * 获取站点设置
 * @param url 接口地址
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  const res = await fetcher<{ code: number; msg: string; data: SiteSettings }>(
    "/api/settings"
  );
  if (res.code !== 200) throw new Error(res.msg);
  return res.data;
}