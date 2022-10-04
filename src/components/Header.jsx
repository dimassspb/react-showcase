function Header() {
    return (
        <nav className='teal lighten-2'>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo'>
                    React Showcase
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/dimassspb/react-showcase'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
