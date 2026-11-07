import { PageIntro, CategoryCards, CTA } from '@/components/content';
export const metadata={title:'دسته‌بندی کسب‌وکارها'};
export default function Page(){return <><PageIntro eyebrow="متناسب با شما" title="هر کسب‌وکار، نیازهای خودش را دارد" description="دسته‌بندی کسب‌وکار خود را انتخاب کنید و با راهکارهای پیشنهادی آشنا شوید."/><section className="section container"><CategoryCards/></section><CTA/></>}
