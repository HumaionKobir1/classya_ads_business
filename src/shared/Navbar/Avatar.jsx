import avatarImg from '../../assets/images/avater/avatar.jpg'
const Avatar = () => {

    return (
        <img className='rounded-full' src={avatarImg} alt="profile" height='30' width='30' />
    );
};

export default Avatar;