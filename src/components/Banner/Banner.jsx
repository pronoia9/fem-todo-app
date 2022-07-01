import './Banner.scss';

export default function Banner() {
  return (
    <div class='bg-img-container svelte-7ijpyd'>
      <img class='bg-img svelte-7ijpyd bg-img--active' src={require('../../assets/images/bg-desktop-dark.jpg')} alt='' />
      <img class='bg-img svelte-7ijpyd' src={require('../../assets/images/bg-desktop-light.jpg')} alt='' />
    </div>
  );
}