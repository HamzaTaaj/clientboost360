import "@/styles/globals.css";
import { Poppins } from 'next/font/google';
import Layout from "@/components/Layout";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return(
    <main className = {poppins.className}>
      <Layout>
 <Component {...pageProps} />
 </Layout>
    </main>
  )
}
