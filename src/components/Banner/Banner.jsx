import './Banner.scss';

export default function Banner() {
  return (
    <div className='bg-img-container'>
      <img className='bg-img  bg-img--active' src={require('../../assets/images/bg-desktop-dark.jpg')} alt='' />
      <img className='bg-img ' src={require('../../assets/images/bg-desktop-light.jpg')} alt='' />
    </div>
  );
}