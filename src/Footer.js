function Footer() {

    const currentYear = new Date;

    return (
        <footer>
            <h3>
                Created at Juno College {currentYear.getUTCFullYear()}
            </h3>
        </footer>
    )
}

export default Footer;