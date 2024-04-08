import Header from './Component/Header/index';
import Logo from './Component/Header/Logo';
import Menu from './Component/Header/Menu';


export default function Home() {
  const name = "Learn Nextjs with me"
  return (
    <div className="pt-10 text-center h-screen cursor-pointer">
      <Header name={name} />
      <Logo />
      <Menu />
      <h1 className="font-semibold text-red-300">Hello Next.js</h1>
    </div>
  );
}
