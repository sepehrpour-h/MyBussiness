import Link from 'next/link';
export default function NotFound(){return <section className="container py-32 text-center"><div className="text-6xl font-black text-[#d9e9d3]">۴۰۴</div><h1 className="mt-5 text-2xl font-bold">این صفحه پیدا نشد</h1><p className="muted mt-3 text-sm">شاید نشانی صفحه تغییر کرده باشد.</p><Link href="/" className="btn btn-dark mt-8">بازگشت به صفحه اصلی</Link></section>}
