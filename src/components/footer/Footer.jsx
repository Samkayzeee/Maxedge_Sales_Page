const Footer = () => {
    return ( 
        <footer className="footer bg-neutral text-neutral-content items-center p-8">
            <aside className="grid-flow-col items-center">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>

            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a>
                    Terms of Service
                </a>
                <a>
                    Privacy Policy
                </a>
                <a>
                    Legal
                </a>
            </nav>
    </footer>
     );
}
 
export default Footer;