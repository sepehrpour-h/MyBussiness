import { PageIntro, PostCards, CTA } from '@/components/content';
export const metadata={title:'مجله همراه'};
export default function Page(){return <><PageIntro eyebrow="مجله همراه" title="ایده‌های تازه برای قدم‌های بعدی" description="از تجربه‌ها، راهکارها و ایده‌هایی بخوانید که به رشد کسب‌وکار شما کمک می‌کنند."/><section className="section container"><h2 className="mb-8 text-2xl font-bold">آخرین مطالب</h2><PostCards/></section><CTA/></>}
