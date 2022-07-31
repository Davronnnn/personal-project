import {GetStaticProps} from 'next';

const profile = () => {
    return (
        <div className='underline'>
            Enter
        </div>
    );
}

export const getStaticProps:GetStaticProps = async (ctx) => {


    return {
        props:{
            data:null
        }
    }
}

export default profile;