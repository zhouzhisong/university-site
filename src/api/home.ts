// src/api/home.ts
import { fetcher } from "./fetcher";

export interface Banner {
  title: string;
  breadcrumbs: { text: string; url: string }[];
  backgroundImage: string;
}

export interface SubNavItem {
  name: string;
  path: string;
}

export interface TitleSection {
  mainTitle: string;
  meta: { label: string; value: string }[];
}

export interface FooterContact {
  icon: string;
  text: string;
}

export interface HomeData {
  banner: Banner;
  subNav: SubNavItem[];
  titleSection: TitleSection;
  content: string[];
  footer: {
    contacts: FooterContact[];
  };
}

/**
 * 获取首页数据
 * @param url 首页数据接口
 */
export const fetchHomeData = async (url: string): Promise<HomeData | null> => {
  const data = await fetcher<HomeData>(url);
  return data;
};
