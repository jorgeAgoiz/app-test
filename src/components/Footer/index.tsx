import { useTranslation } from 'react-i18next'
import { BsSuitHeartFill } from 'react-icons/bs'
import Button from '../Button'
import style from './styles.module.scss'

const Footer = (): JSX.Element => {
  const [t, i18n] = useTranslation('global')
  const lang: string = i18n.language

  const handleLanguage = (): void => {
    if (lang === 'es') {
      i18n.changeLanguage('en')
    }
    if (lang === 'en') {
      i18n.changeLanguage('es')
    }
  }

  return (
    <footer className={style.footer}>
      <p className={style.footer__text}>{t('footer.language.text')}</p>
      <div className={style.footer__language}>
        {lang === 'es' ? (
          <Button
            type="button"
            category="session"
            text={t('footer.language.english_btn')}
            handleClick={handleLanguage}
          />
        ) : (
          <Button
            type="button"
            category="session"
            text={t('footer.language.spanish_btn')}
            handleClick={handleLanguage}
          />
        )}
      </div>
      <p className={style.footer__text}>
        {`${t('footer.signature.part_one')} `}
        <BsSuitHeartFill className={style.footer__icon} title="love" />
        {` ${t('footer.signature.part_two')}`}
      </p>
    </footer>
  )
}

export default Footer
