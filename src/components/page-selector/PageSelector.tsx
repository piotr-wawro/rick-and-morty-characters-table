import PageButton from 'components/page-button/PageButton';
import styles from './PageSelector.module.css'

import arrowLeft from 'icons/arrowLeft.svg'
import arrowRight from 'icons/arrowRight.svg'

export interface PageSelectorProps {
    pageCount: number;
    currentPage: number;
}

const PageSelector = ({pageCount: pagesCount, currentPage}: PageSelectorProps) => {

    const buttons: JSX.Element[] = []

    if(pagesCount < 8) {
        for(let i = 1; i <= pagesCount; i++) {
            (i === currentPage) ? 
                buttons.push(<PageButton text={`${i}`} selected/>) :
                buttons.push(<PageButton text={`${i}`} />)
        }
    }
    else if(pagesCount >= 8 && (currentPage <=2 || currentPage >= pagesCount-1)) {
        for(let i = 1; i <= 3; i++) {
            (i === currentPage) ? 
                buttons.push(<PageButton text={`${i}`} selected/>) :
                buttons.push(<PageButton text={`${i}`} />)
        }
        buttons.push(<p className={styles.dots}>...</p>)
        for(let i = pagesCount-2; i <= pagesCount; i++) {
            (i === currentPage) ? 
                buttons.push(<PageButton text={`${i}`} selected/>) :
                buttons.push(<PageButton text={`${i}`} />)
        }
    }
    else if(pagesCount >= 8 && currentPage === 3) {
        for(let i = 1; i <= 4; i++) {
            (i === currentPage) ? 
                buttons.push(<PageButton text={`${i}`} selected/>) :
                buttons.push(<PageButton text={`${i}`} />)
        }
        buttons.push(<p className={styles.dots}>...</p>)
        buttons.push(<PageButton text={`${pagesCount-1}`} />)
        buttons.push(<PageButton text={`${pagesCount}`} />)
    }
    else if(pagesCount >= 8 && currentPage === pagesCount-2) {
        buttons.push(<PageButton text={`1`} />)
        buttons.push(<PageButton text={`2`} />)
        buttons.push(<p className={styles.dots}>...</p>)
        for(let i = pagesCount-3; i <= pagesCount; i++) {
            (i === currentPage) ? 
                buttons.push(<PageButton text={`${i}`} selected/>) :
                buttons.push(<PageButton text={`${i}`} />)
        }
    }
    else {
        buttons.push(<PageButton text={`1`} />)
        buttons.push(<p className={styles.dots}>...</p>)
        for(let i = currentPage-1; i <= currentPage+1; i++) {
            (i === currentPage) ? 
                buttons.push(<PageButton text={`${i}`} selected/>) :
                buttons.push(<PageButton text={`${i}`} />)
        }
        buttons.push(<p className={styles.dots}>...</p>)
        buttons.push(<PageButton text={`${pagesCount}`} />)
    }

    return (
        <div className={styles.container}>
            <PageButton image={arrowLeft} />
            {buttons}
            <PageButton image={arrowRight} />
        </div>
    )
}

export default PageSelector
