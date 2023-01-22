import ReactPortal from '../ReactPortal'
import style from './_styles.module.scss'

const PostDetails = (): JSX.Element => {
  return (
    <ReactPortal wrapperId="modal">
      <dialog className={style.dialog}>
        <h1>Hola Ke ASE</h1>
      </dialog>
    </ReactPortal>
  )
}

export default PostDetails
