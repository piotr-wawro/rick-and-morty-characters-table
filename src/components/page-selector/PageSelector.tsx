import PageButton from 'components/page-button/PageButton';
import styles from './PageSelector.module.css'

import arrowLeft from 'icons/arrowLeft.svg'
import arrowRight from 'icons/arrowRight.svg'
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectCurrnetPage, selectPageCount, setCurrentPage } from 'app/pageSelectorSlice';

const PageSelector = () => {
    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(selectCurrnetPage)
    const pageCount = useAppSelector(selectPageCount)
    const buttons: (number|null)[] = []

    const changePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    const handlePreviousPageClick = () => {
        if(currentPage !== 1) {
            changePage(currentPage-1)
        }
    }

    const handleNextPageClick = () => {
        if(currentPage !== pageCount) {
            changePage(currentPage+1)
        }
    }

    if(pageCount < 8) {
        for(let i = 1; i <= pageCount; i++) {
            buttons.push(i)
        }
    }
    else if(pageCount >= 8) {
        buttons.push(1)

        if(currentPage <= 2 || currentPage >= pageCount-1) {
            for(let i = 2; i <= 3; i++) {
                buttons.push(i)
            }
            buttons.push(null)
            for(let i = pageCount-2; i < pageCount; i++) {
                buttons.push(i)
            }
        }
        else if(currentPage <= 4) {
            for(let i = 2; i <= currentPage+1; i++) {
                buttons.push(i)
            }
            buttons.push(null)
            for(let i = pageCount+currentPage-4; i < pageCount; i++) {
                buttons.push(i)
            }
        }
        else if(currentPage >= pageCount-3) {
            for(let i = 2; i <= currentPage-pageCount+4; i++) {
                buttons.push(i)
            }
            buttons.push(null)
            for(let i = (currentPage-1); i < pageCount; i++) {
                buttons.push(i)
            }
        }
        else {
            buttons.push(null)
            for(let i = currentPage-1; i <= currentPage+1; i++) {
                buttons.push(i)
            }
            buttons.push(null)
        }

        buttons.push(pageCount)
    }

    return (
        <div className={styles.container}>
            <PageButton key={'left'} image={arrowLeft} onClick={handlePreviousPageClick} />
            {buttons.map((value, index) => (
                value ? (
                    <PageButton
                        key={index}
                        text={`${value}`}
                        selected={(value === currentPage) ? true : false}
                        onClick={() => {changePage(value)}}
                    />
                ) : (
                    <p key={index} className={styles.dots}>...</p>
                )
            ))}
            <PageButton key={'right'} image={arrowRight} onClick={handleNextPageClick} />
        </div>
    )
}

export default PageSelector
