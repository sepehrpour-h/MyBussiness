import { notFound } from 'next/navigation';
import { categories } from '@/lib/data';
import { PageIntro, ServiceCards, CTA } from '@/components/content';
export function generateStaticParams(){return categories.map(c=>({slug:c.slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=categories.find(x=>x.slug===slug);if(!c)notFound();return <><PageIntro eyebrow="راهکارهای کسب‌وکار" title={'همراه '+c.name} description={c.description}/><section className="section container"><h2 className="mb-3 text-2xl font-bold">راهکارهای پیشنهادی برای شما</h2><p className="muted mb-9 text-sm">این خدمات پیشنهادی هستند و جزئیات آن‌ها با تکمیل پلتفرم مشخص می‌شود.</p><ServiceCards/></section><CTA/></>}
