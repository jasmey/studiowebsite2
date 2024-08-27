import React from 'react'
import PageItem from './PageItem'
import './ExplorePages.css'

function ExplorePages(props) {

    const summerPrograms = 
        <div className="scrollable__container">
            <div className="paragraph">
                <p>Summer programs are a really great way to improve quickly in a short period of time. They don't have to be pricey, either! Through internal or external scholarships, attending festivals and summer music programs can be rewarding AND affordable.</p>
            </div>
            <div className="paragraph">
                <p>Here's a quick list of some great summer programs that Wanglings (past and present) have attended or recommend. Talk to Dr. Wang well in advance for advice on scholarships and also to make sure you don't miss important deadlines!</p>
            </div>
            <div className="bullet__columns">
                <div className="bullet__column">
                    <ul>
                        <li>Seattle Piano Institute</li>
                        <li>Pacific Crest Music Festival</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                    </ul>
                </div>
                <div className="bullet__column">
                    <ul>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                    </ul>
                    </div>
                <div className="bullet__column">
                    <ul>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                    </ul>
                </div>
            </div>
        </div>

const competitions = 
    <div className="scrollable__container">
        <div className="paragraph">
            <p>Although college-level competitions can be daunting, Bienen has a history of excellence and with the right amount of preparation and time, anyone can succeed.</p>
        </div>
        <div className="paragraph">
            <p>Here's a quick list of some competitions that Wanglings (past and present) have attended or recommend. Talk to Dr. Wang well in advance for advice on transportation, selecting repertoire, and also to make sure you don't miss important deadlines!</p>
        </div>
        <div className="bullet__columns">
                <div className="bullet__column">
                    <ul>
                        <li>MTNA College Division</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                    </ul>
                </div>
                <div className="bullet__column">
                    <ul>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                    </ul>
                    </div>
                <div className="bullet__column">
                    <ul>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                    </ul>
                </div>
            </div>
        
    </div>

const gigs = 
<div className="scrollable__container">
            <div className="paragraph">
                <p>Being a musician can be rough financially. But there's more opportunities than you'd think to make some spare $$$ to help with your needs. You just need to know where to look!</p>
            </div>
            <div className="paragraph">
                <p>Here's a quick list of some great gigs that Wanglings (past and present) have done or recommend. You can reach out to the people associated with each gig for advice on how to get your foot in the door! (key: "J"=Jasmine)</p>
            </div>
            <div className="bullet__columns">
                <div className="bullet__column">
                    <ul>
                        <li>Church Pianist/Organist (J)</li>
                        <li>Vocal/Instrumental Accompanist (J)</li>
                        <li>Competition Accompanist (J)</li>
                        <li>Teaching (J)</li>
                        <li>Church Cantoring/Singing(J)</li>
                        <li>Large Ensemble Accompaniment (J)</li>
                    </ul>
                </div>
                <div className="bullet__column">
                    <ul>
                        <li>Film Score/Composition Accompaniment (J)</li>
                        <li>Party Musician (J)</li>
                        <li>Page Turning </li>
                        <li>Chamber Music Pianist </li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                    </ul>
                    </div>
                <div className="bullet__column">
                    <ul>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                    </ul>
                </div>
            </div>
        </div>

const rep = 
    <div className="scrollable__container">
        <div className="paragraph">
            <p>There's a lot of repertoire to pick from in piano world! Sometimes it's hard to decide. Here's some recommendations!</p>
        </div>
        <div className="bullet__columns">
                <div className="bullet__column">
                    <ul>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                    </ul>
                </div>
                <div className="bullet__column">
                    <ul>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                    </ul>
                    </div>
                <div className="bullet__column">
                    <ul>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                        <li>xxxxxxx</li>
                    </ul>
                </div>
            </div>
        
    </div>

  return (

    <div>
        <div className='stillbackground'>
        {props.summerPrograms && 
            <PageItem
            src='https://live.staticflickr.com/4155/34269092182_c4758ed109_b.jpg'
            title='Summer Programs'
            subtitle='Spend your summer learning and growing'
            text= { summerPrograms }
            />}
        {props.competitions &&
            <PageItem
            src='https://live.staticflickr.com/2898/13942648787_58d7e8de85_b.jpg'
            title='Competitions'
            subtitle='Incentivize excellence (and win prizes!)'
            text={ competitions } 
            />}
        {props.gigs && 
            <PageItem
            src='https://live.staticflickr.com/2697/4535660904_7362929b0d_b.jpg'
            title='Gigs'
            subtitle='Gain experience and earn money'
            text= { gigs }
            />}
        {props.rep && 
            <PageItem
            src='https://i2.pickpik.com/photos/905/642/455/music-piece-of-music-piano-concert-preview.jpg'
            title='Repertoire Ideas'
            subtitle='Studio recommendations and more'
            text= { rep }
            /> }
        </div>
      
    </div>
  )
}

export default ExplorePages
