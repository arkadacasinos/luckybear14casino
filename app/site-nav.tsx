'use client'

import { useState } from 'react'

const navLinks = [
  { href: '#site', label: 'Официальный сайт' },
  { href: '#mirror', label: 'Зеркало' },
  { href: '#register', label: 'Регистрация' },
  { href: '#bonus', label: 'Бонусы' },
  { href: '#games', label: 'Игры' },
  { href: '#reviews', label: 'Отзывы' },
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="lbr-nav__toggle"
        aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={open}
        aria-controls="mainNav"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
      </button>

      <nav
        className={`lbr-nav${open ? ' is-open' : ''}`}
        id="mainNav"
        aria-label="Основная навигация"
      >
        <ul className="lbr-nav__list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="lbr-nav__link"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
