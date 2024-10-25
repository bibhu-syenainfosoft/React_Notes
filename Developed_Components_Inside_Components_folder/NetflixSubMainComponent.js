import TV from './tv.png';
import Mobile from './mobile.jpg';
import Device from './device.png';
import Children from './children.png';

export function NetflixSubMain() {
    return (
        <div className='mt-4'>
            <div id="content2">
                <div className="content22">
                    <p className="p2">Enjoy on your TV.</p>
                    <p className="p3">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="content222">
                    <img alt="TV Not Found" src={TV} width="530" height="400" className="img-fluid" />
                </div>
            </div>

            <div id="content3">
                <div className="content333">
                    <img alt="Mobile Not Found" src={Mobile} width="500" height="350" />
                </div>
                <div className="content33">
                    <p className="p4">Download your shows to watch offline.</p>
                    <p className="p5">Save your favourites easily and always have something to watch..</p>
                </div>
            </div>
            <div id="content4">
                <div className="content44">
                    <p className="p2">Watch everywhere.</p>
                    <p className="p3">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="content444">
                    <img alt="Device Not Found" src={Device} width="530" height="400" />
                </div>
            </div>
            <div id="content5">
                <div className="content555">
                    <img alt="Children Not Found" src={Children} width="500" height="350" />
                </div>
                <div className="content55">
                    <p className="p4">Create profiles for children.</p>
                    <p className="p6">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>

            <div id="content6">
                <div className="content66">
                    <div className="c61 w-100">
                        <p>Frequently Asked Questions</p>
                    </div>
                    <div className="accordion">
                        <div className=" accordion-item mb-2">
                            <div className="accordion-header d-flex justify-content-between">
                                <div className="bg-dark w-100 text-white"><h2 className="p-2"> What is Netflix ?</h2></div>
                                <div>
                                    <div className="bg-dark w-100 text-white p-3" data-bs-toggle="collapse" data-bs-target="#body1"><h3> <span className="bi bi-plus-lg bg-dark text-white"></span></h3></div>
                                </div>
                            </div>
                            <div className="accordion-body bg-dark text-white accordion-collapse collapse" id="body1" data-bs-parent="#main">
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                                <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                            </div>
                        </div>

                        <div className="accordion-item mb-2">
                            <div className="accordion-header d-flex justify-content-between">
                                <div className="bg-dark w-100 text-white"><h2 className="p-2"> How much does Netflix cost ?</h2></div>
                                <div>
                                    <div className="bg-dark w-100 text-white p-3" data-bs-toggle="collapse" data-bs-target="#body2">
                                        <h3> <span className="bi bi-plus-lg bg-dark text-white"></span></h3></div>
                                </div>
                            </div>
                            <div className="accordion-body bg-dark text-white accordion-collapse collapse" id="body2" data-bs-parent="#main">
                                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                            </div>

                        </div>

                        <div className=" accordion-item mb-2">
                            <div className="accordion-header d-flex justify-content-between">
                                <div className="bg-dark w-100 text-white"><h2 className="p-2"> Where can I watch ?</h2></div>
                                <div>
                                    <div className="bg-dark w-100 text-white p-3" data-bs-toggle="collapse" data-bs-target="#body3"><h3> <span className="bi bi-plus-lg bg-dark text-white"></span></h3></div>
                                </div>
                            </div>
                            <div className="accordion-body bg-dark text-white accordion-collapse collapse" id="body3" data-bs-parent="#main">
                                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                                <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                            </div>
                        </div>

                        <div className=" accordion-item mb-2">
                            <div className="accordion-header d-flex justify-content-between">
                                <div className="bg-dark w-100 text-white"><h2 className="p-2"> How do I cancel ?</h2></div>
                                <div>
                                    <div className="bg-dark w-100 text-white p-3" data-bs-toggle="collapse" data-bs-target="#body4"><h3> <span className="bi bi-plus-lg bg-dark text-white"></span></h3></div>
                                </div>
                            </div>
                            <div className="accordion-body bg-dark text-white accordion-collapse collapse" id="body4" data-bs-parent="#main">
                                <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                            </div>
                        </div>

                        <div className="accordion-item mb-2">
                            <div className=" accordion-header d-flex justify-content-between">
                                <div className="bg-dark w-100 text-white"><h2 className="p-2"> What can I watch on netflix ?</h2></div>
                                <div>
                                    <div className="bg-dark w-100 text-white p-3" data-bs-toggle="collapse" data-bs-target="#body5"><h3> <span className="bi bi-plus-lg bg-dark text-white"></span></h3></div>
                                </div>
                            </div>
                            <div className="accordion-body bg-dark text-white accordion-collapse collapse" id="body5" data-bs-parent="#main">
                                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                            </div>
                        </div>

                        <div className=" accordion-item mb-5">
                            <div className="accordion-header d-flex justify-content-between">
                                <div className="bg-dark w-100 text-white"><h2 className="p-2"> Is Netflix good for kids ?</h2></div>
                                <div>
                                    <div className="bg-dark w-100 text-white p-3" data-bs-toggle="collapse" data-bs-target="#body6"><h3> <span className="bi bi-plus-lg bg-dark text-white"></span></h3></div>
                                </div>
                            </div>
                            <div className="accordion-body bg-dark text-white accordion-collapse collapse" id="body6" data-bs-parent="#main">
                                <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                                <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}