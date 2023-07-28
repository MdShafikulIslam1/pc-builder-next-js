import RootLayout from "@/components/Layout/RootLayout";
import "@/styles/globals.css";

// export default function MyApp({ Component, pageProps }) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout || ((page) => page)

//   return getLayout(<Component {...pageProps} />)
// }

export default function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
