function Footer() {

    const currentYear = new Date();

    return (
        <footer>
            <h3>
                Created at <a href="https://junocollege.com/">Juno College</a> {currentYear.getUTCFullYear()}
            </h3>
        </footer>
    )
}

export default Footer;