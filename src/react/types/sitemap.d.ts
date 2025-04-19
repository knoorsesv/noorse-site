export interface SiteMapItem {
  link?: string
  extLink?: string
  name: string
  subItems?: SiteMapItem[]
}

export interface SiteMap {
  items: SiteMapItem[]
}
