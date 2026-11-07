import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/site';
export const metadata: Metadata = { title: { default: 'همراه | کنار کسب‌وکار شما', template: '%s | همراه' }, description: 'راهکارهای ساده و کاربردی برای رشد کسب‌وکارهای کوچک' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="fa" dir="rtl"><body><Header/><main>{children}</main><Footer/></body></html> }
