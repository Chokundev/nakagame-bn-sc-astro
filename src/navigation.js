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
          href: getPermalink('/services'),
        },
        {
          text: 'โปรแกรมการแข่งขัน',
          href: getPermalink('/pricing'),
        },
        {
          text: 'ประกาศจากฝ่ายจัดการแข่งขัน',
          href: getPermalink('/about'),
        },
        {
          text: 'รูปภาพการแข่งขันที่ผ่านมา',
          href: getPermalink('/privacy'),
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
  // links: [
  //   {
  //     title: 'Product',
  //     links: [
  //       { text: 'Features', href: '#' },
  //       { text: 'Security', href: '#' },
  //       { text: 'Team', href: '#' },
  //       { text: 'Enterprise', href: '#' },
  //       { text: 'Customer stories', href: '#' },
  //       { text: 'Pricing', href: '#' },
  //       { text: 'Resources', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Platform',
  //     links: [
  //       { text: 'Developer API', href: '#' },
  //       { text: 'Partners', href: '#' },
  //       { text: 'Atom', href: '#' },
  //       { text: 'Electron', href: '#' },
  //       { text: 'AstroWind Desktop', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Support',
  //     links: [
  //       { text: 'Docs', href: '#' },
  //       { text: 'Community Forum', href: '#' },
  //       { text: 'Professional Services', href: '#' },
  //       { text: 'Skills', href: '#' },
  //       { text: 'Status', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Company',
  //     links: [
  //       { text: 'About', href: '#' },
  //       { text: 'Blog', href: '#' },
  //       { text: 'Careers', href: '#' },
  //       { text: 'Press', href: '#' },
  //       { text: 'Inclusion', href: '#' },
  //       { text: 'Social Impact', href: '#' },
  //       { text: 'Shop', href: '#' },
  //     ],
  //   },
  // ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ThaiUI/astrowind' },
  ],
  footNote: `
    2023-2024 &copy <a class="text-blue-600 underline dark:text-muted" href="https://www.instagram.com/teera.chanon">ธีรชานนท์ พวงเงิน</a> · All rights reserved.
  `,
};
