import type { MenuConfig } from "../libs/config";

const menuConfig: MenuConfig = [
  {
    id: "general",
    title: "ทั่วไป",
    menus: [
      {
        id: "dashboard",
        title: "แดชบอร์ด",
        iconName: "mdi:view-dashboard",
        to: "/",
      },
      {
        id: "settings",
        title: "ตั้งค่า",
        iconName: "mdi:cog",
        to: "/settings",
      },
    ],
  },
  {
    id: "content",
    title: "เนื้อหา",
    menus: [
      {
        id: "news",
        title: "ข่าวสาร",
        iconName: "mdi:newspaper",
        to: "/news",
      },
      {
        id: "highlight",
        title: "เนื้อหาโดดเด่น",
        iconName: "mdi:star",
        to: "/highlight",
      },
      {
        id: "event",
        title: "กิจกรรม",
        iconName: "mdi:calendar",
        to: "/event",
      },
      {
        id: "asset",
        title: "สื่อ",
        iconName: "mdi:file-document",
        to: "/asset",
      },
      {
        id: "link",
        title: "ลิงค์",
        iconName: "mdi:link",
        to: "/link",
      },
    ],
  },
  {
    id: "system",
    title: "ระบบ",
    menus: [
      // user, role, permission, log
      {
        id: "user",
        title: "ผู้ใช้",
        iconName: "mdi:account",
        to: "/user",
      },
      {
        id: "role",
        title: "บทบาท",
        iconName: "mdi:shield-account",
        to: "/role",
      },
      {
        id: "permission",
        title: "สิทธิ์",
        iconName: "mdi:key",
        to: "/permission",
      },
      {
        id: "log",
        title: "บันทึก",
        iconName: "mdi:history",
        to: "/log",
      },
    ],
  },
];

export { menuConfig };
