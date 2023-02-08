import logo from "../assets/img/logo.svg";

export default function Footer () {
    return(
        <footer className="container mx-auto px-4 py-6 xl:px-0">
            <img src={logo} alt="YelpCamp is a curated list of the best camping spots on Earth." />
        </footer>
    )
}