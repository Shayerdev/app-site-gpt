import '@styles/globals.css';
import { Inter } from 'next/font/google'
import Navbar from "@components/Navbar";
import AuthProvider from "@providers/authProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AiPrompts',
  description: 'Collect your prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProvider>
              <Navbar/>
              { children }
          </AuthProvider>
      </body>
    </html>
  )
}
