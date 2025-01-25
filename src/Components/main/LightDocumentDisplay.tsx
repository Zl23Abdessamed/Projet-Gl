import { Link } from 'react-router-dom'
import { LightDocument } from '../../Types/types'

const LightDocumentDisplay = ({doc} : {doc : LightDocument}) => {
  return (
    <Link className='w-2/3 h-16 flex rounded-lg overflow-hidden' to={`/main/documents/${doc.id}`}>
        <span className='w-40 h-full flex justify-center items-center bg-ternary-semi-dark-color text-ternary-light-color text-xl font-semibold'>
            {doc.subject}
        </span>
        <span className='flex-1 h-full flex justify-center items-center bg-ternary-extra-light-color text-ternary-dark-color text-3xl font-medium tracking-widest'>
            {doc.senderName}
        </span>
    </Link>
  )
};

export default LightDocumentDisplay