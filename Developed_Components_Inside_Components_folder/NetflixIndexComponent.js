import { NetflixHeader } from './NetflixHeaderComponent';
import { NetflixMain } from './NetflixMainComponent';
import { NetflixRegister } from './NetflixRegisterComponent';
import { NetflixSubMain } from './NetflixSubMainComponent';
import { NetflixFooter } from './NetflixFooterComponent';

export function NetflixIndex() {
    return (
        <div className='backcolor'>
            <header>
                <NetflixHeader />
            </header>
            <section>
                <NetflixMain />
                <NetflixRegister />
            </section>
            <footer className='bg-black'>
            <NetflixSubMain />
            <div className='bg-black'><NetflixRegister /></div>
            <NetflixFooter />
            </footer>
        </div>
    )
}