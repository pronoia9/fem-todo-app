import React from 'react';
import ThemeButton from '../ThemeButton/ThemeButton';
import './Header.scss';

export default function Header() {
  return (
    <div className='main__header'>
      <h1 className='heading'>TODO</h1>
      <ThemeButton />
    </div>
  );
};