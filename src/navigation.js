import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'หน้าแรก',
      href: getPermalink('/'),
    },
    {
      text: 'ข้อมูลนาคาเกมส์',
      links: [
        {
          text: 'สัญลักษณ์การแข่งขัน',
          href: getPermalink('/competition-symbol'),
        },
        {
          text: 'โปรแกรมการแข่งขัน',
          href: getPermalink('/program'),
        },
        {
          text: 'ประกาศจากฝ่ายจัดการแข่งขัน',
          href: getPermalink('/annouce'),
        },
        {
          text: 'รูปภาพการแข่งขันที่ผ่านมา',
          href: getPermalink('/gallery'),
        },
      ],
    },
    {
      text: 'ผลการแข่งขัน',
      links: [
        {
          text: 'แบดมินตัน ม.ต้น',
          href: getPermalink('/compet-result/badminton-junior'),
        },
        {
          text: 'แบดมินตัน ม.ปลาย',
          href: getPermalink('/compet-result/badminton-senior'),
        },
        {
          text: 'ปิงปอง ม.ต้น',
          href: getPermalink('/compet-result/table-tennis-junior'),
        },
        {
          text: 'ปิงปอง ม.ปลาย',
          href: getPermalink('/compet-result/table-tennis-senior'),
        },
        {
          text: 'วอลเลย์บอล',
          href: getPermalink('/compet-result/volleyball'),
        },
        {
          text: 'บาสเกตบอล',
          href: getPermalink('/compet-result/basketball'),
        },
        {
          text: 'RoV : Arena Of Valor',
          href: getPermalink('/compet-result/rov'),
        },
        {
          text: 'PES : E-Football Mobile',
          href: getPermalink('/compet-result/pes'),
        },
        {
          text: 'ซอคเกอร์ ม.ต้น',
          href: getPermalink('/compet-result/soccer-junior'),
        },
        {
          text: 'ซอคเกอร์ ม.ปลาย',
          href: getPermalink('/compet-result/soccer-senior'),
        },
      ],
    },
    {
      text: 'สรุปผลการแข่งขัน',
      links: [
        {
          text: 'แบดมินตัน ม.ต้น',
          href: getPermalink('/sum-compet-result/badminton-junior'),
        },
        {
          text: 'แบดมินตัน ม.ปลาย',
          href: getPermalink('/sum-compet-result/badminton-senior'),
        },
        {
          text: 'ปิงปอง ม.ต้น',
          href: getPermalink('/sum-compet-result/table-tennis-junior'),
        },
        {
          text: 'ปิงปอง ม.ปลาย',
          href: getPermalink('/sum-compet-result/table-tennis-senior'),
        },
        {
          text: 'วอลเลย์บอล',
          href: getPermalink('/sum-compet-result/volleyball'),
        },
        {
          text: 'บาสเกตบอล',
          href: getPermalink('/sum-compet-result/basketball'),
        },
        {
          text: 'RoV : Arena Of Valor',
          href: getPermalink('/sum-compet-result/rov'),
        },
        {
          text: 'PES : E-Football Mobile',
          href: getPermalink('/sum-compet-result/pes'),
        },
        {
          text: 'ซอคเกอร์ ม.ต้น',
          href: getPermalink('/sum-compet-result/soccer-junior'),
        },
        {
          text: 'ซอคเกอร์ ม.ปลาย',
          href: getPermalink('/sum-compet-result/soccer-senior'),
        },
      ],
    },
    {
      text: 'สรุปอันดับเหรียญ',
      href: getPermalink('/medal-ranking'),
      
    }
  ],
  actions: [{ text: 'จัดการผลการแข่งขัน', href: 'https://nakagame-mis.bn-sc.cloud', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'สำหรับนักเรียนและครู',
      links: [
        { text: 'NAKAGAME-BOT', href: 'https://lin.ee/IzwtFqf' },
        { text: 'ผลการแข่งขัน', href: '#' },
        { text: 'สรุปผลการแข่งขัน', href: '#' },
        { text: 'สรุปอันดับเหรียญ', href: '/medal-ranking' },
      ],
    },
    {
      title: 'สำหรับฝ่ายจัดการแข่งขัน',
      links: [
        { text: 'ระบบจัดการผลการแข่งขัน', href: 'https://nakagame-mis.bn-sc.cloud' },
        { text: 'คู่มือการใช้งานระบบ', href: 'https://drive.google.com/file/d/1kkGXFoyl3Ds-LUCtBSTrgsFIvr0GAURm/view' },
        { text: 'วิดีโอสาธิตการใช้งานระบบ', href: 'https://youtu.be/UBLQjjdjiUE' },
      ],
    },
    {
      title: 'สำหรับผู้ดูแลระบบ',
      links: [
        { text: 'ระบบจัดการผลการแข่งขัน', href: 'https://nakagame-mis.bn-sc.cloud' },
        { text: 'สถานะเว็บไซต์', href: 'https://status.bn-sc.cloud' },
        { text: 'สถานะส่วนเสริมเว็บไซต์', href: 'https://nakagame-api-status.bn-sc.cloud/' },
        { text: 'API สำหรับนักพัฒนาระบบ', href: 'https://nakagame-api.bn-sc.cloud' },
      ],
    },
    {
      title: 'ติดต่อเรา',
      links: [
        { text: 'ติดต่อ', href: '/contact' },
        { text: 'แจ้งเว็บไซต์มีปัญหา', href: 'https://bit.ly/nakagame-suppt' },
        { text: 'Line : Support', href: 'https://lin.ee/os4CQ3p' },
        
      ],
    },
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/bn_sc.official/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/bncommission' },
  ],
  footNote: `
    2024 &copy <a class="text-blue-600 underline dark:text-muted" href="https://www.instagram.com/teera.chanon">ธีรชานนท์ พวงเงิน</a> · All rights reserved.
  `,
};
