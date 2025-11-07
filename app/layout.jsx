// Ví dụ sử dụng font Inter (JS thuần)
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

// Cấu hình component theo cú pháp JS (không có type cho props)
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}