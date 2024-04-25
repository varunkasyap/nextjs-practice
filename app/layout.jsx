import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metadata = {
    title: "jobnest",
    description: "Dsicover Best job for you."
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gardient' />
                </div>
                <main className='app'>
                <Nav/>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout
