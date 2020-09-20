import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
export const Testimonials = () => {
    return (
        <section className="px-8 py-32 sm:pt-64 bg-teal-100">
            <CarouselProvider
                infinite
                isIntrinsicHeight={true}
                naturalSlideHeight={75}
                naturalSlideWidth={100}
                totalSlides={5}
                isPlaying
            >
                <Slider>
                    <Slide index={0}>
                        <div className="max-w-xl mx-auto text-center">
                            <div className="sm:text-2xl text-teal-800 italic">
                                "High energy workouts with easy routines to follow that keep the kids engaged."
                            </div>
                            <div className="uppercase text-indigo-700 font-bold mt-8 tracking-widest">Mridula</div>
                            <div className="text-gray-600"> Parent</div>
                        </div>
                    </Slide>
                    <Slide index={1}>
                        <div className="max-w-xl mx-auto text-center">
                            <div className="sm:text-2xl text-teal-800 italic">
                                "I love your positive, warm energy and dance teaching talent."
                            </div>
                            <div className="uppercase text-indigo-700 font-bold mt-8 tracking-widest">Evelyn</div>
                            <div className="text-gray-600"> Parent</div>
                        </div>
                    </Slide>
                    <Slide index={2}>
                        <div className="max-w-xl mx-auto text-center">
                            <div className="sm:text-2xl text-teal-800 italic">
                                "The 5-6 year olds at our public school in San Francisco absolutely cherished our dance
                                classes with Ms. Liza. She created a fun environment for students to actively engage and
                                express themselves. So many smiles and an energy of pure joy filled the room."
                            </div>
                            <div className="uppercase text-indigo-700 font-bold mt-8 tracking-widest">
                                Colleen Wentworth
                            </div>
                            <div className="text-gray-600"> Kindergarten teacher</div>
                        </div>
                    </Slide>
                    <Slide index={3}>
                        <div className="max-w-xl mx-auto text-center">
                            <div className="sm:text-2xl text-teal-800 italic">
                                "My child has built more self-confidence and belief in herself by dancing with Ms.
                                Liza!"
                            </div>
                            <div className="uppercase text-indigo-700 font-bold mt-8 tracking-widest">Huihong</div>
                            <div className="text-gray-600">Parent</div>
                        </div>
                    </Slide>
                    <Slide index={4}>
                        <div className="max-w-xl mx-auto text-center">
                            <div className=" text-teal-800 italic">
                                "My kids look forward to the classes every day. Having tried some of the dance moves, I
                                can see why my kids would enjoy Ms. Liza's classes! The dance routines are creative,
                                manageable, and fun, not to mention the sessions give the kids the exercise they need.
                                Many thanks to Ms. Liza for continuing to teach kids how to dance during this pandemic!"
                            </div>
                            <div className="uppercase text-indigo-700 font-bold mt-8 tracking-widest">Christie</div>
                            <div className="text-gray-600"> Parent</div>
                        </div>
                    </Slide>
                </Slider>
                <DotGroup
                    renderDots={(props) => {
                        return (
                            <div className="justify-between flex w-full">
                                <Dot slide={0}>
                                    <span></span>
                                </Dot>
                                <Dot slide={1}>
                                    <span></span>
                                </Dot>
                                <Dot slide={2}>
                                    <span></span>
                                </Dot>
                                <Dot slide={3}>
                                    <span></span>
                                </Dot>
                                <Dot slide={4}>
                                    <span></span>
                                </Dot>
                            </div>
                        );
                    }}
                    className="max-w-xs sm:max-w-sm mx-auto flex justify-between mt-4 sm:mt-16"
                ></DotGroup>
                <div className="max-w-sm mx-auto flex justify-between mt-8 sm:mt-16">
                    <ButtonBack className="focus:outline-none focus:shadow-outline uppercase tracking-wider font-semibold text-indigo-900 px-4 py-2 hover:bg-teal-200 rounded-md transition duration-200">
                        Previous
                    </ButtonBack>
                    <ButtonNext className="focus:outline-none focus:shadow-outline uppercase tracking-wider font-semibold text-indigo-900 px-4 py-2 hover:bg-teal-200 rounded-md transition duration-200">
                        Next
                    </ButtonNext>
                </div>
            </CarouselProvider>

            {/* <Carousel
                infiniteLoop
                centerMode
                showArrows
                swipeable
                showStatus={false}
                renderItem={(item) => <div className="bg-teal-100 py-16">{item}</div>}
            >
                <div className="max-w-xl mx-auto ">
                    <div className="sm:text-2xl text-teal-800 italic">
                        "The 5-6 year olds at our public school in San Francisco absolutely cherished our dance classes
                        with Ms. Liza. She created a fun environment for students to actively engage and express
                        themselves. So many smiles and an energy of pure joy filled the room."
                    </div>
                    <div className="uppercase text-indigo-700 font-bold mt-8">Colleen Wentworth</div>
                    <div className="text-gray-600"> Kindergarten teacher</div>
                </div>
                <div className="max-w-xl mx-auto ">
                    <div className="sm:text-2xl text-teal-800 italic">
                        "The 5-6 year olds at our public school in San Francisco absolutely cherished our dance classes
                        with Ms. Liza. She created a fun environment for students to actively engage and express
                        themselves. So many smiles and an energy of pure joy filled the room."
                    </div>
                    <div className="uppercase text-indigo-700 font-bold mt-8">Colleen Wentworth</div>
                    <div className="text-gray-600"> Kindergarten teacher</div>
                </div>
            </Carousel> */}
        </section>
    );
};
