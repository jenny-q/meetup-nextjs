import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUP = [
    {
        id: 'm1',
        title: 'First',
        image: 'test.png',
        address: '123 first test',
        description: 'this is first meetup'
    },
    {
        id: 'm1',
        title: 'Second',
        image: 'test.png',
        address: '123 Second test',
        description: 'this is Second meetup'
    }
]
function HomePage(props) {
    return  (
        <MeetupList meetups = {props.meetups} />
    )
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUP
        },
        revalidate: 11
    }
}

// export async function getServersideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: DUMMY_MEETUP
//         }
//     }
// }
export default HomePage;