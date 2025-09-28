// src/api/nav.ts
import { fetcher } from "./fetcher";

export interface NavChild {
  title: string;
  path: string;
}

export interface NavItem {
  title: string;
  path: string;
  children: NavChild[];
}


// export type NavItem = {
//   id: number;
//   name: string;
//   jumpUrl: string | null;
//   children?: NavItem[];
// };


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

/**
 * 获取导航数据
 * @param url 接口地址
 */
export const getNavMenus = async (url: string = "/api/nav_menus"): Promise<NavItem[]> => {
  const data = await fetcher<any[]>(url);

  if (!data) return [];

  return data.map((item: any) => ({
    title: item.name,
    path: item.jumpUrl || `/${item.id}`,
    children: (item.children || []).map((child: any) => ({
      title: child.name,
      path: child.jumpUrl || `/${child.id}`,
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