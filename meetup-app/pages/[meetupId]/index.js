import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail image='test.co' address="1" title="te" description="testttt"/>
    );
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    meetupId: '1',
                },
                params: {
                    meetupId: '2',
                }
            }
        ]
    }
}
export async function getStaticProps(context) {
//cant use router in here
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                image: 'test.co',
                id: meetupId,
                address: "1",
                title: "te",
                description:"testttt"
            }
        }
    }
}
export default MeetupDetails;