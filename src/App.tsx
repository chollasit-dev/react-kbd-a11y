import reactLogo from '@/assets/react.svg';

export default function App() {
  return (
    <main>
      <section className='h-dvh content-center'>
        <div className='lg:auto m-auto grid w-fit place-items-center gap-x-8 gap-y-6 px-4 lg:translate-x-8 lg:grid-flow-col lg:px-0'>
          <div className='lg:-translate-y-2'>
            <img
              src={reactLogo}
              className='size-24 animate-[spin_20s_linear_infinite] lg:size-20'
              alt='React logo'
            />
          </div>
          <div className='space-y-2 text-pretty text-center text-xl lg:space-y-4 lg:text-start lg:text-2xl'>
            <h1 className='hidden text-4xl lg:grid lg:text-5xl'>
              REACT KEYBOARD ACCESSIBILITY
            </h1>
            <h1 className='grid text-4xl lg:hidden lg:text-5xl'>
              REACT KBD A11Y
            </h1>
            <div className='max-w-[50ch]'>
              เว็บไซต์รวบรวม
              <span className='font-semibold text-cyan-300'> React </span>
              components รองรับการใช้งานด้วย Keyboard เป็นอย่างดี
            </div>
            <div className='max-w-[50ch]'></div>
          </div>
        </div>
      </section>
    </main>
  );
}
