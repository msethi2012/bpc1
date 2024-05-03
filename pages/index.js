import Link from 'next/Link';
export default function Home() {
 const test="yahoooo ";
 
 return <div>
<h1>hello world</h1>
<div>
  <nav>
<Link href='/api/auth/login'> Login </Link>

  </nav>
</div>


  </div>;
}
