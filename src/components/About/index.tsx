import React from "react"
import LizaBio from "../../assets/photos/headshot_small.jpg"
export const About = () => (
    <section className="blue">
        <div className="bio">
            <div className="bio-header">
                <h1>About Me</h1>
                <img alt="profile" src={LizaBio}></img>
            </div>
            <div className="bio-grid">
                <div className="bio-item">
                    <h4>
                        Studious dancer with professional performance
                        experience.
                    </h4>
                    <p>
                        Liza Kroeschell is a Bay Area dancer and dance teacher
                        born and raised in Iowa. She graduated summa cum laude
                        from the Lines Ballet BFA program at Dominican
                        University of California in 2015, and has since
                        performed locally with Bellwether Dance Project,
                        dawsondancesf, .flee dance, and the movement choir of
                        Garrett + Moulton Productions, among others.
                    </p>
                    <p>
                        She has also performed in her hometown as a guest
                        principal dancer in Iowa State Center’s The Nutcracker.
                    </p>
                </div>
                <div className="bio-item">
                    <h4>
                        Skilled educator who trained with the best in the field.
                    </h4>
                    <p>
                        Liza discovered a passion for teaching in 2012 while
                        training under Ms. Corrine Nagata of Nagata Dance, an
                        organization that partners with San Francisco elementary
                        schools to provide recreational dance education.
                    </p>
                    <p>
                        Ms. Nagata's way of inspiring excellence in her students
                        inspired Liza to co-author an essay with Ms. Nagata
                        about her teaching methods, which was published in 2017
                        as the final chapter of the book, Dance Pedagogy for a
                        Diverse World: Culturally Relevant Theory, Research, and
                        Practice.
                    </p>
                </div>
                <div className="bio-item">
                    <h4>
                        Passionate professional teaching children to dance in
                        San Francisco.
                    </h4>
                    <p>
                        Liza is now a senior teacher with Nagata Dance. Each
                        year, she prepares a group of students to perform in the
                        Southwest Airlines Chinese New Year Parade.
                    </p>
                    <p>
                        In 2018, her students at Commodore Sloat Elementary
                        earned second place in the parade! In addition to her
                        work in public and private elementary schools through
                        Nagata Dance, Liza is a dance teacher on faculty at the
                        Jewish Community Center of San Francisco and Geary Dance
                        Center.
                    </p>
                </div>
            </div>
        </div>
    </section>
)
